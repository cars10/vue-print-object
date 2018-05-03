<template>
  <span class="vpo-value">
    <span :class="valueClass" v-html="value"></span><span>,</span>
  </span>
</template>

<script>
  export default {
    props: ['printableValue'],
    computed: {
      valueClass () {
        const valueType = typeof this.printableValue
        switch(valueType) {
          case 'string':
            return 'vpo-value--string'
          case 'object':
            return 'vpo-value--null'
          default:
            return `vpo-value--${valueType}`
        }
      },
      value () {
        switch(typeof this.printableValue) {
          case 'string':
            return `"${this.printableValue}"`
          case 'object':
            return 'null'
          default:
            return this.printableValue
        }
      }
    }
  }

</script>
