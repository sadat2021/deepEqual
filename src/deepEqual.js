const isObject = (obj) => {
  return (
    typeof obj === 'object' &&
    !Array.isArray(obj) &&
    !(obj instanceof Date) &&
    !(obj instanceof Function) &&
    !(obj instanceof RegExp)
  )
}
const deepEqual = (a, b) => {
  if (a === null && b === null) {
    return true
  }

  if (a === null || b === null) {
    return false
  }

  if (typeof a !== typeof b) {
    return false
  }

  if (isObject(a) && isObject(b)) {
    const keys1 = Object.keys(a).filter((key) => a[key] !== undefined)
    const keys2 = Object.keys(b).filter((key) => b[key] !== undefined)

    if (keys1.length !== keys2.length) {
      return false
    }

    for (let key of keys1) {
      if (!b.hasOwnProperty(key)) {
        return false
      }

      if (!deepEqual(a[key], b[key])) {
        return false
      }
    }
    return true
  }

  return a === b
}

module.exports = deepEqual
