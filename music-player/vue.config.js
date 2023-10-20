// vue.config.js
module.exports = {
    chainWebpack: config => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .tap(options => ({
          ...options,
          compilerOptions: {
            // treat any tag that starts with sl- as custom elements (SHOELACE)
            isCustomElement: tag => tag.startsWith('sl-')
          }
        }))
    }
  }