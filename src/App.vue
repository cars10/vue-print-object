<template>
  <div>
    <div class="col">
      <h2>Uncollapsed</h2>
      <print-object :printableObject="myObject"></print-object>
    </div>
    <div class="col">
      <h2>All collapsed</h2>
      <print-object :printableObject="myObject" initialCollapsed></print-object>
    </div>
    <div class="col">
      <h2>Only 'c' and 'e' collapsed</h2>
      <print-object :printableObject="myObject" :initialCollapsed="['c', 'e']"></print-object>
    </div>
  </div>
</template>

<style>
  .col {
    display: inline-block;
    vertical-align: top;
    width: 25%;
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
            d: [3, 4],
            e: {
              f: "test"
            }
          },
          g: false
        }
      }
    },
    components: {
      PrintObject
    }
  }
</script>
