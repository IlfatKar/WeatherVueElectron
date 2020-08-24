module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      chainWebpackRendererProcess(config) {
        config.plugins.delete("workbox");
        config.plugins.delete("pwa");
      },
      builderOptions: {
        appId: 'Weather app',
        // buildResources: 'build'

      }
    }
  }
};
