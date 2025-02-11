import react from 'eslint-plugin-react';
import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';

export default [
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
