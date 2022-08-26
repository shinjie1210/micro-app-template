module.exports = {
    publicPath: '/base/son/',
    lintOnSave: false,
    devServer: {
        hot: false,
        disableHostCheck: true,
        port: 4001,
        open: false,
        overlay: {
            warnings: false,
            errors: true,
        },
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compilerOptions = {
                    ...(options.compilerOptions || {}),
                    isCustomElement: (tag) => /^micro-app/.test(tag),
                };
                return options
            })
    },
};