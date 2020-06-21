<template>
  <div id="app">
    <TopBar />
    <router-view id="main"/>
    <Footer />
  </div>
</template>
<script>
import TopBar from './components/TopBar'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    TopBar,
    Footer
  }
}
</script>

<style lang="scss">
@import url('./styles/css/normalize.css');
@import './styles/scss/theme.scss';

html {
  box-sizing: border-box;

  * {
    box-sizing: inherit;
  }

  p, ul, li {
    margin: 0;
    padding: 0;
  }
}

body {
  font-family: -apple-system, "PingFang SC", Verdana, "Helvetica Neue", "Microsoft Yahei", "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans-serif;
}

#app {
  display: flex;
  flex-direction: column;
  background: $background-color;
  min-height: 100vh;
}

#main {
  flex: 1;
}
</style>
