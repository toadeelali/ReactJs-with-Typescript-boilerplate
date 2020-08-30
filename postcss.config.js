// Recommended method by tailwind
// Should be used if using automatic purging options available in tailwind
// Tailwind does not fully optimize css out

// module.exports = {
//   plugins: [
//     require('tailwindcss')('./tailwind-config.js'),
//   ],
// }

// Manual methods

const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
    process.env.NODE_ENV === 'production' && purgecss({
      content: [
        './src/**/*.js',
        './src/**/*.jsx',
        './src/**/*.ts',
        './src/**/*.tsx',
      ],
      css: ['./src/**/*.css'],
    }),
  ],
};
