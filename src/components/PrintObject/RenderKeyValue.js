import RenderKey from './RenderKey.vue'
import RenderValue from './RenderValue.vue'
import RenderObject from './RenderObject.vue'
import RenderBracket from './RenderBracket.vue'

export default {
  props: ['printableKey', 'printableValue', 'isArray', 'isLastElement', 'initialCollapsed', 'isRoot'],
  data: () => {
    return {
      objectCollapsed: false,
      keyHover: false
    }
  },
  components: {
    RenderKey,
    RenderValue,
    RenderObject,
    RenderBracket
  },
  computed: {
    isInitialCollapsed () {
      const type = typeof this.initialCollapsed
      if (type === 'boolean') {
        return !!this.initialCollapsed
      } else if ((type === 'object') && Array.isArray(this.initialCollapsed)) {
        return this.initialCollapsed.includes(this.printableKey)
      } else {
        console.warn('initialCollapsed needs to be either boolean or array, your are setting: ' + type)
      }
    }
  },
  methods: {
    collapse () {
      this.objectCollapsed = !this.objectCollapsed
      this.keyHover = false
    },
    mouseenter () {
      this.keyHover = true
    },
    mouseleave () {
      this.keyHover = false
    }
  },
  mounted () {
    this.objectCollapsed = this.isInitialCollapsed
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

      children.push(createElement('render-bracket', {
        props: {isArray: isArray, isOpeningBracket: true},
        nativeOn: {
          click: this.collapse,
          mouseenter: this.mouseenter,
          mouseleave: this.mouseleave
        }
      }))
      if (this.objectCollapsed) {
        children.push(createElement('span', {
          on: {
            click: this.collapse,
            mouseenter: this.mouseenter,
            mouseleave: this.mouseleave
          }
        }, '...'))
      } else {
        if (Object.keys(this.printableValue).length > 0)
          children.push(createElement('render-object', {
            props: {
              printableObject: this.printableValue,
              isArray: isArray,
              initialCollapsed: this.initialCollapsed
            }
          }))
      }
      children.push(createElement('render-bracket', {
        props: {isArray: isArray, isLastElement: this.isLastElement},
        nativeOn: {
          click: this.collapse,
          mouseenter: this.mouseenter,
          mouseleave: this.mouseleave
        }
      }))
    } else {
      children.push(createElement('render-value', {
        props: {
          printableValue: this.printableValue,
          isLastElement: this.isLastElement
        }
      }))
    }

    return createElement('div', {class: [{'vpo-key-value__hover': this.keyHover}, 'vpo-key-value']}, children)
  }
}
