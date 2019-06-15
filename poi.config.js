//https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin

module.exports = {
    entry: './src/main.js',
    devServer: {
        // https: true,
        //proxy: {
          //  '/dsapi': 'http://h5.910app.com/'
        //}
       
            proxy: 'http://h5.910app.com/'
          
    },
    // output: {
    //     publicUrl: 'http://anran.hk.tanghan.cn',    
    // },
    plugins:[
        {
            resolve: '@stevie/mpa',
            options:{
                pagesPath: 'ejs/pages',
                // pagesPath: 'pug/pages',
                extDir: true
            }
        }
    ]
};
