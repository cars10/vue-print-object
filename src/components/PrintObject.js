import RenderRow from './PrintObject/RenderRow.js'

export default {
  props: {
    printableObject: {
      default: () => {
      }
    }
  },
  components: {
    RenderRow
  },
  render: function (createElement) {
    return createElement('div', [
      createElement('render-row', {props: {printableValue: this.printableObject}})
    ])
  }
}
