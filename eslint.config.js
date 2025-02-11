const react = require('eslint-plugin-react');
const typescript = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const prettier = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['./**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parser: parser,
      globals: {
        window: true,
        document: true,
      },
    },
    plugins: {
      react,
      '@typescript-eslint': typescript,
      prettier,
    },
    rules: {
      'prettier/prettier': ['error'],
      semi: ['warn', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
