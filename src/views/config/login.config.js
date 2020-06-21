
export function getDefaultForm() {
  return {
    username: '',
    password: ""
  }
}

export function getFormRules(vm) {
  return {
    username: [{ required: true, message: vm.$t('enter.username') }],
    password: [{ required: true, message: vm.$t('enter.password') }],
  }
}