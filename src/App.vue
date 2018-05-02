<template>
  <div>
    <print-object :printableObject="advancedObject"></print-object>
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
        simpleObject: {a: 1, b: 2},
        advancedObject: {
          a: 1,
          b: {c: 2, d: [3, 4, {x: true, y: 42, z: [8, 9]}]},
          e: 'someString',
          f: null,
          g: false,
          h: {},
          i: []
        }
      }
    },
    components: {
      PrintObject
    }
  }
</script>
