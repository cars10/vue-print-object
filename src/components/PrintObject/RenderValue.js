export default {
  props: ['printableValue'],
  render: function (createElement) {
    let valueType = typeof this.printableValue

    if (valueType === null) {
      return createElement('span', {class: 'value value--null'}, 'null,')
    } else if (valueType === 'string') {
      return createElement('span', {class: 'value value--string'}, `"${this.printableValue}",`)
    } else {
      return createElement('span', {class: `value value--${valueType}`}, `${this.printableValue},`)
    }
  }
}
