<template>
  <div class="vpo-object">
    <render-key-value v-for="key in Object.keys(printableObject)"
                      :key="key"
                      :printable-key="key"
                      :printable-value="printableObject[key]"
                      :is-array="isArray"
                      :is-last-element="Object.keys(printableObject).pop() === key"
                      :initial-collapsed="initialCollapsed"></render-key-value>
  </div>
</template>

<script>
  export default {
    props: ['printableObject', 'isArray', 'initialCollapsed'],
    components: {
      RenderKeyValue: () => import('./RenderKeyValue.js')
    }
  }

</script>
