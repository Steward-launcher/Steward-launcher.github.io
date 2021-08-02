<template>
  <div class="page-privacy">
    <div class="container">
      <div class="items">
        <div class="item">
          <div class="item-q">{{$t("What information does the extension collect?")}}</div>
          <div class="item-a">{{$t("The extension does not collect any user information")}}</div>
        </div>
        <div class="item">
          <div class="item-q">
            {{$t("Where is the extension's data stored?")}}
          </div>
          <div class="item-a">
            <p>{{$t("The extension uses IndexDB to store data, which is a form of offline data storage.")}}</p>
            <p>{{$t("The extension does not upload data to the cloud.")}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Privacy"
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

.item {
  margin-bottom: 30px;
}

.item-q {
  color: #222;
  font-size: 18px;
  font-weight: 700;
}

.item-sq {
  margin-top: 10px;
  color: #222;
  font-size: 16px;
  font-weight: 500;
}
</style>