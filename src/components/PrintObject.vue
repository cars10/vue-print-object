<template>
  <div class="vpo-wrapper">
    <render-key-value :printable-value="printableObject"
                      :is-last-element="true"
                      :initial-collapsed="initialCollapsed"></render-key-value>
  </div>
</template>

<style>
  .vpo-wrapper {
    display: inline-block;
    font-family: monospace;
  }

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

  .vpo-key-value {
    padding-left: 1px;
    border-left: 1px solid #ddd;
  }

  .vpo-key__object:hover {
    cursor: pointer;
  }

  .vpo-key-value__hover {
    background-color: lightgrey;
  }
</style>

<script>
  import RenderKeyValue from './PrintObject/RenderKeyValue.js'

  export default {
    props: {
      printableObject: {
        default: () => {
          return {}
        },
        type: [Object, Array]
      },
      initialCollapsed: {
        default: false,
        type: [Boolean, Array]
      }
    },
    components: {
      RenderKeyValue
    }
  }
</script>
