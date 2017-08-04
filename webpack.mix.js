let mix = require('laravel-mix');
let path = require('path');

/*
 |--------------------------------------------------------------------------
 | Compile Admin Assets
 |--------------------------------------------------------------------------
 |
 */

function admin(mix) {
    mix.js(mix.src('js/main.js'), 'js')
        .sass(mix.src('sass/main.scss'), 'css');
}

/*
 |--------------------------------------------------------------------------
 | Compile Front Site Assets
 |--------------------------------------------------------------------------
 |
 */

function site(mix) {
    const plugins = [
        'axios', 'flickity', 'js-cookie', 'masonry-layout', 'moment', 'lodash'
    ];

    mix.js(mix.src('js/app.js'), 'js')
        .js(mix.src('js/locator.js'), 'js')
        .extract(plugins)
        .sass(mix.src('sass/app.scss'), 'css')
        .sass(mix.src('sass/locator.scss'), 'css');

    mix.webpackConfig({
        output: {
            publicPath: '/',
            chunkFilename: 'js/[name].js'
        }
    });
}

/*
 |--------------------------------------------------------------------------
 | Initialize
 |--------------------------------------------------------------------------
 |
 */

mix.sourceMaps();
mix.version();

if(process.argv.includes('--env.admin')) {
    mix.setPublicPath(path.join('public', 'admin'));
    mix.src = path => 'resources/admin/assets/'+path;
    admin(mix);
} else {
    mix.setPublicPath('public');
    mix.src = path => 'resources/assets/'+path;
    site(mix);
}

