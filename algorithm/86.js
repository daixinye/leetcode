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
	//解三：通过递归遍历，直接修改原链表，beats 78.57%
	var beforeLeftHead = new ListNode(0),
		beforeRightHead = new ListNode(0);
	var leftIterator = beforeLeftHead,
		rightIterator = beforeRightHead;
	
	function pushNode(node,x){
		if(!node){
			return null;
		}
		
		if(node.val<x){
			//addToLeft
			leftIterator.next = node;
			leftIterator = leftIterator.next;
		}else{
			//addToRight
			rightIterator.next = node;
			rightIterator = rightIterator.next;
		}
		pushNode(node.next,x);
	}
	
	pushNode(head, x);
	
	leftIterator.next = null;
	rightIterator.next = null;
	//merge
	leftIterator.next = beforeRightHead.next;
    return beforeLeftHead.next;
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

