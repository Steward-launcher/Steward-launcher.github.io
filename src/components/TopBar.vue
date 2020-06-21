<template>
  <div class="topbar">
    <header class="main-header">
      <div class="container">
        <a href="/" class="logo"></a>
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/">{{$t("home")}}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/plugins">{{$t("Plugins")}}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/websites">{{$t("Websites")}}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/components">{{$t("Components")}}</router-link>
            </li>
          </ul>
        </nav>
        <nav class="right-nav">
          <ul class="right-nav-list">
            <li style="position: relative; top: 3px;">
              <a class="github-button" href="https://github.com/solobat/steward"
                data-icon="octicon-star" data-size="large" data-show-count="true"
                aria-label="Star solobat/steward on GitHub">Star</a>
            </li>
            <li>
              <a href="https://oksteward.com/steward-documents/">{{$t("Document")}}</a>
            </li>
            <li v-if="$i18n.locale === 'zh_CN'">
              <a href="http://bbs.oksteward.com">{{$t("Forum")}}</a>
            </li>
            <li>
              <a-dropdown :trigger="['click']">
                <span class="btn-trigger">{{$t("langChoose")}}
                  <a-icon type="caret-down" />
                </span>
                <a-menu slot="overlay">
                  <a-menu-item @click="changeLang('en')">
                    <a href="javascript:;">English</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;" @click="changeLang('zh_CN')">简体中文</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </li>
            <li v-if="!loggedIn">
              <router-link to="/register" class="link-btn">{{$t('signup')}}</router-link>
              <router-link to="/login" class="link-btn">{{$t('login')}}</router-link>
            </li>
            <li v-else>
              <a-dropdown :trigger="['click']" overlayClassName="user-layer">
                <span class="btn-trigger">{{user.username}}
                  <a-icon type="caret-down" />
                </span>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <router-link :to="`/user/${uid}`" class="link-btn">{{$t('mypage')}}</router-link>
                  </a-menu-item>
                  <a-menu-item>
                    <div @click="onLogoutClick">{{$t("logout")}}</div>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "TopBar",

  computed: {
    ...mapGetters('account', ['loggedIn', 'user', 'uid'])
  },

  methods: {
    ...mapActions('account', ['logout']),

    onLogoutClick() {
      this.logout().then(() => {
        this.$message.success(this.$t('logout.ok'));
      })
    },

    changeLang(lang) {
      this.$i18n.locale = lang
      window.localStorage.setItem('language', lang)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.topbar {
  height: 60px;
  background: $background-color-black;
  color: #fff;
}

.main-header {
  position: relative;
  height: 60px;

  .container {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 1080px;
    height: 60px;
  }

  .logo {
    background: url("../assets/img/logo.png") no-repeat center center;
    background-size: 50px 50px;
    width: 50px;
    height: 50px;
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  .router-link-exact-active {
    font-weight: 600;
  }

  ul {
    list-style: none;
  }

  .main-nav {
    flex: 1;
  }

  .nav-list {
    display: flex;
    height: 40px;
    align-items: center;
    margin-left: 20px;

    .nav-item {
      padding: 0 18px;
    }
  }

  .right-nav-list {
    display: flex;
    align-items: center;
    height: 40px;

    li {
      margin-left: 20px;
    }

    .link-btn {
      margin-left: 20px;
    }
  }

  .github-btn-wrap {
    display: flex;
    align-items: center;
  }
}

.btn-trigger {
  display: flex;
  align-items: center;
  padding: 5px 8px;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }

  .anticon {
    position: relative;
    top: 1px;
    margin-left: 4px;
    color: $color-light;
    font-size: 12px;
  }
}
</style>
<style lang="scss">
.user-layer {
  width: 120px;
}
</style>