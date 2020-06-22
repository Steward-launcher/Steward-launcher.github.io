<template>
  <div class="page-plugins">
    <div class="container">
      <div class="top-tools">
        <a-input-search placeholder="Search plugins" enter-button
          size="large" @search="onSearch" v-model="filter.searchText">
          <a-select size="large" style="width: 120px;"
            :dropdownMatchSelectWidth="false" @change="onCategoryChange"
            placeholder="Please choose"
            slot="addonBefore" v-model="filter.category">
            <a-select-option v-for="item in options.categories" :key="item.value" :value="item.value">
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-input-search>
        <a-button type="primary" size="large" class="btn-add" @click="onAddClick">
          <a-icon type="plus"/>
        </a-button>
      </div>
      <loading :visible="loading"/>
      <div class="plugins" v-if="list.length">
        <plugin v-for="item in list" :key="item.objectId" :plugin="item" :id="item.objectId" />
      </div>
      <a-empty v-if="!loading && !list.length"/>
    </div>
  </div>
</template>

<script>
import { pluginService } from '../services/plugin.service'
import Plugin from '../components/PluginRow'
import Loading from '../components/Loading'
import { PLUGIN_CATEGORIES } from '../constant/options'

export default {
  name: 'Plugins',

  components: {
    Plugin,
    Loading
  },

  data() {
    return {
      loading: true,
      list: [],
      filter: {
        category: '',
        searchText: ''
      },
      options: {
        categories: [
          { label: 'All', value: '' },
          ...PLUGIN_CATEGORIES
        ]
      }
    }
  },

  methods: {
    loadData() {
      const { category, searchText } = this.filter

      this.loading = true
      pluginService.list(category, searchText.trim()).then(results => {
        this.loading = false
        this.list = results.map(item => item.toJSON())
      })
    },

    onSearch() {
      this.loadData()
    },

    onCategoryChange() {
      this.loadData()
    },

    onAddClick() {
      this.$router.push({ name: 'PluginCreate' });
    }
  },

  mounted() {
    this.loadData()
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.container {
  padding-top: 30px;
  margin: 0 auto;
  width: 1080px;
}

.top-tools {
  margin-bottom: 20px;
  display: flex;
}

.plugins {
  background: #fff;
  margin-bottom: 20px;
}

.btn-add {
  margin-left: 100px;
}
</style>