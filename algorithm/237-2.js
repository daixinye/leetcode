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
	//注意node传递进来的只是node指针的拷贝，分三种情况去考虑，最好一次运行 beats 88.45%
	//第一种 node是最后一个节点
	if(!node.next){
		return;
	}
	
	if(!node.next.next){
		//第二种情况 node后有一个节点，直接复制val然后把next置为null
		node.val = node.next.val;
		node.next = null;
	}else{
		//第三种情况 node后有2个以上的节点，直接复制val然后把next指向第2个节点
		node.val = node.next.val;
		node.next = node.next.next;
	}
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
