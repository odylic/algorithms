// function Node(value) {
//   this.value = value;
//   this.next = null;
// }

/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 * If the input is null, your function should return null
 *
 * Example:
 * If the linked list is:
 *
 *      1 -> 2 -> 3 -> 4 -> 5
 *
 * The result should like like:
 *
 *      5 -> 4 -> 3 -> 2 -> 1
 *
 * Extension:
 * Do it in place
 *
 */

// // create a linked list
// const a = new Node("1");
// const b = new Node("2");
// const c = new Node("3");
// const d = new Node("4");
// const e = new Node("5");
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// way to show linked list
const linkedList = (head) => {
  // initialize an array as the stack
  const stack = [];

  while (head) {
    stack.push(head.value);
    head = head.next;
  }
  return stack;
};

// console.log(linkedList(a));

// recursive expression to show linked list
const linkedListRecursed = (head) => {
  // base case
  if (!head || !head.next) return head;
  let current = head;
  let next = current.next;
  let end = linkedListRecursed(current.next);
  return end;
};

// console.log(linkedListRecursed(a));

// const reverseLinkedList = (head) => {
//   // create a stack with all the values in the linked list
//   const stack = [];
//   // traverse linked list and push values into stack
//   while (head) {
//     stack.push(head.value);
//     head = head.next;
//   }
//   // create a new head with the last element as the value
//   const newHead = new Node(stack.pop());
//   // console.log(newHead)

//   let current = newHead;
//   // once the length is 0, condition will evaluate to false which will break out of the loop
//   while (stack.length) {
//     current.next = new Node(stack.pop());
//     current = current.next;
//   }
//   return newHead;
// };

// value is the number for each node and has a next value
function Node(value) {
  this.value = value;
  this.next = null;
}

// create a linked list
// the const is a,b,c,d,e
// each Node's value is 1,2,3,4,5
const a = new Node("1");
const b = new Node("2");
const c = new Node("3");
const d = new Node("4");
const e = new Node("5");
a.next = b;
b.next = c;
c.next = d;
d.next = e;

// const reverseLinkedList = (head) => {
//   // initialize stack array
//   const stack = [];
//   // while head is defined
//   while (head) {
//     // push the value into the stack
//     stack.push(head.value);
//     // head is reassigned as next
//     head = head.next;
//   }
//   // declare newHead as a new Node with the value of the last linked list popped off
//   const newHead = new Node(stack.pop());
//   // reassign current as newHead
//   let current = newHead;
//   // while stack still has elements, until then it will break out of the loop
//   while (stack.length) {
//     // current.next is the new Node with the value of the last in linked list popped off
//     current.next = new Node(stack.pop());
//     // current is reassigned to the current.next
//     current = current.next;
//   }
//   // return the newHead
//   return newHead;
// };

const reverseLinkedList = (head) => {
  const stack = [];
  // push into stack the value and reassign next to the head so it goes through the whole linked list, going regular
  while (head) {
    stack.push(head.value);
    head = head.next;
  }
  // newHead is the last in list, reversing
  const newHead = new Node(stack.pop());
  let current = newHead;

  // reverses the stack, making the next the last one popped
  while (stack.length) {
    current.next = new Node(stack.pop());
    // making the current the next one which is the last one popped
    current = current.next;
  }
  return newHead;
};

console.log(reverseLinkedList(a));

module.exports = { Node, reverseLinkedList };

// recursion
const reverseLinkedListExt = (head) => {
  // base case
  if (!head || !head.next) return head;
  // assign pointer variables
  let current = head;
  let next = current.next;
  // use recursion with the next node to traverse to the end of the linked list
  let end = reverseLinkedListExt(next);

  // rearrange pointers, reverse the order of the nodes
  current.next.next = current;
  current.next = null;
  // return end which is the new head
  return end;
};

// console.log(reverseLinkedListExt(a));
