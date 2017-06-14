let mix = require('laravel-mix').mix;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .extract(['vue', 'jquery', 'lodash', 'axios'])
   .sass('resources/assets/sass/app.scss', 'public/css')
   .version();

mix.options({
    processCssUrls: false
  //purifyCss: true,
});

mix.sourceMaps();
