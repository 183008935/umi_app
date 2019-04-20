import pageRoutes from './router.config';
const path = require('path')

export default {
  plugins: [
    ['umi-plugin-react',{
      dva:true,
      antd:true,
      routes: pageRoutes
    }]
  ],
  alias:{
    components:path.resolve(__dirname,'../src/components'),
    utils:path.resolve(__dirname,'../src/utils'),
    services:path.resolve(__dirname,'../src/services'),
    models:path.resolve(__dirname,'../src/models'),
  }
};