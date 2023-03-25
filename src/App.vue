<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="styl">
  *
    padding: 0
    margin: 0
  #app
    font-family: 'Cairo', sans-serif
    background-color: #FBDA61;
    background-image: linear-gradient(130deg, #FBDA61 20%, #FF5ACD 100%);
</style>
