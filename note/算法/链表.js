// 模拟实现一个链表

const a = { val: 'a' }
const b = { val: 'b' }
const c = { val: 'c' }
const d = { val: 'd' }

a.next = b
b.next = c
c.next = d
d.next = null

let p = a
while(p) {
    console.log(p.val)
    p = p.next
}
