  
//基于react-app-rewired和 customize-cra的配置文件，与craco.config二选一即可
//选择本文件需要将package.json中的start等命令改为react-app-rewired start...
// 安装的插件有：antd、babel-plugin-import、less less-loader、customize-cra、react-app-rewired、@babel/plugin-proposal-decorators
const {override, addDecoratorsLegacy,addLessLoader,fixBabelImports,} = require('customize-cra');
const modifyVars = require('./lessVars.js');

module.exports = override(
  addDecoratorsLegacy(),//使支持装饰器写法
  addLessLoader(),
  fixBabelImports('import',{
    libraryName:'antd',
    libraryDirectory:'es',
    style:true,
  }),
//   addWebpackAlias({
//     '@': pathResolve('./src'),
//     'assets': pathResolve('./src/assets'),
//     'components': pathResolve('./src/components'),
//     'views': pathResolve('./src/views'),
//     'reducer': pathResolve('./src/reducer'),
//     'network': pathResolve('./src/network'),
// })
)