<template>
  <div class="ls-sh" >
    <input v-tooltip="'Copy to clipboard'" @click="$emit('copy',`https://linkshortner/s/${input_val}`)" placeholder="Shorten your link" :readonly='editable === false' v-model='input_val'/>
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
      input_val: '',
      editable: true
    };
  },

  created() {
      if (this.$route.params.file) {
        this.input_val = this.$route.params.file;
        this.editable = false
      }


  }
}
</script>
<style lang="stylus">
  .ls-sh
    margin:11.5% 5%
    input
      cursor: pointer
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
