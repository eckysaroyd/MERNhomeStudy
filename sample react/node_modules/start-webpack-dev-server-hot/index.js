module.exports = (config, userDevServerOptions, userServerOptions) => (input) => {
  config = config || {};
  config.entry = config.entry || [];
  config.plugins = config.plugins || [];
  userDevServerOptions = userDevServerOptions || {};

  return function webpackDevServerHot(log, reporter) {
    const Start = require('start').default;
    const webpackDevServer = require('start-webpack-dev-server').default;
    const webpackLib = require('webpack');
    const arrify = require('arrify');
    const mapValues = require('lodash.mapvalues');

    const start = Start(reporter)

    userDevServerOptions.hot = true;

    if (!config.plugins.some((plugin) =>
        plugin.constructor.name === 'HotModuleReplacementPlugin')) {
      config.plugins.push(new webpackLib.HotModuleReplacementPlugin());
    }

    // Todo: Should "inline" really be required or just assumed?
    if (true || userDevServerOptions.inline) {
      const hmr = [
        'webpack-dev-server/client?',
        userDevServerOptions.hotOnly ? 'webpack/hot/only-dev-server' : userDevServerOptions.hot ? 'webpack/hot/dev-server' : null
        // 'webpack/hot/dev-server',
        // 'webpack-hot-middleware/client'
      ].filter(Boolean);
      // Todo: check to make sure if these entries are already present
      const addHmr = (entry) => arrify(entry).concat(hmr);

      if (typeof config.entry === 'string' || Array.isArray(config.entry)) {
        config.entry = addHmr(config.entry);
      } else {
        config.entry = mapValues(config.entry, addHmr);
      }
    }

    return start(webpackDevServer(config, userDevServerOptions, userServerOptions))
  }
}
