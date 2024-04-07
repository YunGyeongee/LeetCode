/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let result = new ListNode()
    let temp = result
    let num = 0
    
    while (l1 !== null || l2 !== null) {
        const val1 = l1 ? l1.val : 0
        const val2 = l2 ? l2.val : 0
        let sum = val1 + val2 + num
        num = Math.floor(sum / 10)
        
        temp.next = new ListNode(sum % 10)
        temp = temp.next
        
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        
        if (num > 0) {
            temp.next = new ListNode(num)
        }
    }    
    
    return result.next
};