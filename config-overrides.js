const CopyPlugin = require('copy-webpack-plugin');

module.exports = function override(config, env) {
    // if (!config.plugins) {
    //     config.plugins = [];
    // }

    // config.plugins.push(
    //     (process.env.NODE_ENV === 'production') ?
    //     new CopyWebpackPlugin([{from: 'src/lib/legacyLib.js'}]) :
    //     new CopyWebpackPlugin([{from: 'src/lib/legacyLib.js', to: 'dist'}])
    // );

    config.plugins.push(
        new CopyPlugin({
          patterns: [
            { from: 'myFiles', to: 'static' },
          ],
          options: {
            concurrency: 100,
          },
        }),
    );

    return config;
}