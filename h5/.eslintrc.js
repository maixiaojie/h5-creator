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
    semi: "off",
    "comma-dangle": "off",
    "vue/require-v-for-key": "off",
    "vue/valid-v-for": "off",
    "vue/no-unused-components": "off"
  },

  extends: ["plugin:vue/vue3-essential", "@vue/standard", "@vue/typescript"]
};
