<template>
  <div class="ls-wrp">
    <hd></hd>
    <sInput class="ls-body" @copy='copyLink'></sInput>
    <ft></ft>
  </div>
</template>
<script>
import hd from '@/components/header.vue';
import ft from '@/components/footer.vue';
import sInput from '@/components/shorten.vue';

export default {
  components: {
    hd,
    ft,
    sInput,
  },
  methods: {
    copyLink(str) {
      this.$clipboard(str);
    },
  },
};
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
