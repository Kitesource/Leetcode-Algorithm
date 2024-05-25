/**
 * 给你两个 非空 的链表，表示两个非负的整数。
 * 它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
 * 请你将两个数相加，并以相同形式返回一个表示和的链表。
 * 输入：l1 = [2,4,3], l2 = [5,6,4]
 * 输出：[7,0,8]
 * 解释：342 + 465 = 807.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let list1, list2
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function makeList1(arr) {
  let list = null
  arr.forEach((item) => {
    if (!list) list = new ListNode(item)
    else list = new ListNode(item, list)
  })
  return list
}
list1 = makeList1([3, 4, 2])
list2 = makeList1([4, 6, 5])
console.log(list1)
console.log(list2)
/* ListNode {
  val: 5,
  next: ListNode { val: 6, next: ListNode { val: 4, next: null } }
} */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let addOne = 0 // 进位
  let sum = new ListNode('0') // 创建一个头链表用于保存结果
  let head = sum // 保存头链表的位置用于最后的链表返回
  while (addOne || l1 || l2) {
      let val1 = l1 !== null ? l1.val : 0
      let val2 = l2 !== null ? l2.val : 0
      let r1 = val1 + val2 + addOne
      addOne = r1 >= 10 ? 1 : 0  // 如果求和结果>=10，那么进位为1，否则为0
      sum.next = new ListNode(r1 % 10)
      sum = sum.next 
      if (l1) l1 = l1.next 
      if (l2) l2 = l2.next 
  }
  return head.next
};

console.log(addTwoNumbers(list1, list2));
/**
 * ListNode {
  val: 7,
  next: ListNode { val: 0, next: ListNode { val: 8, next: null } }
}
 */