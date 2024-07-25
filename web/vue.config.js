module.exports = {
  // 前缀
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-test-demo/' : '/vue-test-demo',
  // 打包文件夹
  outputDir: 'vue-test-demo',
  // 将静态资源全部打包在该文件名下
  assetsDir: 'static',
  // 保存时检验
  lintOnSave: false,
  // dev
  devServer: {
    port: 9012,
    // 启用静态资源压缩算法
    compress: true,
    // 异常打印策略
    overlay: {
      warnings: false,
      errors: true
    },
    // 打开浏览器
    open: true,
    // 协议
    https: false,
    // 域名
    // host: '',
    // 端口
    // port: 9012,
    // 代理
    // proxy: {
    // }
  }
}
