export default {
  props: ['printableValue'],
  render: function (createElement) {
    let valueType = typeof this.printableValue

    if (this.printableValue === null) {
      return createElement('span', {class: 'vpo-value vpo-value--null'}, 'null,')
    } else if (valueType === 'string') {
      return createElement('span', {class: 'vpo-value vpo-value--string'}, `"${this.printableValue}",`)
    } else {
      return createElement('span', {class: `vpo-value vpo-value--${valueType}`}, `${this.printableValue},`)
    }
  }
}
