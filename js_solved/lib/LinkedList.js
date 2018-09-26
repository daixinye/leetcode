function ListNode(val) {
    this.val = val;
    this.next = null;
}

function makeList(arr) {
    var beforeHead = new ListNode(0);
    var iterator = beforeHead;

    if (arr instanceof Array) {
        arr.forEach(function(item) {
            iterator.next = new ListNode(item);
            iterator = iterator.next;
        })
    }
    return beforeHead.next;
}

module.exports = {
	ListNode,
	makeList
}