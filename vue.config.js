const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,

    lintOnSave: false,

    publicPath: './',

    css: {
        loaderOptions: {
            css: {
                sourceMap: false,
                modules: {
                    localIdentName: '[hash:base64:4]'
                }
            }
        }
    },
});
