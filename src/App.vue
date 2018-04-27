<template>
  <div>
    <print-object :printableObject="advancedObject"></print-object>
  </div>
</template>

<style>
  * {
    font-family: monospace;
  }

  .object {
    padding-left: 1em;
  }

  .key, .value, .bracket {
    display: inline-block;
  }

  .key {
    vertical-align: top;
    margin-right: 4px;
  }

  .value--number {
    color: blue
  }

  .value--string {
    color: green
  }

  .value--boolean {
    color: red
  }

  .value--null {
    color: purple
  }

  .kv {
    color: black
  }

  .row {
    padding-left: 1px;
    border-left: 1px dotted #ddd;
  }

  .key:hover {

  }
</style>

<script>
  import PrintObject from './components/PrintObject.js'

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
