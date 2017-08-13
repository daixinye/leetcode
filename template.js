/**
 * @leetcode #1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []

    nums.some((num, index, array) => {
        let diff = target - num
        let anotherIndex = array.indexOf(diff, index + 1)
        return anotherIndex > -1 && result.push(index, anotherIndex)
    })

    return result
};

const mock = [
    [[2,7,11,16],9],
    [[2,2,11,16],4],
    [[2,7,11,16],27],
    [[2,7,11,16],18],
]

mock.forEach(function(item, index, array) {
    console.log(twoSum.apply(null,item))
})