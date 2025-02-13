import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  { files: ['server/**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    files: ['client/**/*.js', 'client/**/*.jsx'],
    languageOptions: { sourceType: 'module' },
    settings: { react: { version: '^17.0.2' } },
  },
  {
    files: ['**/*.test.js', '**/*.spec.js', 'test/**/*.js'],
    plugins: [pluginJest],
    languageOptions: {
      globals: { ...globals.node, jest: true },
    },
    rules: {
      'jest/no-disabled-tests': 'warn', // Habilitar regras específicas do Jest
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
