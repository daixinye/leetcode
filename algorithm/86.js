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
	//解一：这个解法没有用到新的节点空间，但是会修改原链表，beats 21%
    var leftHead,
		rightHead,
		leftIterator,
		rightIterator,
		iterator;
	
	iterator = head;
	leftHead = null;
	rightHead = null;
	
	while(iterator!==null){
		var val = iterator.val;
		var next = iterator.next;
		if(val<x){
			if(!leftHead){
				leftHead = iterator;
				leftIterator = leftHead;
			}else{
				leftIterator.next = iterator;
				leftIterator = leftIterator.next;
			}
		}else{
			if(!rightHead){
				rightHead = iterator;
				rightIterator = rightHead;
			}else{
				rightIterator.next = iterator;
				rightIterator = rightIterator.next;
			}
		}
		iterator = iterator.next;
	}
	
	//防止出现循环链表
	rightIterator?rightIterator.next = null:null;
	
	if(leftHead===null){
		return rightHead;
	}else{
		leftIterator.next = rightHead;
		return leftHead;
	}
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


