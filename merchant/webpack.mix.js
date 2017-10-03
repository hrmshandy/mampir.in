let mix = require('laravel-mix');
let path = require('path');
let SvgStore = require('webpack-svgstore-plugin');
let webpack = require('webpack');


mix
    .setPublicPath('public')
    .sass('resources/assets/sass/main.scss', 'public/css')
    .js('resources/assets/js/main.js', 'public/js')
    .sourceMaps()
    .copy('public', '../public/assets/merchant')
    .version();

mix.webpackConfig({
    output: {
        publicPath: '/',
        chunkFilename: 'js/[name].js'
    },
    plugins: [
        // create svgStore instance object
        new SvgStore({
            // svgo options
            svgoOptions: {
                plugins: [
                    { removeTitle: true }
                ]
            },
            prefix: 'icon-'
        }),
        new webpack.ProvidePlugin({ // inject ES5 modules as global vars
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        })
    ]
});

mix.options({
    extractVueStyles: true
});