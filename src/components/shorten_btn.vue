<template>
  <button class="ls-shBtn" @click="emit('shorten')" type="button">{{ text }}</button>
</template>
<script>
export default {
  props: ['text']
}
</script>
<style lang="stylus" scoped>
  .ls-shBtn
    cursor: pointer;
    border: none
    border-radius: 5px
    font-weight: 700
    padding: 10px 30px
    color: white
    background-color: #5d2a4a

    &:hover
        background-color: #4f1f3d
</style>
