module.exports = {
  root: true,
  endOfLine: 'crlf',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['^react$', '', '<THIRD_PARTY_MODULES>', '', '^@(.*)$', '', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '4.5.0',
  printWidth: 100,
};
