
/**
 * Definition for singly\u002Dlinked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    // 如果两者有一个是空，那么直接返回另一个链表即可
    if(!l1) return l2
    if(!l2) return l1
    
    // 设置一个头结点，方便对链表的处理
    var head = new ListNode(null)
    var it = head

    // 遍历链表，选择插入
    while (l1 && l2) {
        if(l1.val < l2.val){
            it = it.next = l1
            l1 = l1.next
        }else{
            it = it.next = l2
            l2 = l2.next
        }
    }
    // 遍历结束后，l1或l2一定有一个为null，这时候直接把剩下的链表连在末尾即可
    it.next = l1 ? l1 : l2

    return head.next
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

void function test(f) {
    const mock = [
        [makeListNode([1, 3, 5, 7]), makeListNode([2, 4, 6, 8])],
        [makeListNode([]), makeListNode([2])],
        [makeListNode([2]), makeListNode([])],
        [makeListNode([]), makeListNode([])],
        [makeListNode([1,2,3,4]), makeListNode([5,6,7,8])],
    ]

    function makeListNode(array) {
        var head = new ListNode(null)
        var temp = head
        array.forEach(item => {
            temp = temp.next = new ListNode(item)
        })
        return head.next
    }

    mock.forEach(function (item, index, array) {
        var start = new Date()
        console.log('#', index + 1)
        console.log('input: ', item)
        console.log('output: ', f.apply(null, item))
        console.log('time: %s', new Date() - start)
        console.log()
    })
}(mergeTwoLists)
