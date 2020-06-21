const i18n = require('../src/assets/index-build.js')
const glob = require('glob')
const fs = require('fs')

const paths = [
  './src/{components,views}/**/*{.js,.vue}',
  './src/*{.js,.vue}'
]

let keys = {}
let total = 0
let totalUnique = 0

let toParseNumber = 0
const reg = /\$t\(['"](.*?)['"][),]/g
paths.forEach(p => {
  glob.sync(p).forEach(file => {
    ++toParseNumber
    fs.readFile(file, { encoding: 'utf8' }, (err, data) => {
      console.log('file:', file)
      if (err) {
        console.error(err)
        return
      }
      for (let match = reg.exec(data); match; match = reg.exec(data)) {
        let text = match[1].replace(/\\'/g, "'").replace(/\\"/g, '"').replace(/\\\\/g, '\\')
        ++total
        if (!(text in keys)) {
          ++totalUnique
          keys[text] = 0
        }
      }
      if (--toParseNumber == 0) {
        onParse()
      }
    })
  })
})

function onParse() {
  console.log(`----------------------------------------
  find: ${total}, unique: ${totalUnique}
  `)
  for (let key in keys) {
    if (!i18n.en[key]) {
      i18n.en[key] = key
      console.warn(`no en key: ${key}`)
    }
  }
  for (let locale in i18n) {
    let data = i18n[locale]

    for (let key in keys) {
      if (!(key in data)) {
        data[key] = ''
      }
      if (data[key]) {
        ++keys[key]
      }
    }

    for (let key in data) {
      if (!(key in keys)) {
        console.info(`delete: ${locale} ${key}`)
        delete data[key]
      }
    }
    fs.writeFile(`./src/locales/${locale}.json`, JSON.stringify(data, Object.keys(data).sort(), 2) + '\n', err => {
      err && console.error(err)
    })
  }

  console.info('\nfind not tranlsate msg...\n')
  for (let key in keys) {
    if (keys[key] === 0) {
      console.warn(`nothing: ${key}`)
    }
  }
}