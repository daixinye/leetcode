
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var l = 0, r = nums.length-1, mid, result
    while(1){
        mid = Math.floor((l+r)/2)
        if(nums[mid] == target)
            return mid
        if(nums[mid] > target){
            if(l == mid) return mid
            r = mid - 1
        }else {
            if(mid == r) return mid + 1
            l = mid + 1
        }
    } 
};

void function test(f){
    const mock = [
        [[1,3,5,6],3],
        [[1,3,5,6,7],3],
        [[1],2],
        [[1],0],
        [[1],1],
        [[1,3],0],
    ]

    const render = function(val){
        console.log(val)
        console.log()
    }

    mock.forEach(function(item, index, array) {
        render(f.apply(null,item))
    })
}(searchInsert)
    