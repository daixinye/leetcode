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
	//O(n) time,O(1) space，留坑还没写完- -
	var count = 0;
	(function(node){
		if(!node){
			return;
		}
		count++;
		arguments.callee(node.next);
	}(head))
	
	console.log(count);
	var anchor = count%2?parseInt((count/2))+1:parseInt(count/2);
	
	var temp = 0;
	var it1,it2,it3;
	(function(node){
		if(!node.next){
			return;
		}
		
		
	})
	
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

