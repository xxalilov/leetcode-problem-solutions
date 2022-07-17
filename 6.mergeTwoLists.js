/**
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Runtime: 112 ms, faster than 33.60% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 44.4 MB, less than 36.15% of JavaScript online submissions for Merge Two Sorted Lists.
 */

var mergeTwoLists = function (l1, l2) {
  let newList = new ListNode(0);

  let headOfNewList = newList;

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      newList.next = l1;

      l1 = l1.next;
    } else {
      newList.next = l2;

      l2 = l2.next;
    }

    newList = newList.next;
  }

  if (l1 == null) {
    newList.next = l2;
  } else {
    newList.next = l1;
  }

  return headOfNewList.next;
};
