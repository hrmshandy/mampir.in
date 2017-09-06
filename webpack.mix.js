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

function operator(mix) {
    mix.js(mix.src('js/main.js'), 'js')
        .sass(mix.src('sass/paper-dashboard.scss'), 'css');
}
/*
 |--------------------------------------------------------------------------
 | Compile Front Site Assets
 |--------------------------------------------------------------------------
 |
 */

function site(mix) {
    const plugins = [
        'axios', 'bodymovin', 'dropzone', 'flickity', 'js-cookie', 'masonry-layout', 'moment', 'lodash', 'promise-polyfill', 'q'
    ];

    mix.js(mix.src('js/app.js'), 'js')
        .js(mix.src('js/locator.js'), 'js')
        .extract(plugins)
        .sass(mix.src('sass/app.scss'), 'css')
        .sass(mix.src('sass/locator.scss'), 'css');

    mix.js(mix.src('js/editor.js'), 'js')
        .sass(mix.src('sass/editor.scss'), 'css');

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

// mix.options({
//     postCss: [
//         require('autoprefixer')({
//             browsers: ['> 1%', 'last 4 versions', 'Safari >= 8', 'not ie <= 11']
//         })
//     ]
// });

if(process.argv.includes('--env.admin')) {
    mix.setPublicPath(path.join('public', 'admin'));
    mix.src = path => 'resources/admin/assets/'+path;
    admin(mix);
}

else if(process.argv.includes('--env.operator')){
    mix.setPublicPath(path.join('public', '_operator'));
    mix.src = path => 'resources/operator/assets/'+path;
    operator(mix);
}

else {
    mix.setPublicPath('public');
    mix.src = path => 'resources/assets/'+path;
    site(mix);
}
