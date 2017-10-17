/* 
Runtime Complexity
Polynomial, O(n2).

 Memory complexity
 Constant, O(1)

Concept of Insertion Sort is very simple. We'll maintain two linked lists:

Original list (given to us as input).
Sorted list (initially empty).
*/

let sorted_insert = function(head, node){

  if (!node){
    return head;
  }

  if (!head || node.data <= head.data){
    node.next = head;
    return node;
  }

  let curr = head;
  while (curr.next 
     && curr.next.data < node.data){
    
    curr = curr.next;
  }

  node.next = curr.next;
  curr.next = node;

  return head;
};

let insertion_sort = function(head){

  let sorted = null;
  let curr = head;

  while (curr){
    let temp = curr.next;
    sorted = sorted_insert(sorted, curr);
    curr = temp;
  }

  return sorted;
};