import axios from 'axios'

export function parsePluginCode(source) {
  const context = {};

  try {
    const pluginModule = { exports: null };
    const fn = new Function('module', source);

    fn(pluginModule);

    if (pluginModule.exports) {
      return pluginModule.exports(context);
    } else {
      throw new Error('module.exports is null');
    }
  } catch (error) {
    console.log(error);
  }
}

export function loadPluginCode(source) {
  return axios.get(source, {
    params: {
      t: Number(new Date())
    }
  }).then(results => {
    const resp = results.data;
    const plugin = parsePluginCode(resp)

    if (plugin) {
      return plugin
    } else {
      return Promise.reject('An error occurred while parsing the plugin')
    }
  });
}