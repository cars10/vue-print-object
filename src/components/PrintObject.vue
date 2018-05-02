<template>
  <div>
    <render-row :printableValue="printableObject"></render-row>
  </div>
</template>

<style>
  .vpo-object {
    padding-left: 1em;
  }

  .vpo-key {
    margin-right: 4px;
  }

  .vpo-value--number {
    color: blue
  }

  .vpo-value--string {
    color: green
  }

  .vpo-value--boolean {
    color: red
  }

  .vpo-value--null {
    color: purple
  }

  .vpo-row {
    padding-left: 1px;
    border-left: 1px solid #ddd;
  }

  .vpo-key__object:hover {
    cursor: pointer;
  }

  .vpo-row__hover {
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
