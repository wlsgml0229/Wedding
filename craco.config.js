const CracoAlias = require('craco-alias')

module.exports = {
    plugin: CracoAlias,
    options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json'
    }
}