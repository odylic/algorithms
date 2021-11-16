/*
Write a function to delete the first instance of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
 And given a value, 'b', the evaluated result of calling your function should be:

 ('a' -> 'c' -> 'b' -> 'd')

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/



// module.exports = {
//   LinkedList,
//   Node,
//   linkedListRemove,
//   linkedListRemoveMultiple,
// };

// declare a ll with new LinkedList constructor
const ll = new LinkedList();
// declare a nodeList with new Node constructor
const nodeList = new Node("a");
// declare the next values in nodeList next
nodeList.next = new Node("b");
nodeList.next.next = new Node("c");
nodeList.next.next.next = new Node("b");
nodeList.next.next.next.next = new Node("d");
// declare the head of ll to nodeList
ll.head = nodeList;

console.log(ll);

const linkedListRemove = (ll, val) => {
  // removes
  if (ll.head.val === val) {
    ll.head = ll.head.next;
    return ll;
  }

  let prev = ll.head;
  let curr = ll.head.next;
  // while there is a next
  while (curr) {
    // if it's the val
    if (curr.val === val) {
      // remove the curr, make ll.head.next = ll.head.next.next
      // which removes current which was ll.head.next
      prev.next = curr.next;
      return ll;
    }
    // move the pointers along
    prev = curr;
    curr = curr.next;
  }
  return ll;
};

// console.log(linkedListRemove(ll, "b"));


const linkedListRemoveMultiple = (ll, val) => {
  // if head.val is value, return next, skips over first
  if (ll.head.val === val) return ll.head.next;

  // assign current to head
  let curNode = ll.head;
  // assign next to current.next
  let nextNode = curNode.next;

  // while nextNode is valid
  while (nextNode) {
    // if nextNode.value is the value
    if (nextNode.val === val) {
      // current.next is next.next, current is skipped
      curNode.next = nextNode.next;
      // nextNode is reassigned to next.next
      nextNode = nextNode.next;
    } else {
      // current is next, if not, iterate two pointers by one node
      curNode = nextNode;
      // next is next.next
      nextNode = nextNode.next;
    }
  }
  return ll;
};

console.log(linkedListRemoveMultiple(ll, "b"));
