/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
	//这题用递归做的话要注意，递归参数传递的是引用的拷贝。 beats 20.22，44.22，70.04，79.06，88.45%
	function copy(node){
		if(!!node.next){
			node.val = node.next.val;
			if(!node.next.next){
				node.next = null;
				return;
			}
			copy(node.next);
		}else{
			return;
		}
	}
	
	copy(node);
	
};

function ListNode(val){
	this.val = val;
	this.next = null;
};

function makeTestCase(arr,nodeIndex){
	var beforeHead = new ListNode(0);
	var iterator = beforeHead;
	var node = null;
	
	arr.forEach(function(item,index){
		iterator.next = new ListNode(item);
		iterator = iterator.next;
		index==nodeIndex?node=iterator:null;
	})
	
	return {
		head:beforeHead.next,
		node:node
	}
}

function test(arr,nodeIndex){
	var obj = makeTestCase(arr, nodeIndex);
	deleteNode(obj.node);
	console.log(obj.head);
}

//测试
test([0,1],0);
test([1,2,3,4],2);
test([1,2,3,4],0);
test([1,2,3,4],3);
