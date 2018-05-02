<template>
  <div>
    <render-row :printableValue="printableObject"></render-row>
  </div>
</template>

<style>
  .object {
    padding-left: 1em;
  }

  .key {
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

  .row {
    padding-left: 1px;
    border-left: 1px solid #ddd;
  }

  .key__object:hover {
    cursor: pointer;
  }

  .row__hover {
    background-color: lightgrey;
  }
</style>

<script>
  import RenderRow from './PrintObject/RenderRow.js'

  export default {
    props: {
      printableObject: {
        default: () => {
        }
      }
    },
    components: {
      RenderRow
    }
  }
</script>
