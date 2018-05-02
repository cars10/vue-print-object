import RenderKey from './RenderKey.js'
import RenderValue from './RenderValue.js'
import RenderObject from './RenderObject.js'
import Bracket from './Bracket.vue'

export default {
  props: ['printableKey', 'printableValue', 'isArray', 'isLast'],
  data () {
    return {
      objectCollapsed: false,
      keyHover: false
    }
  },
  components: {
    RenderKey,
    RenderValue,
    RenderObject,
    Bracket
  },
  methods: {
    collapse (e) {
      e.preventDefault()
      this.objectCollapsed = !this.objectCollapsed
    },
    mouseenter () {
      this.keyHover = true
    },
    mouseleave () {
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
          class: 'vpo-key__object'
        }))
      } else {
        children.push(createElement('render-key', {props: {printableKey: this.printableKey}}))
      }
    }

    if (valueIsObject) {
      const isArray = Array.isArray(this.printableValue)

      children.push(createElement('bracket', {props: {isArray: isArray, isOpeningBracket: true}}))
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
      children.push(createElement('bracket', {props: {isArray: isArray}}))
    } else {
      children.push(createElement('render-value', {props: {printableValue: this.printableValue}}))
    }

    return createElement('div', {class: [{'vpo-row__hover': this.keyHover}, 'vpo-row']}, children)
  }
}
