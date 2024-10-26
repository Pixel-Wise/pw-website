import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      'plugin:react/recommended', // Añadir recomendación de React
      'plugin:react-hooks/recommended', // Añadir recomendación de React Hooks
      'plugin:react-refresh/recommended', // Añadir recomendación de React Refresh
      'prettier', // Añadir Prettier
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended',
    ],
    files: ['**/*.{ts,tsx,js,jsx}'], // Asegúrate de incluir archivos JS y JSX
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-props-no-spreading': 'off',
      'prettier/prettier': 'error', // Muestra errores de Prettier
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
        { usePrettierrc: true },
      ],
    },
  },
);
