<template>
  <div>
    <h1>Print object test</h1>
    <print-object></print-object>
  </div>
</template>

<style>
  * {
    font-family: sans-serif;
  }
</style>

<script>
  import PrintObject from './components/PrintObject.vue'

  export default {
    data: () => {
      return {}
    },
    components: {
      PrintObject
    }
  }
</script>
