import RenderKey from './RenderKey.js'
import RenderValue from './RenderValue.js'
import RenderObject from './RenderObject.js'

export default {
  props: ['printableKey', 'printableValue', 'isArray'],
  data () {
    return {
      objectCollapsed: false,
      keyHover: false
    }
  },
  components: {
    RenderKey,
    RenderValue,
    RenderObject
  },
  methods: {
    collapse (e) {
      e.preventDefault()
      this.objectCollapsed = !this.objectCollapsed
    },
    mouseenter (e) {
      this.keyHover = true
    },
    mouseleave (e) {
      this.keyHover = false
    }
  },
  render: function (createElement) {
    let valueIsObject = typeof this.printableValue === 'object' && this.printableValue !== null
    let children = []

    // print "normal" key
    if (this.printableKey && !this.isArray) {
      if (valueIsObject && Object.keys(this.printableValue).length > 0) {
        children.push(createElement('render-key', {
          nativeOn: {click: this.collapse, mouseenter: this.mouseenter, mouseleave: this.mouseleave},
          props: {printableKey: this.printableKey},
          class: 'key__object'
        }))
      } else {
        children.push(createElement('render-key', {props: {printableKey: this.printableKey}}))
      }
    }

    if (valueIsObject) {
      const isArray = Array.isArray(this.printableValue)
      const openingBracket = isArray ? '[' : '{'
      const closingBracket = isArray ? ']' : '}'

      children.push(createElement('span', {class: 'bracket'}, openingBracket))
      if (this.objectCollapsed) {
        children.push(createElement('span', '...'))
      } else {
        if (Object.keys(this.printableValue).length > 0)
          children.push(createElement('render-object', {
            props: {
              printableObject: this.printableValue,
              isArray: isArray
            }
          }))
      }
      children.push(createElement('span', {class: 'bracket'}, closingBracket))
    } else {
      children.push(createElement('render-value', {props: {printableValue: this.printableValue}}))
    }

    return createElement('div', {class: [{'object__hover': this.keyHover}, 'row']}, children)
  }
}
