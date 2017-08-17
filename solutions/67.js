/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	var result = [];
	var len_a = a.length;
	var len_b = b.length;
	var arr_a=[];
	var arr_b=[];
	for(var i=0;i<len_a;i++)
		arr_a.push(parseInt(a.charAt(i),10));
	for(var i=0;i<len_b;i++)
		arr_b.push(parseInt(b.charAt(i),10));
	arr_a = arr_a.reverse();
	arr_b = arr_b.reverse();
	
	var n = 0;
	while(1){
		if(arr_a[n]==undefined && arr_b[n]==undefined)
			break;
		if(arr_a[n]==undefined)
			arr_a[n]=0;
		if(arr_b[n]==undefined)
			arr_b[n]=0;
		switch (arr_a[n]+arr_b[n]) {
			case 0:
				result.push(0);
				break;
			case 1:
				result.push(1);
				break;
			case 2:
				if(arr_a[n+1]==undefined)
					arr_a[n+1]=0;
				arr_a[n+1]+=1;
				result.push(0);
				break;
			case 3:
				if(arr_a[n+1]==undefined)
					arr_a[n+1]=0;
				arr_a[n+1]+=1;
				result.push(1);
			default:
				break;
		}
		n++;
	}
	
	result = result.reverse();
	var s = "";
	for(var i=0;i<result.length;i++)
		s+=""+result[i];
	return s;
};

console.log(addBinary("1"
,"1"));