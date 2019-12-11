//配置rem适配
module.exports = {
    plugins: {
      'autoprefixer': {
        overrideBrowserslist: [
          'Android 4.1',
          'iOS 7.1',
          'Chrome > 31',
          'ff > 31',
          'ie >= 8'
        ]
      },
      'postcss-pxtorem': {
        rootValue: 20,
        propList: ['*'],
        selectorBlackList:['.ig-']
      }
    }
  }