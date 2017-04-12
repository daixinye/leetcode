/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	var s = "ZABCDEFGHIJKLMNOPQRSTUVWXY";
	var arr = [];
	while(n>0){
		var t = (n)%26;
		n=parseInt((n-1)/26);
		arr.push(s.charAt(t));
	}
	arr.reverse();
	var result="";
	for(var i=0;i<arr.length;i++){
		result+=arr[i];
	}
	return result;
};

console.log(convertToTitle(27))