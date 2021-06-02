const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postCssImport = require('postcss-import');

module.exports = {
    plugins: [
        postCssImport,
        'postcss-preset-env',
        tailwindcss,
        autoprefixer,
        cssnano({
            preset: 'default'
        })
    ]
}