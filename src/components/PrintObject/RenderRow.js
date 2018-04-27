import RenderKey from './RenderKey.js'
import RenderValue from './RenderValue.js'
import RenderObject from './RenderObject.js'

export default {
  props: ['printableKey', 'printableValue', 'isArray'],
  components: {
    RenderKey,
    RenderValue,
    RenderObject
  },
  render: function(createElement) {
    let children = []
    if (this.printableKey && !this.isArray)
      children.push(createElement('render-key', {props: {printableKey: this.printableKey}}))

    if (typeof this.printableValue === 'object' && this.printableValue !== null) {
      const isArray = Array.isArray(this.printableValue)
      const openingBracket = isArray ? '[' : '{'
      const closingBracket = isArray ? ']' : '}'

      children.push(createElement('div', {class: 'bracket'}, openingBracket))
      if (Object.keys(this.printableValue).length > 0)
        children.push(createElement('render-object', {props: {printableObject: this.printableValue, isArray: isArray}}))
      children.push(createElement('div', {class: 'bracket'}, closingBracket))
    } else {
      children.push(createElement('render-value', {props: {printableValue: this.printableValue}}))
    }

    return createElement('div', {class: 'row'}, children)
  }
}
