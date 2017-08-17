/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	var map={};
	for(var i = 0;i<s.length;i++){
		var char = s[i];
		map[char]===undefined?map[char]=0:map[char]++;
	}
	for(var j in map){
		if(map[j]===0){
			return s.indexOf(j); 
		}
	}
	
	return -1;
};

var mock = ['leecode','loveleetcode',''];

mock.forEach(function(s){
	console.log(firstUniqChar(s));
});