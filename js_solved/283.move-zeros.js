/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var pos = 0
    for(var i = 0; i < nums.length; i++){
        if(nums[i] !==0 ){
            nums[pos++] = nums[i]
        }   
    }
    for(;pos < nums.length; pos++){
        nums[pos]=0
    }
};