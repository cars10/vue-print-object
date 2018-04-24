export default {
  props: ['printableValue'],
  components: {
    PrintObject: () => import('./PrintObject')
  },
  render: function (createElement) {
    let valueType = typeof this.printableValue

    if (valueType === 'object') {
      if (this.printableValue === null) {
        return createElement('div', {class: 'value value--null'}, 'null')
      } else {
        return createElement('print-object', {class: 'value', props: {printableObject: this.printableValue}})
      }
    } else if (valueType === 'string') {
      return createElement('div', {class: 'value value--string'}, `"${this.printableValue}"`)
    } else {
      return createElement('div', {class: `value value--${valueType}`}, this.printableValue)
    }
  }
}
