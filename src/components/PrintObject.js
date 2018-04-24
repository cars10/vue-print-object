import RenderObject from './RenderObject'

export default {
  props: {
    printableObject: {
      default: () => {
      }
    }
  },
  components: {
    RenderObject
  },
  render: function (createElement) {
    const isArray = Array.isArray(this.printableObject)
    const openingBracket = isArray ? '[' : '{'
    const closingBracket = isArray ? ']' : '}'
    return createElement('div', [
      createElement('div', {class: 'bracket'}, openingBracket),
      createElement('render-object', {props: {printableObject: this.printableObject}}),
      createElement('div', {class: 'bracket'}, closingBracket),
    ])
  }
}

function printObject (createElement, object) {
  let body = Object.keys(object).map(key => {
    const value = object[key]
    switch (typeof value) {
      case 'object':
        if (value === null) {
          return keyValue(createElement, key, 'null')
        } else {
          return keyValue(createElement, key, [printObject(createElement, value)])
        }
      case 'array':
        break
      case 'string':
        return keyValue(createElement, key, value)
      case 'number':
        return keyValue(createElement, key, value)
      case 'boolean':
        return keyValue(createElement, key, value)
    }
  })

  return objectWrapper(createElement, body)
}

function objectWrapper (createElement, children) {
  return createElement('div', [
    createElement('div', {class: 'inline-block'}, '{'),
    createElement('div', {class: 'indent'}, children),
    createElement('div', '}')
  ])
}

function keyValue (createElement, key, value) {
  return createElement('div', [
    createElement('span', `${key}:`),
    createElement('span', value)
  ])
}
