const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    proxy: {
      // 配置跨域

      "/api": {
        target:"http://ispserv.ga.hainan.gov.cn",
        changOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
    // disableHostCheck: true,
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@views", resolve("src/views"))
      .set("@assets", resolve("src/assets"))
      .set("@components", resolve("src/components"));
  }
};
