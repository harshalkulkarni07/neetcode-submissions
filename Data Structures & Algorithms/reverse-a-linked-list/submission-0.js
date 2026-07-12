class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            let nextTemp = curr.next; // store next
            curr.next = prev;         // reverse link
            prev = curr;              // move prev forward
            curr = nextTemp;          // move curr forward
        }

        return prev;
    }
}