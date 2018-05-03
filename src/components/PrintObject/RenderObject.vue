<template>
  <div class="vpo-object">
    <render-key-value v-for="key in Object.keys(printableObject)"
                      :key="key"
                      :printableKey="key"
                      :printableValue="printableObject[key]"
                      :isArray="isArray"></render-key-value>
  </div>
</template>

<script>
  export default {
    props: ['printableObject', 'isArray'],
    components: {
      RenderKeyValue: () => import('./RenderKeyValue.js')
    }
  }

</script>
