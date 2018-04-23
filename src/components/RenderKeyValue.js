import RenderKey from './RenderKey'
import RenderValue from './RenderValue'

export default {
  props: ['printableKey', 'printableValue'],
  components: {
    RenderKey,
    RenderValue
  },
  render: function (createElement) {
    return createElement('div', {class: 'kv'}, [
      createElement('render-key', {props: {printableKey: this.printableKey}}),
      createElement('render-value', {props: {printableValue: this.printableValue}})
    ])
  }
}
