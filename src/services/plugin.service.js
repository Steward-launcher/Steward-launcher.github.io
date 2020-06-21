import AV from 'leancloud-storage'
import { setACL } from '../helpers/av.helper'

const Plugin = AV.Object.extend('Plugin');

export const pluginService = {
  list,
  listOfAuthor,
  updateOne,
  item
}

export function list(category, searchText) {
  const query = new AV.Query('Plugin');

  query.equalTo('status', 2);

  if (category) {
    query.equalTo('category', category)
  }

  if (searchText) {
    query.contains('name', searchText);
  }
  query.include('author')

  return query.find()
}

export function listOfAuthor(uid) {
  const query = new AV.Query('Plugin');

  query.equalTo('author', AV.Object.createWithoutData('User', uid))
  query.include('author')

  return query.find()
}

export function item(id) {
  const query = new AV.Query('Plugin');

  query.include('author')

  return query.get(id)
}

export function isExisted(bundleId) {
  const query = new AV.Query('Plugin');

  query.equalTo('bundleId', bundleId)

  return query.first().then(item => {
    return Boolean(item)
  })
}

function create(attrs) {
  const { bundleId, category = 'other', codeUrl, commands, description, iconUrl,
    name, repository, version } = attrs 

  const plugin = new Plugin();

  plugin.set('bundleId', bundleId)
  plugin.set('category', category)
  plugin.set('codeUrl', codeUrl)
  plugin.set('commands', commands)
  plugin.set('description', description)
  plugin.set('iconUrl', iconUrl)
  plugin.set('name', name)
  plugin.set('repository', repository)
  plugin.set('version', version)
  plugin.set('author', AV.User.current())
  setACL(plugin)

  return plugin.save()
}

export function addOne(attrs) {
  const { bundleId } = attrs

  return isExisted(bundleId).then(existed => {
    if (!existed) {
      return create(attrs)
    } else {
      return Promise.reject('Plugin bundleId has existed')
    }
  })
}

export function updateOne(id, attrs) {
  const plugin = AV.Object.createWithoutData('Plugin', id)
  const { category = 'other', codeUrl, commands, description, iconUrl,
    name, repository, version } = attrs 

  plugin.set('category', category)
  plugin.set('codeUrl', codeUrl)
  plugin.set('commands', commands)
  plugin.set('description', description)
  plugin.set('iconUrl', iconUrl)
  plugin.set('name', name)
  plugin.set('repository', repository)
  plugin.set('version', version)

  return plugin.save()
}