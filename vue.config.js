var path = require('path')
module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "https://m.maizuo.com",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@con": path.resolve(__dirname, "./src/components")
      }
    }
  }
};