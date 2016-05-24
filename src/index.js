import Spinner from './spinner';

module.exports = {
  Spinner,
  install(Vue) {
    Vue.component(Spinner.name, Spinner);
  }
};
