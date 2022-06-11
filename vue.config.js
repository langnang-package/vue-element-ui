const path = require('path')
module.exports = {
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/vue-element-ui/" : "/",
  devServer: {
    hot: true,
    open: true,
  },
  // 修改 src 为 examples
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(__dirname + "packages")
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      })

    config.resolve.alias
      .set('@', path.join(__dirname, 'examples'))
  },
};
