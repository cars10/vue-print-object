import RenderKeyValue from './RenderKeyValue'

export default {
  props: ['printableObject'],
  components: {
    RenderKeyValue
  },
  render: function (createElement) {
    let children = []

    if (Array.isArray(this.printableObject)) {
      children = this.printableObject.map(value => {
        return createElement('render-key-value', {
          props: {printableValue: value}
        })
      })
    } else {
      children = Object.keys(this.printableObject).map(key => {
        return createElement('render-key-value', {
          props: {
            printableKey: key,
            printableValue: this.printableObject[key]
          }
        })
      })
    }

    return createElement('div', {class: 'object'}, children)
  }
}
