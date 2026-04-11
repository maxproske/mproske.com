import js from '@eslint/js'
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-plugin-prettier/recommended'

export default [
  js.configs.recommended,
  ...nextCoreWebVitals,
  prettier,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          bracketSpacing: true,
          arrowParens: 'always',
          printWidth: 120,
          semi: false,
          trailingComma: 'es5',
          tabWidth: 2,
          useTabs: false,
        },
      ],
    },
  },
]
