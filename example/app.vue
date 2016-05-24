<template>
  <kb-spinner class="spinner" color="red"></kb-spinner>
  <kb-spinner class="spinner" :type="1"></kb-spinner>
  <kb-spinner class="spinner" :type="2"></kb-spinner>
  <kb-spinner class="spinner" :type="3"></kb-spinner>
  <hr>

  <span class="spinner">
    <double-bounce color="blue"></double-bounce>
  </span>

  <span class="spinner">
    <three-bounce color="blue"></three-bounce>
  </span>

  <span class="spinner">
    <fading-circle color="blue"></fading-circle>
  </span>

  <span class="spinner">
    <snake color="blue"></snake>
  </span>
</template>

<script>
  import Spinner from '../src/index.js';

  import DoubleBounce from '../src/spinner/double-bounce.vue';
  import FadingCircle from '../src/spinner/fading-circle.vue';
  import ThreeBounce from '../src/spinner/three-bounce.vue';
  import Snake from '../src/spinner/snake.vue';

  import Vue from 'vue';

  Vue.use(Spinner);

  export default {
    name: 'app',
    components: {
      DoubleBounce,
      FadingCircle,
      ThreeBounce,
      Snake
    }
  };
</script>

<style scoped>
  .spinner {
    display: block;
    min-height: 50px;
    margin-bottom: 10px;
    border: 1px solid;
  }
</style>
