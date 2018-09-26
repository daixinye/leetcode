
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    var it = 0, result = [], len = nums.length
    while(it < len){
        if(nums[it] == it + 1 || nums[it] == null){
            it ++
        }else{
            if(nums[nums[it] - 1] == nums[it]){
                result.push(nums[it])
                nums[it] = null
                it ++
            }else{
                let temp = nums[nums[it] - 1]
                nums[nums[it] - 1] = nums[it]
                nums[it] = temp
            }
        }
    }
    return result
};

void function test(f){
    const mock = [
        [[3,3,2,7,8,2,4,1]],
        [[]],
        [[1,2,3,4,5]],
        [[1,1]],
        [[5,4,3,3,1]],
        [[1,3,3,4,5]],
    ]

    mock.forEach(function(item, index, array) {
        var start = new Date()
        console.log('#',index+1)
        console.log('input: ', item)
        console.log('output: ', f.apply(null,item))
        console.log('time: %s',new Date() - start)
        console.log()
    })
}(findDuplicates)
    