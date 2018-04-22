import PrintObject from './components/PrintObject.js';

module.exports = {
  install: function (Vue, options) {
    Vue.component('print-object', PrintObject);
  }
};
