<template>
  <div class="page-create">
    <div class="container">
      <div class="form-panel">
        <a-form-model
          :model="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 15 }"
          ref="form"
          :rules="rules"
        >
          <a-form-model-item label="Code URL" prop="codeUrl" :wrapper-col="{ span: 18 }">
            <a-input
              v-model="form.codeUrl"
              :placeholder="$t('Please enter the url of source code first')"
            >
              <a-icon type="cloud-download" slot="addonAfter" @click="loadCodeUrl" />
            </a-input>
          </a-form-model-item>
          <template v-if="codeChecked">
            <a-form-model-item label="BundleId" prop="bundleId">
              <a-input v-model="form.bundleId" :placeholder="$t('Please enter the bundleId, such as com.oksteward.example')"></a-input>
            </a-form-model-item>
            <a-form-model-item label="Version" prop="version">
              <a-input v-model="form.version" :placeholder="$t('Please enter the version')"></a-input>
            </a-form-model-item>
            <a-form-model-item label="Icon" prop="iconUrl">
              <a-input v-model="form.iconUrl" :placeholder="$t('Please enter the iconUrl')"></a-input>
            </a-form-model-item>
            <a-form-model-item label="Name" prop="name">
              <a-input v-model="form.name" :placeholder="$t('Please enter the name')"></a-input>
            </a-form-model-item>
            <a-form-model-item label="Category" prop="category">
              <a-select
                :dropdownMatchSelectWidth="false"
                :placeholder="$t('Please select the category')"
                v-model="form.category"
              >
                <a-select-option
                  v-for="item in options.categories"
                  :key="item.value"
                  :value="item.value"
                >{{ item.label }}</a-select-option>
              </a-select>
            </a-form-model-item>
            <a-form-model-item label="Description" prop="description">
              <a-textarea
                v-model="form.description"
                :placeholder="$t('Please enter the description')"
                :autoSize="{minRows: 2}"
              ></a-textarea>
            </a-form-model-item>
            <a-form-model-item label="Commands" prop="commands">
              <a-table size="small" :columns="commandColumns" :data-source="form.commands"
                :pagination="false" :bordered="true"></a-table>
            </a-form-model-item>
            <a-form-model-item label="Repository" prop="repository">
              <a-input v-model="form.repository" :placeholder="$t('Please enter the repository')"></a-input>
            </a-form-model-item>
            <a-form-model-item label="README" prop="readmd" :wrapper-col="{ span: 18 }">
              <a-icon type="read" :class="{'is-active': inpreview}" @click="onPreviewClick" />
              <a-textarea
                v-model="form.readme"
                v-show="!inpreview"
                :placeholder="$t('Please enter the README')"
                :autoSize="{minRows: 2}"
              ></a-textarea>
              <div class="intro-preview" v-if="inpreview" v-html="readmePreview"></div>
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 10, offset: 5 }">
              <a-button type="primary" :disabled="submitting" @click="handleSubmit">{{ submitBtnText }}</a-button>
            </a-form-model-item>
          </template>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import { PLUGIN_CATEGORIES } from "../constant/options";
import {
  getDefaultForm,
  getFormRules,
  commandColumns
} from "./config/pluginform.config";
import { addOne, pluginService } from "../services/plugin.service";
import { getUser } from "../services/user.service";
import { parseMarkdown } from "../helpers/marked.helper";
import { loadPluginCode } from '../helpers/plugin.helper'

export default {
  name: "PluginCreateOrUpdate",

  data() {
    const id = this.$route.params.id;

    return {
      id,
      mode: id ? "update" : "create",
      options: {
        categories: PLUGIN_CATEGORIES
      },
      form: getDefaultForm(),
      rules: getFormRules(this),
      codeChecked: true,
      readmePreview: "",
      inpreview: false,
      submitting: false,
      commandColumns
    };
  },

  computed: {
    submitBtnText() {
      return this.mode === "create" ? this.$t("Create") : this.$t("Update");
    }
  },

  methods: {
    isAuthor(author) {
      const user = getUser();

      return user.id === author.objectId;
    },

    loadData() {
      pluginService.item(this.id).then(resp => {
        const plugin = resp.toJSON();
        if (this.isAuthor(plugin.author)) {
          this.handleData(plugin);
        } else {
          this.$message.warn(this.$t("Permission denied"), () => {
            this.$router.replace("/");
          });
        }
      });
    },

    handleData(plugin) {
      const {
        bundleId,
        category,
        codeUrl,
        commands,
        name,
        description,
        iconUrl,
        repository,
        version,
        readme
      } = plugin;

      Object.assign(this.form, {
        bundleId,
        category,
        codeUrl,
        commands,
        name,
        description,
        iconUrl,
        repository,
        version,
        readme
      });
    },

    reset() {
      this.form = getDefaultForm();
    },

    create(formData) {
      return addOne(formData)
        .then(() => {
          this.submitting = false;
          this.$message.success(this.$t("Create successfully!"));
          this.reset();
        })
        .catch(() => {
          this.submitting = false;
          this.$message.error(this.$t("Create failed!"));
        });
    },

    update(formData) {
      return pluginService
        .updateOne(this.id, formData)
        .then(() => {
          this.submitting = false;
          this.$message.success(this.$t("Update successfully"));
        })
        .catch(() => {
          this.submitting = false;
          this.$message.error(this.$t("Update failed"));
        });
    },

    submit() {
      const params = Object.assign({}, this.form);
      const formData = {
        ...params
      };
      this.submitting = true;

      if (this.mode === "create") {
        this.create(formData);
      } else {
        this.update(formData);
      }
    },

    handleSubmit(e) {
      e.preventDefault();
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submit();
        }
      });
    },

    onPreviewClick() {
      this.inpreview = !this.inpreview;
      if (this.inpreview) {
        this.readmePreview = parseMarkdown(this.form.readme);
      }
    },

    handlePluginMeta(meta) {
      const { commands, category, icon, name, version } = meta;
      this.form.commands = commands;
      this.form.category = category;
      this.form.iconUrl = icon;
      this.form.name = name;
      this.form.version = version;
      this.codeChecked = true;
    },

    loadCodeUrl() {
      loadPluginCode(this.form.codeUrl).then((meta) => {
        console.log("loadCodeUrl -> meta", meta)
        this.handlePluginMeta(meta)
      }).catch((msg = 'Load error') => {
        this.$message.warning(msg)
      })
    }
  },

  mounted() {
    if (this.mode === "update") {
      this.loadData();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.container {
  padding-top: 30px;
  margin: 0 auto;
  width: 960px;
}

.form-panel {
  padding: 40px;
  background: #fff;
  border: 1px solid #ededed;
}

.code {
  line-height: 1.2;
}

.intro-preview {
  padding: 10px 25px;
  background: rgba(27, 31, 35, 0.05);
  line-height: 1.45 !important;

  img {
    max-width: 70%;
  }
}

.anticon {
  &.is-active {
    color: $color-primary;
  }
}
</style>
<style lang="scss">
.intro-preview {
  img {
    max-width: 70%;
  }
}
</style>