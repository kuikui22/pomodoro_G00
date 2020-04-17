const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: (config)=>{
    //修改文件引入自定义路径
    config.resolve.alias
        .set('@', resolve('src'))
        .set('_assets', resolve('src/assets'))
        .set('_components', resolve('src/components'))
        .set('_pages', resolve('src/pages'))
  },  
  devServer: {
    host: '0.0.0.0',
    port: '30010',
  },
  css: {
    loaderOptions: {
      // sass: {
      //   // @/ 是 src/ 的别名
      //   // 所以这里假设你有 `src/variables.sass` 这个文件
      //   // 注意：在 sass-loader v7 中，这个选项名是 "data"
      //   prependData: `@import "@/assets/stylesheets/_variables.scss"`
      // },
      // scss: {
      //   // prependData: `@import "~@/stylesheets/_variables.scss";`
      //   // data: './src/assets/stylesheets/_variables.scss'
      //   prependData: `@import "@/assets/stylesheets/_variables.scss";`
      // },
    }
  }
}