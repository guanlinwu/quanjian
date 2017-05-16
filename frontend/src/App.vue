<template>
  <div id="app">
    <head-box></head-box>
    <div class="g-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Head from 'components/HeadBox/index';

export default {
  name: 'app',
  components: {
    'head-box': Head
  }
}
</script>

<style>
@import 'styles/base.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.g-container {
  width: 100%;
  height: 964px;
  background: #D3DCE6;
}
</style>
