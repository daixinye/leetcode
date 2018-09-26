
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = {},max = 0
    nums.forEach(item => {
        let left = map[item-1] || 0, right = map[item+1] || 0
        if(!(item in map)){
            map[item] = left + right + 1
            left && (map[item-left] = map[item])
            right && (map[item+right] = map[item])
        }
        map[item] > max && (max = map[item])
    })
    return max
};

void function test(f){
    const mock = [
        [[100,4,200,1,3,2]],
        [[1,1,1]],
        [[1,2,0]],
        [[1,2,0,1]],
        [[-2,-3,-3,7,-3,0,5,0,-8,-4,-1,2]]
    ]

    const render = function(val){
        console.log(val)
        console.log()
    }

    mock.forEach(function(item, index, array) {
        render(f.apply(null,item))
    })
}(longestConsecutive)
    