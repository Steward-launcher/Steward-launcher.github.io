<template>
  <div class="page-plugin">
    <div class="container">
      <div class="plugin-wrap" v-if="plugin">
        <div class="plugin-head">
          <div class="plugin-name">
            <img class="plugin-logo" :src="plugin.iconUrl" alt="">
            {{plugin.name}}
          </div>
          <div class="plugin-data">
            <div class="plugin-btns">
              <router-link class="plugin-edit" :to="`/plugin/update/${id}`">
                <a-icon style="margin-left: 10px;" type="edit" theme="filled" v-if="editable" />
                Edit
              </router-link>
            </div>
            <div class="author">
              by
              <router-link
                :to="`/user/${plugin.author.objectId}`"
              >{{ plugin.author.username }}</router-link>
            </div>
          </div>
        </div>
        <div class="plugin-main">
          <div class="install-command-box">spm install {{plugin.name}}</div>
          <ul class="plugin-fields">
            <li class="plugin-field">
              <span class="label">Bundle ID</span>
              <code>{{plugin.bundleId}}</code>
            </li>
            <li class="plugin-field">
              <a :href="plugin.repository" target="_blank">View on Github</a> / 
              <a :href="plugin.codeUrl" target="_blank">Source Code</a>
            </li>
            <li class="plugin-field">
              <span class="label">Short Description</span>
              <div>{{plugin.description}}</div>
            </li>
            <li class="plugin-field">
              <span class="label">Last Updated</span>
              <div>{{plugin.updatedAt | date}}</div>
            </li>
            <li class="plugin-field">
              <span class="label">Version</span>
              <div>{{ plugin.version }} </div>
            </li>
            <li class="plugin-field">
              <span class="label">Commands</span>
              <a-table size="small" :columns="commandColumns" :data-source="plugin.commands"
                :pagination="false" :bordered="true"></a-table>
            </li>
          </ul>
          <div class="plugin-readme">
            <h3>{{$t("README")}}</h3>
            <div class="readme-view" v-if="readmeHtml" v-html="readmeHtml"></div>
            <a-empty :description="$t('No README')" v-else/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pluginService } from "../services/plugin.service";
import { getUser } from '../services/user.service'
import { parseMarkdown } from '../helpers/marked.helper'
import { commandColumns } from './config/pluginform.config'
import { date } from '../filter/time'

export default {
  name: "Plugin",

  filters: {
    date
  },

  components: {
  },

  data() {
    return {
      id: this.$route.params.id,
      plugin: null,
      readmeHtml: '',
      editable: false,
      commandColumns
    };
  },

  methods: {
    isAuthor(author) {
      const user = getUser()

      if (user && user.id === author.objectId) {
        return true
      } else {
        return false
      }
    },

    loadData() {
      pluginService.item(this.id).then(plugin => {
        this.plugin = plugin.toJSON();
        this.editable = this.isAuthor(this.plugin.author)

        if (this.plugin && this.plugin.readme) {
          this.readmeHtml = parseMarkdown(this.plugin.readme)
        }
      });
    }
  },

  mounted() {
    this.loadData();
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.container {
  width: 960px;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border: 1px solid #ededed;
}

.plugin-logo {
  margin-right: 5px;
  width: 32px;
  height: 32px;
}

.plugin-name {
  font-size: 20px;
  font-weight: 500;
}

.plugin-data {
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 14px;
}

.plugin-btns {
  display: flex;
}

.anticon {
  cursor: pointer;
}

.plugin-head {
  padding-bottom: 5px;
  border-bottom: 1px solid #ededed;
}

.plugin-fields {
  margin-top: 10px;
  list-style: none;
}

.install-command-box {
  display: flex;
  margin-top: 20px;
  align-items: center;
  padding: 0 8px;
  height: 50px;
  font-size: 22px;
  background: rgba(0, 0, 0, .7);
  color: #fff;
  width: 500px;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,.12), 0 0 10px 0 rgba(0,0,0,.04);
}

.count {
  margin-left: 5px;
}

.plugin-field {
  font-size: 14px;
}

.label {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 5px;
  margin-right: 10px;
  font-size: 19px;
  color: $color-deep;
  font-weight: 400;
}

.plugin-readme {
  margin-top: 20px;
}

.readme-view {
  padding: 10px 25px;
  background: rgba(27,31,35,.05);
  line-height: 1.45!important;
}

code {
  background: rgba(27,31,35,.05);
  border-radius: 3px;
  padding: 3px 5px;
}

.plugin-video {
  margin-top: 20px;
}

.btn-install {
  color: $color-primary;
  cursor: pointer;
}
</style>
<style lang="scss">
.readme-view {
  img {
    max-width: 70%;
  }
}
</style>