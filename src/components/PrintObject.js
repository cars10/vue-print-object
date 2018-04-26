import RenderObject from './RenderObject'

export default {
  props: {
    printableObject: {
      default: () => {
      }
    }
  },
  components: {
    RenderObject
  },
  render: function (createElement) {
    const isArray = Array.isArray(this.printableObject)
    const openingBracket = isArray ? '[' : '{'
    const closingBracket = isArray ? ']' : '}'
    return createElement('div', [
      createElement('div', {class: 'bracket'}, openingBracket),
      createElement('render-object', {props: {printableObject: this.printableObject}}),
      createElement('div', {class: 'bracket'}, closingBracket),
    ])
  }
}
