const {defineConfig} = require('@vue/cli-service')
const {resolve} = require("path");
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src') // 将 '@' 别名设置为项目的 src 目录
            }
        }
    }
})
