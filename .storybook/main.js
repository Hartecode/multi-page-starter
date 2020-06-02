const custom = require('../webpack.dev.js');
const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js', '../src/components/**/*.stories.js', '../src/pages/**/*.stories.js'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
  ],
  webpackFinal: (config) => {
    return { ...config, module: { ...config.module, rules: custom.module.rules } };
  },
};
