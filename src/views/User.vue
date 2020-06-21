<template>
  <div class="page-user">
    <div class="container">
      <div class="user-wrap" v-if="user">
        <div class="user-panel">
          <a-icon type="user" />
          <span class="user-name">{{user.username}}</span>
        </div>
        <div class="user-data">
        </div>
      </div>
      <a-empty v-if="!loading && !user"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'User',

  components: {
  },

  data() {
    return {
      loading: true,
      uid: this.$route.params.id,
      list: []
    }
  },

  computed: {
    user() {
      if (this.list.length) {
        return this.list[0].author
      } else {
        return null;
      }
    }
  },

  methods: {
    loadData() {

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
  width: 960px;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border: 1px solid #ededed;
}

.user-data {
  border-top: 1px solid #ededed;
  margin-top: 20px;
}

.user-panel {
  font-size: 16px;
}

.user-name {
  margin-left: 10px;
}
</style>