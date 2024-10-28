import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import unusedImports from 'eslint-plugin-unused-imports';
import prettier from 'eslint-plugin-prettier';

// Configuración de ESLint
const reactPlugins = {
  'react-hooks': reactHooks,
  'react-refresh': reactRefresh,
};

const typescriptPlugins = {
  '@typescript-eslint': tseslint,
};

// Exportar la configuración
export default [
  // Ignorar directorios
  {
    ignores: ['dist'],
  },
  // Configuración para TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      parser: tsParser,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      ...reactPlugins,
      ...typescriptPlugins,
      'unused-imports': unusedImports,
      prettier: prettier, // Agregar el plugin de Prettier aquí
    },
    rules: {
      'prettier/prettier': 'error', // Usar la regla de Prettier correctamente
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'unused-imports/no-unused-imports': 'error',
      'no-unused-vars': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  // Extensiones de configuración para ESLint y TypeScript
  js.configs.recommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  },
];
