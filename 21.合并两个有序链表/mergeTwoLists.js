/**
 *输入：l1 = [1,2,4], l2 = [1,3,4]
  输出：[1,1,2,3,4,4]
 */


/* 
递归:
终止条件：两条链表分别名为 l1 和 l2，当 l1 为空或 l2 为空时结束
返回值：每一层调用都返回排序好的链表头
本级递归内容：如果 l1 的 val 值更小，则将 l1.next 与排序好的链表头相接，l2 同理
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    console.log('l1,', JSON.stringify(l1))
    console.log('l2,', JSON.stringify(l2))
    l1.next = mergeTwoLists(l1.next, l2);
    console.log('l11,', JSON.stringify(l1))
    console.log('l12,', JSON.stringify(l2))
    return l1;
  } else {
    console.log('l13', JSON.stringify(l1))
    console.log('l23', JSON.stringify(l2))
    l2.next = mergeTwoLists(l1, l2.next);
    console.log('l14', JSON.stringify(l1))
    console.log('l24', JSON.stringify(l2))
    return l2;
  }
};

const list1 = {val: 2, next: {val: 4, next: { val: 6, next: null }}}
const list2 = {val: 5, next: {val: 8, next: { val: 12, next: null }}}

console.log(JSON.stringify(mergeTwoLists(list1, list2)))