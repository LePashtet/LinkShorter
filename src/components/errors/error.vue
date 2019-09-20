<template>
  <div class="erorr">
    <p>{{$route.meta.error}}</p>
    <p class='text' v-html="$route.meta.text.join('<br>')"></p>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
  .erorr
    text-align: center;
    font-size: 200px
    font-weight: 800
    color: #66343f
    margin: auto;
    line-height: 170px

    .text
      line-height: 25px;
      width: max-content
      color: #895849
      font-weight: 300
      font-size: 20px
      margin: auto;

</style>
