/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var {
    ListNode,
    makeList
} = require('./lib/LinkedList.js');

var removeElements = function(head, val) {
	var beforeHead = new ListNode(0);
	beforeHead.next = head;

	(function(node){
		if(!node.next){
			return;
		}

		var self = arguments.callee;

		var son = node.next;
		var grandson = son?son.next:null;

		if(son.val == val){
			node.next = grandson;
			self(node);
		}
		self(son);

	}(beforeHead))

	return beforeHead.next;
};

// 测试用例
var cases = [[
    makeList([]),
    1
], [
    makeList([1]),
    1
], [
    makeList([1,1,1,1,2,1,1,1]),
    1
], [
    makeList([1, 2]),
    1
], [
    makeList([1, 2]),
    2
], [
    makeList([1, 2, 6, 3, 4, 5, 6]),
    6
]];

var test = function(c,func) {
	return console.log(func.apply(this,c));
}

test(cases[2],removeElements);