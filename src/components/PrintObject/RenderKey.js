export default {
  props: ['printableKey'],
  render: function(createElement) {
    return createElement('span', {class: 'key'}, `"${this.printableKey}":`)
  }
}
