const SpikeUtils = require('spike-util')
const Contentful = require('spike-contentful')
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
// const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const locals = {}

module.exports = {
  plugins: [
    new Contentful({
      addDataTo: locals,
      accessToken: '9ac1ed65c0917c0b007dd018dd23b317511115b4a4bf958522619791631e458e',
      spaceId: 'k5nwy7177hkq',
      contentTypes: [
        {
          name: 'menu',
          id: 'menu',
          transform: (post) => {
            // do your transformation here...
            return post
          },
          template: {
            path: 'views/index.sgr',
            output: (post) => {
              // console.log(post)
              return `index.html`
            }
          }
        }
      ]
    })
  ],
  devtool: 'source-map',
  vendor: 'assets/js/**',
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  ignore: ['**/*.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    locals
  }),
  postcss: cssStandards(),
  // babel: jsStandards
}
