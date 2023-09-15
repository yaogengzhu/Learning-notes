// 83 删除排序链表中的重复元素
function deleteDuplicates(head) {
  if (head === null) return head
  let cur = head
  while (cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}

// 83 删除排序链表中的重复元素 II
function deleteDuplicates2(head) {
  if (head === null || head.next === null) return head
  head.next = deleteDuplicates2(head.next)
  return head = head.next.val === head.val ? head.next : head
}