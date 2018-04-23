export default {
  props: ['printableKey'],
  render: function(createElement) {
    return createElement('div', {class: 'key'}, `"${this.printableKey}":`)
  }
}
