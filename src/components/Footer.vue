<template>
  <footer class="footer">
    <div class="content">
      <div class="groups">
        <div class="links">
          <a href="https://oksteward.com" class="logo">
            <span></span>
          </a>
        </div>
        <div class="links">
          <a href="http://oksteward.com/steward-document-en/CHANGELOG.html">{{$t("CHANGELOG")}}</a>
          <a href="http://oksteward.com/steward-document-en/" target="_blank">
            {{$t("Help")}}
          </a>
          <a href="http://bbs.oksteward.com/" target="_blank">{{$t("Forum")}}</a>
        </div>
        <div class="links">
          <a href="https://about.me/tomasy" target="_blank">
            {{$t("About")}}
          </a>
          <a href="https://twitter.com/fmlycls" target="_blank">Twitter</a>
          <a v-if="$i18n.locale === 'zh_CN'" href="https://weibo.com/soloooo" target="_blank">{{$t("Weibo")}}</a>
          <a href="https://opensource.org/licenses/MIT" target="_blank">MIT Licenses</a>
        </div>
        <div class="links">
          <a href="https://github.com/solobat/paodin" target="_blank">{{$t("Paodin")}}</a>
          <a href="https://github.com/solobat/steward-helper" target="_blank">Steward Helper</a>
        </div>
      </div>
      <div class="copywrite">
        <span>Steward - {{$t("A command launcher for browser")}}</span>
        <span>
          &nbsp;©&nbsp;2020
          <a href="https://oksteward.com">oksteward.com</a> by
          <a href="https://github.com/solobat" target="_blank">Tomas Yang</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "../styles/scss/theme.scss";

.footer {
  background: #000;
  padding: 24px 0;
}

.logo span {
  display: block;
  margin-top: 15px;
  width: 50px;
  height: 50px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODNhNzEzNi02N2QyLTRiY2YtOTk2Mi03YjAyNTQ2ODkwODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUI2NTMzRkU5QUY2MTFFN0I5RUZEQkFFQzBFM0I2M0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUI2NTMzRkQ5QUY2MTFFN0I5RUZEQkFFQzBFM0I2M0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5ODNhNzEzNi02N2QyLTRiY2YtOTk2Mi03YjAyNTQ2ODkwODkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpiNzE3MmYyNy1lMzYxLTExN2EtOThh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)
    no-repeat center center;
  background-size: 50px 50px;
}

.groups {
  display: flex;
  justify-content: space-around;
}
.groups .links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.groups .links a {
  color: #ccc;
  text-decoration: none;
  line-height: 30px;
  width: 130px;
}
.groups .links a:hover {
  color: #eee;
}

.copywrite {
  color: #888;
  margin-top: 12px;
  text-align: center;
}
.copywrite a {
  color: #888;
  text-decoration: none;
}
.copywrite a:hover {
  color: #666;
  text-decoration: underline;
}
</style>