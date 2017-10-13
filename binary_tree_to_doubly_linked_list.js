/* Given a binary tree, convert it to a doubly linked list such 
that the order of doubly linked list is the same as in-order traversal of the binary tree.

Solution
Runtime Complexity
Linear, O(n).

Runtime complexity is based on the number of nodes in the tree.

Memory Complexity
Linear, O(h). 

Recursive solution has O(h) memory complexity as it will 
consume memory on the stack up to the height of binary tree 'h'. 
It will be O(log n) for balanced tree and in worst case can be O(n).
*/

let concatenate_lists = function(head1, head2) {

  if (!head1) {
    return head2;
  }

  if (!head2) {
    return head1;
  }

  // use left for previous.
  // use right for next.
  let tail1 = head1.left;
  let tail2 = head2.left;

  tail1.right = head2;
  head2.left = tail1;

  head1.left = tail2;
  tail2.right = head1;

  return head1;
};

let convert_to_linked_list = function(root) {
  if (!root) {
    return null;
  }

  let list1 = convert_to_linked_list(root.left);
  let list2 = convert_to_linked_list(root.right);

  root.left = root.right = root;
  let result = concatenate_lists(list1, root);
  result = concatenate_lists(result, list2);

  return result;
};