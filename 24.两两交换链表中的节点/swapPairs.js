/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;
  while (temp.next !== null && temp.next.next !== null) {
      const node1 = temp.next;
      const node2 = temp.next.next;
      temp.next = node2;
      node1.next = node2.next;
      node2.next = node1;
      temp = node1;
  }
  return dummyHead.next;
};