<template>
  <div class="ls-footer">
    <a href="mailto:s@filecat.net">
      <img @mouseover='hover_img = true' @mouseleave='hover_img = false'  ref='ic' :src="!hover_img ? require('../assets/mail_light.png'): require('../assets/mail_dark.png')" alt="">
    </a>
    <span>&copy; 2019 Crop.Dog Project Inc.</span>
  </div>
</template>
<script>

export default {
  data(){
    return {
        hover_img: false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .ls-footer
    cursor: pointer
    margin-bottom: 5%
    color: #895849
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    img
      width: 50px
    span:hover
      color: #66343f

</style>
