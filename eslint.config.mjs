import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
      'import/newline-after-import': ['error', { count: 2, exactCount: true }],
      'import/order': [2, {
        'newlines-between': 'never',
        named: true,
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }],
      'react/jsx-wrap-multilines': ['error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line'
      }],
      'max-len': ['error', {
        code: 120,
        tabWidth: 2,   
        ignoreUrls: true,   
        ignoreStrings: true,  
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
      }],
      'react/jsx-one-expression-per-line': ['error', { 
        allow: 'none',
      }],
      'react/jsx-indent': ['error', 2]
    }
  }),
];

export default eslintConfig;
