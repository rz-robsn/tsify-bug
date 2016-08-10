const browserify = require('browserify');
const babelify = require('babelify');
const glob = require('glob');
const tsify = require('tsify');
const fs = require('fs');
const files = glob.sync('./app/**/*.ts?(x)');

const w = browserify(files, {
    debug: true,
    cache: {},
    packageCache: {}
  })
  .plugin(tsify, { project : './app' })
  .transform(babelify, {
    presets:[
      'es2015'
    ],
    plugins:[
       "syntax-jsx",
       ["transform-react-jsx", {"pragma": "html"}]
    ],
    sourceMaps: "inline"
  }).bundle().pipe(fs.createWriteStream('out.js'));
