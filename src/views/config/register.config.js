
export function getDefaultForm() {
  return {
    username: '',
    password: "",
    repassword: "",
    email: '',
  }
}

export function getFormRules(vm) {
  return {
    username: [{ required: true, message: vm.$t('enter.username') }],
    email: [{ type: 'email', message: vm.$t('not.email') }],
    password: [{ required: true, message: vm.$t('enter.password') }],
    repassword: [
      { required: true, message: vm.$t('reenter.password') },
      {
        validator: (rule, value, callback) => {
          if (value && value === vm.form.password) {
            callback();
          } else {
            callback(new Error(vm.$t('diff.password')));
          }
        }
      }
    ],
  }
}