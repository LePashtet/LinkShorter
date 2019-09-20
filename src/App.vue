<template>
  <div id="app" class="ls-wrp">
    <router-view></router-view>
    <ft></ft>
  </div>
</template>

<script>
import ft from '@/components/footer.vue'


export default {
  name: 'app',
  components: {
    ft,
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
    background-image: linear-gradient(130deg, #FBDA61 20%, #FF5ACD 100%);
  .ls-wrp
    justify-content: space-between
    display: flex
    flex-direction: column
    height: 100vh
</style>
