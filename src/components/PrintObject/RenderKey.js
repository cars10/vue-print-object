export default {
  props: ['printableKey'],
  render: function(createElement) {
    return createElement('span', {class: 'vpo-key'}, `"${this.printableKey}":`)
  }
}
