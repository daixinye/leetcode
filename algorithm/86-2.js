/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	//解二：通过两个数组保存值的方式来实现，不影响原链表,beats 23%
	var stackLeft = [];
	var stackRight = [];
	
	function pushNode(node,x){
		//遍历链表
		if(!node){
			return;
		}
		
		if(node.val<x){
			stackLeft.push(node.val);
		}else{
			stackRight.push(node.val);
		}
		pushNode(node.next, x);
	}
	
	pushNode(head,x);
	var stack = stackLeft.concat(stackRight);
	
	var beforeHead = new ListNode(0);
	var iterator = beforeHead;
	
	stack.forEach(function(val){
		iterator.next = new ListNode(val);
		iterator = iterator.next;
	})
	
	return beforeHead.next;
    
};

function ListNode(val){
	this.val = val;
	this.next = null;
}

function makeListNode(arr){
	var head,iterator;
	head = null;
	iterator = null;
	
	if(arr instanceof Array){
		arr.forEach(function(i){
			if(head==null){
				head = new ListNode(i);
				iterator = head;
			}else{
				iterator.next = new ListNode(i);
				iterator = iterator.next;
			}
		})
	}
	
	return head;
}

//单元测试
function test(arr=[],x=0){
	console.log(partition(makeListNode(arr), x));
}
test([1,4,3,2,5,2],3);
test([],0);
test([2,3,4],1);
test([2,3,4],5);

