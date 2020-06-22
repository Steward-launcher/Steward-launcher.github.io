
export function getDefaultForm() {
  return {
    bundleId: '',
    category: 'other',
    codeUrl: '',
    commands: [],
    name: '',
    description: "",
    iconUrl: '',
    repository: 'https://github.com/Steward-launcher/steward-plugins',
    version: '1.0.0',
    readme: ''
  }
}

export function getFormRules(vm) {
  return {
    bundleId: [
      { required: true, message: vm.$t('Please enter the bundleId')},
      {
        validator(rule, value, callback) {
          const reg = /([a-zA-Z0-9]+\.)+([a-zA-Z0-9])+/

          if (reg.test(value)) {
            callback();
          } else {
            callback(new Error(vm.$t('Invalid bundleId')));
          }
        }
      }
    ],
    category: [{ required: true, message: vm.$t('Please select the category') }],
    codeUrl: [{ required: true, message: vm.$t('Please enter the codeUrl') }],
    commands: [{ required: true, type: 'array', min: 1, message: vm.$t('Commands not found in the source code') }],
    name: [{ required: true, message: vm.$t('Please enter the name') }],
    description: [{ required: true, message: vm.$t('Please enter the description')}],
    iconUrl: [
      { required: true, message: vm.$t('Please enter the iconUrl')},
      {
        validator: (rule, value, callback) => {
          if (value.startsWith('http')) {
            callback();
          } else {
            callback(new Error(vm.$t('Invalid iconUrl')));
          }
        }
      }
    ],
    version: [
      { required: true, message: vm.$t('Please enter the version')},
      {
        validator: (rule, value, callback) => {
          const reg = /^([0-9]+)\.([0-9]+)\.([0-9]+)$/

          if (reg.test(value)) {
            callback();
          } else {
            callback(new Error(vm.$t('Invalid version')));
          }
        }
      }
    ],
  }
}

export const commandColumns = [
  {
    title: 'Key',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Subtitle',
    dataIndex: 'subtitle',
    key: 'subtitle',
  }
]