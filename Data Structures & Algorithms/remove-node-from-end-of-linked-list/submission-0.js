/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let temp = head;
        let tail = head;
        let count = 0;
        while(tail !==null){
            tail = tail.next;
            count++;
        }
            // remove head case
    if (n === count) {
        return head.next;
    }
        tail = head;
        for(let i=1;i<(count-n);i++){
            tail = tail.next;
        }
    // remove node safely
    tail.next = tail.next.next;
        return head;
    }
}
