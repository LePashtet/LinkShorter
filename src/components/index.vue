<template>
  <div class="ls-wrp">
    <hd></hd>
    <s_input class="ls-body" @copy='copyLink'></s_input>
    <ft></ft>
  </div>
</template>
<script>
import hd from '@/components/header.vue'
import ft from '@/components/footer.vue'
import s_input from '@/components/shorten.vue'

export default {
  components: {
    hd,
    ft,
    s_input
  },
  methods: {
    copyLink(str) {
      console.log('sdf');
      this.$clipboard(str);
    }
  },
}
</script>
<style lang="stylus" scoped>
  .ls-wrp
    justify-content: space-between
    display: flex
    flex-direction: column
    height: 100vh
  .ls-body
    display: flex;
    justify-content: center
</style>
