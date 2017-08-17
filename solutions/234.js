/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
	//O(n)time O(n)space，26.61，36.29，62.10，20.97
	var values = [];
	function pushValue(node){
		if(!!node){
			values.push(node.val);
			pushValue(node.next);
		}
	}
	
	pushValue(head);
	var result = true;
	values.forEach(function(v,i){
		if(v !== values[values.length-i-1]){
			result = false;
			return;
		}
	})
	
	return result;
};

function ListNode(val){
	this.val = val;
	this.next = null;
}

function makeList(arr){
	var beforeHead = new ListNode(0);
	var iterator = beforeHead;
	
	if(arr instanceof Array){
		arr.forEach(function(item){
			iterator.next = new ListNode(item);
			iterator = iterator.next;
		})
	}
	return beforeHead.next;
}

function test(arr){
	console.log(isPalindrome(makeList(arr)))
}

//测试用例
test([1,2,3]);
test([1]);
test([1,2,1]);
test([1,1]);

