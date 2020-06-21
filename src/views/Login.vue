<template>
  <div class="page-login">
    <div class="container">
      <div class="form-panel">
        <a-form-model
          :model="form"
          :label-col="{ span: 5 }"
          :wrapper-col="{ span: 10 }"
          @submit="handleSubmit"
          ref="form"
          :rules="rules"
        >
          <a-form-model-item :label="$t('username')" prop="username">
            <a-input v-model="form.username" :placeholder="$t('enter.username')"></a-input>
          </a-form-model-item>
          <a-form-model-item :label="$t('password')" prop="password">
            <a-input-password v-model="form.password" :placeholder="$t('enter.password')"></a-input-password>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="{ span: 10, offset: 5 }">
            <a-button type="primary" html-type="submit" :disabled="submitting">{{$t("login")}}</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import { getDefaultForm, getFormRules } from "./config/login.config";
import { mapActions } from 'vuex';

export default {
  name: "Login",

  data() {
    return {
      submitting: false,
      form: getDefaultForm(),
      rules: getFormRules(this)
    };
  },

  methods: {
    ...mapActions('account', {
      login: 'login'
    }),
    
    submit() {
      const { username, password } = this.form;

      this.submitting = true;
      this.login({ username, password }).then(() => {
        this.submitting = false;
        this.$message.success(this.$t('login.ok'), 1, () => {
          const toURL = this.$route.query.redirect || '/'

          this.$router.push(toURL);
        });
      }).catch((error) => {
        console.log("submit -> error", error)
        this.$message.error(this.$t('login.error'))
      })
    },
  
    handleSubmit(e) {
      e.preventDefault();
      this.$refs.form.validate(valid => {
        if (valid) {
          this.submit();
        }
      });
    }
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
</style>