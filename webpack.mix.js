const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    'public/frontend/assets/css/bootstrap.min.css',
    'public/frontend/assets/css/headroom.css',
    'public/frontend/assets/css/animate.css',
    'public/frontend/assets/css/swiper.min.css',
    'public/frontend/assets/css/fancybox.min.css',
    'public/frontend/assets/css/slicknav.css',
    'public/frontend/assets/css/style.css',
], 'public/css/all.css');

