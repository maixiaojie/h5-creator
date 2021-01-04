/*
 * @Author: wenyujie
 * @LastEditors: wenyujie
 * @Date: 2020-12-31 14:35:36
 * @LastEditTime: 2021-01-04 11:27:18
 * @Description: file content
 * @FilePath: /h5/.eslintrc.js
 * @powerd by hundun
 */
module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: "@typescript-eslint/parser"
  },

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    quotes: "off",
    "space-before-function-paren": "off",
    semi: "off",
    "comma-dangle": "off",
    "vue/require-v-for-key": "off",
    "vue/valid-v-for": "off",
    "vue/no-unused-components": "off"
  },

  extends: ["plugin:vue/vue3-essential", "@vue/standard", "@vue/typescript"]
};
