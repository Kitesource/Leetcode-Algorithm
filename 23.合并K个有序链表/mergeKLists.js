/**
 * 合并K个升序链表
 * 归并算法流程
一个是确定归并的边界，当 start === end 时，代表现在只剩最后一个元素了，直接返回该数组即可，准备进行合并；
另一个就是合并两个有序链表的函数了通过 mid = start + ((end - start) >> 1) 分成左右两部分，然后左右两部分 分别调用 mergeList() 继续递归
将左右两部分递归 return 回来的结果，进行合并排序并返回 即 调用 merge()
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if(!lists.length) return null; // 空的直接返回，不然 lists.length 是负数
  return mergeList(lists, 0, lists.length - 1);
};

// 归并排序进行不断的分割，return 时的 merge 进行合并排序
function mergeList(lists, start, end) {
  // 如果 start === end 说明分治的分到头了，只剩一个元素了，直接返回即可
  if(start === end) {
      return lists[start];
  }
  const mid = start + ((end - start) >> 1); // 找到中点，然后下面继续进行递归分割成左右两部分
  const leftList = mergeList(lists, start, mid);
  const rightList = mergeList(lists, mid + 1, end);
  return merge(leftList, rightList); // 进行合并
}

// 这里就是基本算法，合并两个有序链表
function merge(head1, head2) {
  let newHead = new ListNode(0), p = newHead;
  while(head1 && head2) {
      if(head1.val <= head2.val) {
          p.next = head1;
          head1 = head1.next;
      } else {
          p.next = head2;
          head2 = head2.next;
      }
      p = p.next;
  }
  // 没遍历完的接上即可
  p.next = head1 ? head1 : head2;
  return newHead.next;
}