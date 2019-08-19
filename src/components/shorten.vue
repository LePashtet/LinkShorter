<template>
  <div class="ls-sh">
    <input placeholder="Shorten your link" v-model='input_val'/>
    <btn text='Shorten'></btn>
  </div>
</template>
<script>
import btn from '@/components/shorten_btn.vue'


export default {
  components: {
    btn
  },
  data(){
    return {
      input_val: ''
    };
  }
}
</script>
<style lang="stylus" scoped>
  .ls-sh
    margin:11.5% 5%
    input
      padding:0 10px
      outline: none
      margin-right: 15px
      height: 38px
      width: 75%
      border: none
      border-radius: 5px
      color: #5d2a4a

      &:focus
        outline: 3px solid #FBDA61

</style>
