let mix = require('laravel-mix');

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
   .js('resources/assets/js/locator.js', 'public/js')
   .extract([
       'axios', 'flickity', 'js-cookie', 'masonry-layout',
       'moment', 'lodash'
   ])
   .sass('resources/assets/sass/app.scss', 'public/css')
   .sass('resources/assets/sass/locator.scss', 'public/css')
   .version();
//
// mix.options({
//     //processCssUrls: false
//   //purifyCss: true,
// });
//
mix.sourceMaps();
