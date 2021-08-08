/* eslint-disable */
const path = require("path");

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins : [
    ["module-resolver",{
      alias : {
        "@": path.resolve(__dirname, "./src"),
        "@atoms" : path.resolve(__dirname, "./src/components/atoms"),
        "@molecules" : path.resolve(__dirname, "./src/components/molecules"),
        "@organisms" : path.resolve(__dirname, "./src/components/organisms"),
        "@pages" : path.resolve(__dirname, "./src/components/pages"),
        "@interfaces" : path.resolve(__dirname, "./src/core/interfaces"),
        "@localtypes" : path.resolve(__dirname, "./src/core/localtypes"),
        "@converter" : path.resolve(__dirname, "./src/core/converter"),
        "@services" : path.resolve(__dirname, "./src/core/services"),
        "@composables" : path.resolve(__dirname, "./src/composables"),
      }
    }]
  ]
}
