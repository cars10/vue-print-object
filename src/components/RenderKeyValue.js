import RenderKey from './RenderKey'
import RenderValue from './RenderValue'

export default {
  props: ['printableKey', 'printableValue'],
  components: {
    RenderKey,
    RenderValue
  },
  render: function (createElement) {
    let children = []
    if (this.printableKey)
      children.push(createElement('render-key', {props: {printableKey: this.printableKey}}))
    children.push(createElement('render-value', {props: {printableValue: this.printableValue}}))

    return createElement('div', {class: 'kv'}, children)
  }
}
