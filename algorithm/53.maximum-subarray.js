
/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    let temp = nums[0] || 0, max = nums[0] || 0
    for(let i = 1; i < nums.length; i++){
        temp = temp > 0 ? temp+nums[i] : nums[i]
        temp > max && (max = temp)
    }
    return max
};

void function test(f){
    const mock = [
        [[]],
        [[1]],
        [[-2,1,-3,4,-1,2,1,-5,4]],
    ]

    const render = function(val){
        console.log(val)
        console.log()
    }

    mock.forEach(function(item, index, array) {
        render(f.apply(null,item))
    })
}(maxSubArray)
    