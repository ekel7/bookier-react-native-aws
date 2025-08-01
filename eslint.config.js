const globals = require('globals');
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const googleConfig = require('eslint-config-google');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['node_modules/', '.expo/', 'babel.config.js', 'metro.config.js'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        __dirname: false,
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: reactPlugin,
    },
    rules: {
      ...googleConfig.rules,
      ...reactPlugin.configs.recommended.rules,
      'require-jsdoc': 'off',
      'valid-jsdoc': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-unused-vars': 'warn',
      camelcase: 'warn',
      'new-cap': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  prettierConfig,
];
