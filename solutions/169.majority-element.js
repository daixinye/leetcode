
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var length = nums.length,
        map = {},
        half = length / 2
    
    for (var i = 0; i < length; i++) {
        var count = map[nums[i]] = map[nums[i]] ? ++map[nums[i]] : 1
        if (count >= half) {
            return nums[i]
        }
    }
};

void function test(f) {
    const mock = [
        [[1, 2, 2, 2, 3]],
    ]

    mock.forEach(function (item, index, array) {
        var start = new Date()
        console.log('#', index + 1)
        console.log('input: ', item)
        console.log('output: ', f.apply(null, item))
        console.log('time: %s', new Date() - start)
        console.log()
    })
}(majorityElement)
