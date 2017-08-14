/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @leetcode 2
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
var addTwoNumbers = function(l1, l2) {
    let it1 = l1, it2 = l2
    let head = new ListNode(null)
    let it = head, add = 0
    do {
        let sum = add
        sum += it1 ? it1.val : 0
        sum += it2 ? it2.val : 0
        it.next = new ListNode(sum >= 10 ? sum - 10: sum)
        add = sum >= 10 ? 1 : 0

        it = it.next
        it1 = it1 ? it1.next : null
        it2 = it2 ? it2.next : null
    }while(it1 || it2)

    if(add) it.next = new ListNode(1)

    return head.next
};


function _makeList(array){
    let head = new ListNode(null)

    let it = head
    array.forEach(val => {
        it.next = new ListNode(val)
        it = it.next
    })
    return head.next
}

function _renderList(l){
    if(!l) return console.log('end')
    console.log(l.val)
    _renderList(l.next)
}

const mock = [
    [_makeList([2,4,3]),_makeList([5,6,4])],
    [_makeList([5]), _makeList([5])],
    [_makeList([0]), _makeList([1,8])],
]

mock.forEach(function(item, index, array) {
    _renderList(addTwoNumbers.apply(null,item))
})
