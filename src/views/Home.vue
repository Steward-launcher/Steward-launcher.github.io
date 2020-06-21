<template>
  <div class="page-home">
    <div class="banner-wrap">
      <img class="banner-bkg" src="https://i.v2ex.co/8lvrq6D9.jpeg" alt />
      <div class="banner-content">
        <div class="banner-info content">
          <div class="left-box">Steward</div>
          <div class="right-box">
            <p class="subtit">{{$t("A command launcher for browser")}}</p>
            <div class="steward-app-links">
              <a
                class="chrome-webstore"
                href="https://chrome.google.com/webstore/detail/jglmompgeddkbcdamdknmebaimldkkbl"
              >{{$t("Chrome Web Store")}}</a>
              &nbsp;or，
              <a
                class="crx-download"
                href="http://img.oksteward.com/steward-3.5.7.crx"
              >{{$t("Download")}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="main">
        <div class="model-2">
          <p class="model-title-2">
            {{$t("Three modes")}}
          </p>
          <p class="model-subtitle-2">
            ——
            {{$t("Meet different individual needs")}}
          </p>
        </div>
        <div class="section">
          <div class="mode-box content">
            <div class="model-info-2">
              <p class="item-title">
                <span class="rank">1.</span>
                {{$t("Popup Mode")}}
              </p>
              <p class="item-info">
                {{$t("Shortcuts (⌘-k / ⌃-k) or click icons to invoke")}}
              </p>
              <p class="item-info">
                {{$t("The most basic model")}}
              </p>
              <p class="item-info">
                {{$t("Best availability")}}
              </p>
            </div>
            <div class="model-img-wrap">
              <img
                class="model-img"
                src="https://i.v2ex.co/jlCur498.jpeg"
                alt
              />
            </div>
          </div>
        </div>
        <div class="section">
          <div class="mode-box content">
            <div class="model-img-wrap">
              <img
                class="model-img"
                src="https://i.v2ex.co/PE51scwt.jpeg"
                alt
              />
            </div>
            <div class="model-info-2">
              <p class="item-title">
                <span class="rank">2.</span>
                {{$t("Page Mode")}}
              </p>
              <p class="item-info">
                {{$t("Use the shortcut key (⌘-j / ⌃-j) to invoke on any page")}}
              </p>
              <p class="item-info">
                {{$t("Sitemaps give you quick access to websites such as Github")}}
              </p>
              <p class="item-info">
                {{$t("And the possibilities of the future")}}
              </p>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="mode-box content">
            <div class="model-info-2">
              <p class="item-title">
                <span class="rank">3.</span>
                {{$t("New Tab Mode")}}
              </p>
              <p class="item-info">
                {{$t("Use on new tab, available for Steward Plus")}}
              </p>
              <p class="item-info">
                {{$t("Wallpapers from bing / unsplash / Nasa, etc.")}}
              </p>
              <p class="item-info">
                {{$t("Rich customizations make Steward your intimate butler")}}
              </p>
            </div>
            <div class="model-img-wrap">
              <img
                class="model-img"
                src="https://i.v2ex.co/plb6UJfP.jpeg"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.page-home {
  .container {
    margin: 0 auto;
    width: 960px;
  }
}

h1 {
  text-align: center;
  font-weight: 500;
  font-size: 30px;
}

.subtit {
  line-height: 2.5;
}

.banner-wrap {
  position: relative;
}

.banner-bkg {
  width: 100%;
}

.banner-content {
  display: flex;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}

.banner-info {
  display: flex;
  height: 200px;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  .left-box {
    flex: 1;
    padding-right: 40px;
    border-right: 1px solid #ccc;
    line-height: 200px;
    font-size: 80px;
    color: #fff;
  }

  .right-box {
    flex: 2;
    font-size: 40px;
    color: #ccc;
    font-weight: 100;
    padding: 0 40px;
  }
}

.steward-app-links {
  font-size: 16px;
  a {
    color: #fff;
  }
}

.chrome-webstore {
  font-size: 34px;
  text-decoration: none;
  border-bottom: 1px solid #fff;
}

.crx-download {
  font-size: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.model-2 {
  margin-bottom: 20px;
}

.section {
  padding: 40px 0;
  border-bottom: solid 1px #eee;
}

.mode-box {
  display: flex;
}

.model-info {
  flex: 1;
  padding: 30px 50px;
  background-color: #000;
  color: #fff;
  border-top: 5px solid #fff;
  border-right: 5px solid #fff;
  border-bottom: 5px solid #fff;
  font-size: 40px;
}

.model-subtitle {
  font-size: 25px;
}

.model-ul {
  font-size: 20px;
}
.model-ul li {
  padding: 20px;
}

.item1 {
  flex: 2;
}

.item2 {
  flex: 4;
}

.item3 {
  flex: 2;
}

.item-img {
  width: 100%;
}

.model-title-2 {
  text-align: center;
  font-size: 40px;
  margin: 40px 0 30px;
}

.model-subtitle-2 {
  margin: 0;
  text-align: center;
  text-indent: 300px;
  font-size: 30px;
  color: #999;
}

.model-info-2 {
  flex: 2;
  font-size: 30px;
  padding: 20px;
}

.model-img-wrap {
  flex: 3;
  background: #fff;
  box-shadow: 2px 3px 6px #ddd;
}

.model-img-wrap.cartoon-img-wrap {
  box-shadow: none;
}

.model-img {
  width: 100%;
}

.rank {
  font-size: 50px;
  color: #ddd;
  font-weight: bold;
}

.item-title {
  font-size: 30px;
}

.item-info {
  color: #666;
  font-size: 16px;
}

.features {
  padding-top: 16px;
}
.features ul {
  margin: 0;
}

.scene-wrap {
  display: flex;
  padding: 0;
}

.scene-item {
  flex: 1;
  list-style-type: none;
  position: relative;
}
.scene-item:hover .scenet-info-wrap {
  opacity: 0;
}
.scene-item img {
  display: block;
  width: 100%;
}

.scenet-info-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 1;
  color: #fff;
  font-size: 30px;
  text-align: center;
}
</style>
