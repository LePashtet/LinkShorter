<template>
  <div class="ls-sh" >
    <div class="ls_top">
      <input v-if="result !== ''" style="cursor:pointer"v-tooltip="'Copy link'" :value="`https://linkshortner/${result}`" @click="$emit('copy',`https://linkshortner/${result}`)"/>
      <input v-else placeholder="Shorten your link" v-model='input_val'/>
      <btn v-show="result === ''" text='Shorten' @shorten="createLink"></btn>
    </div>
    <span v-show="result"class="light success">Success! The link has been copied to your clipboard. <span class="bold" @click="clear">One more?</span></span>
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
      input_val: '',
      result: '',
    };
  },
  methods: {
    createLink() {
      this.result = `s/${this.input_val}`;
    },
    clear(){
        this.result = '';
        this.input_val = '';
        console.log('f');
    }
  },
  created() {
      if (this.$route.params.file) {
        this.result = `s/${this.$route.params.file}`;
      }


  }
}
</script>
<style lang="stylus">
  .success
    cursor: default
    color: #fff
  .light
    font-weight: 400
  .bold
    cursor: pointer
    font-weight: 700
  .ls-sh
    display: flex
    flex-direction: column
    margin:11.5% 30%
  .ls_top
    display: flex;
    justify-content: space-around;
    align-items: center
    input
      padding:0 10px
      outline: none
      height: 38px
      width: 60%
      border: none
      border-radius: 5px
      color: #5d2a4a

      &:focus
        outline: 3px solid #FBDA61


  .tooltip {
          display: block !important;
          z-index: 10000;

          .tooltip-inner {
            background: black;
            color: white;
            border-radius: 16px;
            padding: 5px 10px 4px;
          }

          .tooltip-arrow {
            width: 0;
            height: 0;
            border-style: solid;
            position: absolute;
            margin: 5px;
            border-color: black;
            z-index: 1;
          }

          &[x-placement^="top"] {
            margin-bottom: 5px;

            .tooltip-arrow {
              border-width: 5px 5px 0 5px;
              border-left-color: transparent !important;
              border-right-color: transparent !important;
              border-bottom-color: transparent !important;
              bottom: -5px;
              left: calc(50% - 5px);
              margin-top: 0;
              margin-bottom: 0;
            }
          }

          &[x-placement^="bottom"] {
            margin-top: 5px;

            .tooltip-arrow {
              border-width: 0 5px 5px 5px;
              border-left-color: transparent !important;
              border-right-color: transparent !important;
              border-top-color: transparent !important;
              top: -5px;
              left: calc(50% - 5px);
              margin-top: 0;
              margin-bottom: 0;
            }
          }

          &[x-placement^="right"] {
            margin-left: 5px;

            .tooltip-arrow {
              border-width: 5px 5px 5px 0;
              border-left-color: transparent !important;
              border-top-color: transparent !important;
              border-bottom-color: transparent !important;
              left: -5px;
              top: calc(50% - 5px);
              margin-left: 0;
              margin-right: 0;
            }
          }

          &[x-placement^="left"] {
            margin-right: 5px;

            .tooltip-arrow {
              border-width: 5px 0 5px 5px;
              border-top-color: transparent !important;
              border-right-color: transparent !important;
              border-bottom-color: transparent !important;
              right: -5px;
              top: calc(50% - 5px);
              margin-left: 0;
              margin-right: 0;
            }
          }

          &[aria-hidden='true'] {
            visibility: hidden;
            opacity: 0;
            transition: opacity .15s, visibility .15s;
          }

          &[aria-hidden='false'] {
            visibility: visible;
            opacity: 1;
            transition: opacity .15s;
          }
        }
</style>
