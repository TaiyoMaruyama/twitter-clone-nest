module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'warn', // console.logなどの利用を警告
    'no-unused-vars': 'warn', // 未使用の変数を警告
    'no-alert': 'error', // alertをエラーとして扱う
    'prefer-const': 'error', // constを推奨
    'no-var': 'error', // varの利用を禁止
    indent: ['error', 2], // インデントは2スペース
    quotes: ['error', 'single'], // シングルクォートを使用
    semi: ['error', 'always'], // セミコロンを常に付ける
  },
};
