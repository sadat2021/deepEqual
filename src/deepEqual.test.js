const { expect } = require('chai')
const deepEqual = require('./deepEqual')

describe('deepEqual', () => {
  it('should return true for null and null', () => {
    expect(deepEqual(null, null)).to.be.true
  })

  it('should return false for null and an empty object', () => {
    expect(deepEqual(null, {})).to.be.false
  })
  it('should return false for undefined and an empty object', () => {
    expect(deepEqual(undefined, {})).to.be.false
  })

  it('should return true for objects with the same values', () => {
    const obj1 = { name: 'Bob' }
    const obj2 = { name: 'Bob' }
    expect(deepEqual(obj1, obj2)).to.be.true
  })

  it('should return true for an object with an undefined field and an object without the field', () => {
    const obj1 = { name: 'Bob', email: undefined }
    const obj2 = { name: 'Bob' }
    expect(deepEqual(obj1, obj2)).to.be.true
  })

  it('should return false for objects with different values', () => {
    const obj1 = { name: 'Bob', email: 'bob@example.com' }
    const obj2 = { name: 'Bob' }
    expect(deepEqual(obj1, obj2)).to.be.false
  })
  it('should return true for nested objects with the same values', () => {
    const obj1 = {
      name: 'Bob',
      email: { email1: 'test@gmail.com', email2: 'test2@gmail.com' },
    }

    const obj2 = {
      name: 'Bob',
      email: { email1: 'test@gmail.com', email2: 'test2@gmail.com' },
    }
    expect(deepEqual(obj1, obj2)).to.be.true
  })
  it('should return false for nested objects with different values', () => {
    const obj1 = {
      name: 'Bob',
      email: { email1: 'test@gmail.com', email2: 'test3@gmail.com' },
    }

    const obj2 = {
      name: 'Bob',
      email: { email1: 'test@gmail.com', email2: 'test2@gmail.com' },
    }
    expect(deepEqual(obj1, obj2)).to.be.false
  })
})
