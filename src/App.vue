<template>
  <div>
    <print-object :printableObject="myObject"></print-object>
  </div>
</template>

<style>
* {
  font-family: monospace;
}
</style>

<script>
  import PrintObject from './components/PrintObject.vue'

  export default {
    data: () => {
      return {
        myObject: {
          a: 1,
          b: "hello",
          c: {
            d: [3, 4]
          },
          e: false
        }
      }
    },
    components: {
      PrintObject
    }
  }
</script>
