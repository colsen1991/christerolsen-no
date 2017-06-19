const { UglifyJsPlugin } = require('webpack').optimize;
const spikeCssStandards = require('spike-css-standards');
const reshapeStandard = require('reshape-standard');
const babelPreset = require('babel-preset-env');
const Contentful = require('spike-contentful');
const noop = require('noop-webpack-plugin');
const marked = require('marked');

const env = process.env.NODE_ENV;
const isDev = env === 'development';
const isProduction = env === 'production';

const locals = { md: marked };

const plugins = [];

module.exports = {
  devtool: isDev ? 'source-map' : false,
  ignore: [
    '**/_*',
    '**/.*',
    'readme.md',
    'yarn.lock'
  ],
  postcss: spikeCssStandards({
    parser: false,
    minify: isProduction
  }),
  babel: {
    presets: [ [ babelPreset, { modules: false } ] ]
  },
  reshape: reshapeStandard({
    minify: isProduction,
    parser: false,
    locals
  }),
  plugins: [
    isProduction ? new UglifyJsPlugin() : noop(),
    new Contentful({
      addDataTo: locals,
      accessToken: 'f5ace1cfb6f39f05a62f2d53e328d223cadb8408f623425a595134ea70d9d851',
      spaceId: 'o3gzgops05d5',
      contentTypes: [
        {
          name: 'blogPosts',
          id: 'blogPosts',
          transform: true,
          template: {
            path: 'views/templates/_post.html',
            output: (blogPost) => {
              return `posts/${blogPost.id}/index.html`
            }
          }
        }
      ]
    })
  ]
};
