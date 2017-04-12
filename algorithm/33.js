/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	var start=-1,end=-1;
	var func = function(nums,target,s,e){
		if(nums[e]<target && nums[s]>target){
			return false;
		}
		else if(s==e){
			if(nums[s]==target){
				if(start==-1 || start > s)
					start = s;
				if(end==-1 || end < e)
					end = e;
				return true;
			}
			else {
				return false;
			}
		}
		var temp = parseInt((s+e)/2,10);
		func(nums,target,s,temp);
		func(nums,target,temp+1,e);
	}
	func(nums, target, 0, nums.length-1);
	return [start,end];
};
console.log(searchRange([0,1,1,2], 1))