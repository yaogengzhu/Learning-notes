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
var mergeTwoLists = function(list1, list2) {
  if (list1 === null) return list2
  if (list2 === null) return list1
  const prehead = new ListNode()
  let p = prehead;

  while(list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
          p.next = list1
          list1 = list1.next
      } else {
          p.next = list2
          list2 = list2.next
      }
      p = p.next
  }

  if (list1 !== null) {
      p.next = list1
  }
  if (list2 !== null) {
      p.next = list2
  }

  return prehead.next
};