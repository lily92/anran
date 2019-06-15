const glob = require('glob');
const { execSync } = require("child_process");
const cwd = process.cwd();

exports.name = require('./package.json').name;

exports.cli = api => {
    api.cli
        .command('mpa', 'plugin mpa command')
        .option('-f', 'format dist dir')
        .action(async (patterns, options) => {
            const config = api.createWebpackChain().toConfig();
            if (patterns.f) {
                const scanPath = config.output.path;

                for (const val of ['html', 'js', 'css']){
                    try {
                        console.time(`格式化 ${val}`);
                        execSync(`npx prettier --write "${scanPath}/**/*.${val}"`, { cwd });
                    }catch (e) {
                        console.log('格式化失败');
                    }
                    console.timeEnd(`格式化 ${val}`);
                }
            }
        });
};

exports.apply = (api, options = {}) => {
    api.config.devServer.compress = true;

    api.hook('createWebpackChain', config => {
        const {pagesPath, extDir} = options;
        if (pagesPath) {
            hasPageHandle(config, pagesPath, extDir);
        }
    });
};

const hasPageHandle = (config, pagesPath, extDir) => {
    const addHtml = (filePath, rootPath) => {
        let filename = filePath
            .replace(rootPath, '')
            .replace(/\.(.*)+/, '')
            .replace('/', '');

        const pluginName = `html_${filename}`;

        if(extDir){
            filename = filename.includes('index') ? `${filename}.html` : `${filename}/index.html`;
        }else{
            filename = `${filename}.html`;
        }

        config
            .plugin(pluginName)
            .use(require.resolve('html-webpack-plugin'), [{
                filename,
                template: filePath,
            }]);
    };

    config.module
        .rule('ejs')
        .test(/\.ejs$/)
        .use('ejs-loader')
        .loader('ejs-loader');

    config.module
        .rule('html')
        .test(/\.html$/)
        .use('html-loader')
        .loader('html-loader');

    const pages = glob.sync(`${pagesPath}/**/*.*`).map(name => {
        name = name.replace(pagesPath, '');
        name = name.replace('/', '');
        return name;
    });

    for (let file of pages) {
        addHtml(`${pagesPath}/${file}`, pagesPath);
    }

    // console.log(config.toConfig());process.exit();
    // console.log(config.plugin('html').toConfig());process.exit();

    config.plugins.delete('html');
};
