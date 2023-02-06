const path = require('path')
const {
    override,
    fixBabelImports,
    addWebpackAlias,
} = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    // 别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@resources': path.resolve(__dirname, 'src/resources'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
    }),
)