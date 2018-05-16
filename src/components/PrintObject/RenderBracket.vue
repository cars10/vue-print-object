<template>
  <span class="vpo-bracket">{{bracket}}</span>
</template>

<script>
  export default {
    props: {
      isArray: {
        default: false
      },
      isOpeningBracket: {
        default: false
      },
      noComma: {
        default: false
      }
    },
    computed: {
      bracket () {
        if (this.isOpeningBracket) {
          return this.isArray ? '[' : '{'
        } else {
          if (this.noComma) {
            return this.isArray ? ']' : '}'
          } else {
            return this.isArray ? '],' : '},'
          }
        }
      }
    }
  }
</script>
