import RenderKeyValue from './RenderKeyValue'

export default {
  props: ['printableObject'],
  components: {
    RenderKeyValue
  },
  render: function (createElement) {
    return createElement('div', {class: 'object'}, Object.keys(this.printableObject).map(key => {
      return createElement('render-key-value', {props: {printableKey: key, printableValue: this.printableObject[key]}})
    }))
  }
}
