export default {
  props: {
    object: {
      default: () => {
      }
    }
  },
  render: function (createElement) {
    return createElement('div', [renderObject(createElement, this.object)])
  }
}

function renderObject (createElement, object) {
  let body = Object.keys(object).map(key => {
    const value = object[key]
    switch (typeof value) {
      case 'object':
        if (value === null) {
          return keyValue(createElement, key, 'null')
        } else {
          return keyValue(createElement, key, [renderObject(createElement, value)])
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
    createElement('div', '{'),
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
