<template>
  <div>
    <hd></hd>
    <s_input class="ls-body" @copy='copyLink'></s_input>
  </div>
</template>
<script>
import hd from '@/components/header.vue'
import s_input from '@/components/shorten.vue'

export default {
  components: {
    hd,
    s_input
  },
  methods: {
    copyLink(str) {
      this.$clipboard(str);
    }
  },
}
</script>
<style lang="stylus" scoped>
  .ls-body
    display: flex;
    justify-content: center
</style>
