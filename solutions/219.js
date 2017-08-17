/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	var obj = {};
	for(var i=0;i<nums.length;i++){
		if(obj[nums[i]]==undefined){
			obj[nums[i]]=i;
		}
		else{
			if(i-obj[nums[i]]<=k)
				return true;
			else
				obj[nums[i]]=i;
		}
	}
	return false;
};