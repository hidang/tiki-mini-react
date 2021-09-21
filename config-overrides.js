/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const { alias, aliasJest, configPaths } = require('react-app-rewire-alias');

const aliasMap = configPaths('./tsconfig.paths.json');

module.exports = alias(aliasMap);
module.exports.jest = aliasJest(aliasMap);
