export default {
  props: ['printableObject', 'isArray', 'collapsed'],
  components: {
    RenderRow: () => import('./RenderRow.js')
  },
  render: function (createElement) {
    let children = Object.keys(this.printableObject).map(key => {
      return createElement('render-row', {
        props: {
          printableKey: key,
          printableValue: this.printableObject[key],
          isArray: this.isArray
        }
      })
    })

    return createElement('div', {class: 'object'}, children)
  }
}
