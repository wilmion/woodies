const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postCssImport = require('postcss-import');
const purgeCSS = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        postCssImport,
        'postcss-preset-env',
        tailwindcss,
        autoprefixer,
        purgeCSS({
            content: [
                './src/assets/scss/**/*.scss',
                './src/**/*.tsx',
                './src/**/*.ts'
            ]
        }),
        cssnano({
            preset: 'default'
        })
    ]
}