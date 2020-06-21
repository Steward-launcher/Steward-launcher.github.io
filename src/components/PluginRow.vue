<template>
  <div class="plugin-row">
    <div class="plugin-logo-wrap">
      <img class="plugin-logo" :src="plugin.iconUrl" alt="">
    </div>
    <div class="plugin-main">
      <div class="plugin-name">
        <router-link :to="`/plugin/${plugin.objectId}`">
          {{ plugin.name }}
        </router-link>
      </div>
      <div class="plugin-intro">{{ plugin.description }}</div>
    </div>
    <div class="plugin-right">
      <div class="plugin-btns">
        <div class="plugin-edit" v-if="editable">
          <router-link class="plugin-edit" :to="`/plugin/update/${id}`">
            <a-icon style="margin-left: 10px;" type="edit" theme="filled" v-if="editable" />
            Edit
          </router-link>
        </div>
      </div>
      <div class="plugin-created">
        <div class="author">by
          <router-link :to="`/user/${plugin.author.objectId}`">
            {{ plugin.author.username }}
          </router-link>
        </div>
        <div class="time">{{ plugin.createdAt | timeago }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeago } from '../filter/time'
import { mapGetters } from 'vuex';

export default {
  props: ['plugin', 'id'],
  name: 'PluginRow',

  filters: {
    timeago
  },


  components: {
  },

  computed: {
    ...mapGetters('account', ['loggedIn', 'user', 'uid']),
    editable() {
      return this.uid === this.plugin.author.objectId
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.plugin-row {
  display: flex;
  padding: 8px 12px;
  border-bottom: 1px solid #ededed;
  align-items: center;

  &:last-child {
    border-bottom: 0;
  }
}

.plugin-logo-wrap {
  margin-right: 20px;

  .plugin-logo {
    width: 32px;
    height: 32px;
  }
}

.plugin-main {
  flex: 1;
}

.plugin-name {
  font-size: 16px;
  color: $color-deep;
}

.plugin-intro {
  margin-top: 8px;
  font-size: 14px;
  color: $color-light;
}

.plugin-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}

.plugin-btns {
  display: flex;
}

.plugin-created {
  display: flex;
}

.count {
  margin-left: 5px;
}

.time {
  margin-left: 10px;
}

.anticon {
  cursor: pointer;
}

</style>