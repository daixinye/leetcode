/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	//递归版 O(n)
	var newHead = null;
	var beforeHead = new ListNode(0);
	beforeHead.next = head;
	
	(function(node){
		var self = arguments.callee;
			
		if(node.next){
			self(node.next).next = node==beforeHead?null:node;
		}
		else{
			newHead = node==beforeHead?null:node;
		}
		return node;
	}(beforeHead));
	
	return newHead;
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


//单元测试
function test(arr=[]){
	console.log(reverseList(makeList(arr)));
}
test([]);
test([1]);
test([1,2]);
test([1,2,3]);