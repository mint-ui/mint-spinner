var cooking = require('cooking');

var Components = require('./components.json');

var entrys = {};
Object.keys(Components).forEach(function (key) {
  entrys[key] = Components[key];
});

cooking.set({
  entry: entrys,
  dist: './lib',
  template: false,
  format: 'umd',
  moduleName: 'Spinner',
  clean: true,
  extractCSS: '[name]/style.css',
  extends: ['vue', 'lint', 'saladcss']
});

cooking.add('output.filename', '[name]/index.js')

cooking.add('external.vue', {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
});

module.exports = cooking.resolve();
