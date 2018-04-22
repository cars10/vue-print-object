<template>
  <div>
    <h1>Print object test</h1>
    <print-object :object="simpleObject"></print-object>
    <hr>
    <print-object :object="advancedObject"></print-object>
  </div>
</template>

<style>
  * {
    font-family: sans-serif;
  }

  .indent {
    padding-left: 1em;
  }
</style>

<script>
  import PrintObject from './components/PrintObject.js'

  export default {
    data: () => {
      return {
        simpleObject: {a: 1, b: 2},
        advancedObject: {a: 1, b: {c: 2, d: [3, 4]}, e: 'someString', f: null, g: false}
      }
    },
    components: {
      PrintObject
    }
  }
</script>
