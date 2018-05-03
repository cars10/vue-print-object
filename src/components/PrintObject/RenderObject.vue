<template>
  <div class="vpo-object">
    <render-row v-for="key in Object.keys(printableObject)"
                :key="key"
                :printableKey="key"
                :printableValue="printableObject[key]"
                :isArray="isArray"></render-row>
  </div>
</template>

<script>
  export default {
    props: ['printableObject', 'isArray'],
    components: {
      RenderRow: () => import('./RenderRow.js')
    }
  }

</script>
