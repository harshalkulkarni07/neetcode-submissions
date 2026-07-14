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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let l = new ListNode(-1)
        let s = l
        while(list1 !==null && list2 !==null ){
            if(list1.val < list2.val){
                s.next = list1;
                list1 = list1.next;
                s= s.next
            }else{
                s.next = list2;
                list2 = list2.next
                s=s.next
            }
        }
        s.next = list1 || list2;  
        return l.next;              
    }
}
