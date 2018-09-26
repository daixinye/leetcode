/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  var s = ''
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i]
    var snum = '|' + num + '|'
    if (s.indexOf(snum) >= 0) {
      return num
    } else {
      s += snum
    }
  }
}

findDuplicate = function(nums) {
  var count = function(left, right) {
    var l_end = Math.floor((left + right) / 2),
      l_start = left
    var r_start = l_end + 1,
      r_end = right
    var l_count = 0,
      r_count = 0

    for (var i = 0; i < nums.length; i++) {
      if (nums[i] <= l_end && nums[i] >= l_start) {
        l_count++
      }
      if (nums[i] >= r_start && nums[i] <= r_end) {
        r_count++
      }
    }

    return {
      l_start,
      l_end,
      r_start,
      r_end,
      l_count,
      r_count
    }
  }

  var left = 1,
    right = nums.length - 1
  while (true) {
    var counts = count(left, right)
    if (left + 1 >= right) {
      // 结束
      return counts.l_count > counts.r_count ? left : right
    }

    // 重新设置范围
    if (counts.l_count > counts.r_count) {
      right = counts.l_end
    } else {
      left = counts.r_start
    }
  }
}

void (function test(f) {
  const mock = [
    [[1, 1]],
    [[1, 2, 3, 2]],
    [[1, 1, 2]],
    [[1, 3, 4, 2, 2]],
    [[14, 16, 12, 1, 16, 17, 6, 8, 5, 19, 16, 13, 16, 3, 11, 16, 4, 16, 9, 7]]
  ]

  mock.forEach(function(item, index, array) {
    var start = new Date()
    console.log('#', index + 1)
    console.log('input: ', item)
    console.log('output: ', f.apply(null, item))
    console.log('time: %s', new Date() - start)
  })
})(findDuplicate)
