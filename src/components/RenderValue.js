// import RenderObject from './RenderObject'

export default {
  props: ['printableValue'],
  components: {
    PrintObject: () => import('./PrintObject')
  },
  render: function (createElement) {
    switch (typeof this.printableValue) {
      case 'object':
        if (this.printableValue === null) {
          return createElement('div', {class: 'value value--null'}, 'null')
        } else {
          return createElement('print-object', {class: 'value', props: {printableObject: this.printableValue}})
        }
      case 'array':
        break
      case 'string':
        return createElement('div', {class: 'value value--string'}, `"${this.printableValue}"`)
      case 'number':
        return createElement('div', {class: 'value value--number'}, this.printableValue)
      case 'boolean':
        return createElement('div', {class: 'value value--boolean'}, this.printableValue)
    }
  }
}
