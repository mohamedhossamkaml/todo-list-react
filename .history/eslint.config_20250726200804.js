import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin,
    },
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      'plugin:react/recommended',
    ],
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['postcss.config.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
        exports: 'readonly',
      },
    },
  },
  {
    files: ['tailwind.config.js'],
    languageOptions: {
      globals: {
        module: 'readonly',
      },
    },
  },
]);