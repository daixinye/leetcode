/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// 一解
var hammingDistance = function(x, y) {
  var z = (x | y) - (x & y) // 改进： 直接使用 异或 ^ 就行了...
  var c = 0
  while (z !== 0) {
    if (z % 2 === 0) {
      z /= 2
    } else {
      c++
      z = --z / 2
    }
  }
  return c
}

// 改进
hammingDistance = function(x, y) {
  var z = x ^ y
  z = z.toString(2).match(/1/g)
  return z ? z.length : 0
}

void (function test(f) {
  const mock = [[1, 4], [1, 5]]

  mock.forEach(function(item, index, array) {
    var start = new Date()
    console.log('#', index + 1)
    console.log('input: ', item)
    console.log('output: ', f.apply(null, item))
    console.log('time: %s', new Date() - start)
    console.log()
  })
})(hammingDistance)
