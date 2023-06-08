const deepEqual = require('./src/deepEqual')

console.log(deepEqual(null, null)) // true
console.log(deepEqual(undefined, {})) // false
console.log(deepEqual(null, {})) // false
console.log(deepEqual({ name: 'Bob' }, { name: 'Bob' })) // true
console.log(deepEqual({ name: 'Bob', age: 30 }, { name: 'Bob', age: 35 })) // false
console.log(deepEqual({ name: 'Bob', email: undefined }, { name: 'Bob' })) // true
console.log(deepEqual({ name: 'Bob', email: null }, { name: 'Bob' })) // false
console.log(
  deepEqual({ name: 'Bob', email: 'bob@example.com' }, { name: 'Bob' }),
) // false
console.log(
  deepEqual(
    {
      name: 'Bob',
      email: { email1: 'test@gmail.com', email2: 'ttt@gmail.com' },
    },
    {
      name: 'Bob',
      email: { email1: 'test@gmail.com', email2: 'test2@gmail.com' },
    },
  ),
) // false
