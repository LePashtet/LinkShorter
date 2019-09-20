<template>
  <div class="ls-header">
    <div class="ls-header_logo">
      <img src="@/assets/logo.svg" alt="">
      <h2>CROP.DOG</h2>
    </div>
    <div class="ls-header_counter">
      <span class='big-font'>210'854</span>
      <span class="light">URL's SHORTENED</span>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="stylus" scoped>
  .big-font
    font-size: 25px
  .light
    font-weight: 400
  .ls-header
    cursor: pointer
    color: #b17360
    font-size: 13px
    display: flex
    flex-direction: row
    justify-content: space-between
    font-weight: 600
    padding:5% 10% 0  10%
    align-items: center

    &_logo
      font-size: 17px
      display: flex;
      color: #66343f
      align-items: center;

      img
        margin-right: 15px
        height: 50px
        width: auto
    &_counter
      line-height: 20px
      display: flex
      flex-direction: column
      color: #5d2a4a

      &:hover
        color:#4f1f3d

</style>
