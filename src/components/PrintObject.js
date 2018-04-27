export default {
  props: {
    printableObject: {
      default: () => {
      }
    }
  },
  render: function (createElement) {
    return createElement('div', [buildRow(createElement, undefined, this.printableObject)])
  }
}

function buildObject (createElement, printableObject, isArray) {
  let children = Object.keys(printableObject).map(key => {
    return buildRow(createElement, key, printableObject[key], isArray)
  })

  return createElement('div', {class: 'object'}, children)
}

function buildRow (createElement, key, value, isArray) {
  let children = []
  if (key !== undefined && !isArray)
    children.push(buildKey(createElement, key))

  if (typeof value === 'object' && value !== null) {
    const isArray = Array.isArray(value)
    const openingBracket = isArray ? '[' : '{'
    const closingBracket = isArray ? ']' : '}'

    children.push(createElement('div', {class: 'bracket'}, openingBracket))
    if (Object.keys(value).length > 0)
      children.push(buildObject(createElement, value, isArray))
    children.push(createElement('div', {class: 'bracket'}, closingBracket))
  } else {
    children.push(buildValue(createElement, value))
  }

  return createElement('div', {class: 'row'}, children)
}

function buildKey (createElement, key) {
  return createElement('span', {class: 'key'}, `"${key}":`)
}

function buildValue (createElement, value) {
  return createElement('span', {class: 'value'}, `${value},`)
}
