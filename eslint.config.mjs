import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import eslintPluginJest from 'eslint-plugin-jest'

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    plugins: { jest: eslintPluginJest },
    languageOptions: { globals: { ...globals.jest } },
    rules: {
      ...eslintPluginJest.configs.recommended.rules
    }
  }
]
