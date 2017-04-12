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

	var iterator = beforeHead;
	var vals = []

	while(iterator = iterator.next){
		iterator.val == val?null:vals.push(iterator.val);
	}

	var result = new ListNode(0);
	iterator = result;
	vals.forEach(function(val){
		iterator.next = new ListNode(val);
		iterator = iterator.next;
	})

	return result.next;
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

test(cases[3],removeElements);