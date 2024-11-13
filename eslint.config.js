import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  // for deaisy ui 
  {
    browser: true,
    node: true,
    es6: true
  },
  // for daisy ui

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
]
