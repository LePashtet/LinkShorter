<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from '@/components/index.vue'


export default {
  name: 'app',
  components: {
    index
  },
};
</script>

<style lang="stylus">
  *
    padding: 0
    margin: 0
  #app
    font-family: 'Cairo', sans-serif
    background-color: #FBDA61;
    background-image: linear-gradient(332deg, #FBDA61 0%, #FF5ACD 100%);
</style>
