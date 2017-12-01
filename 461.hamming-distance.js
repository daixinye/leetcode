/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  var z = (x | y) - (x & y)
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
