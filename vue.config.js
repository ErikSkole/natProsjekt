const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/natProsjekt/",
  publicPath: process.env.NODE_ENV === 'production'
    ? '/natProsjekt/'
    : '/'
})