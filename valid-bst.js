/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// module.exports = { BinaryTree, validBST };

const tree = new BinaryTree(10);
tree.left = new BinaryTree(12);
tree.left.left = new BinaryTree(3);
tree.left.right = new BinaryTree(6);
tree.right = new BinaryTree(14);

//     10
//     /\
//    12  14
//   / \
//  3   6

// console.log(tree);

// don't use arrow functions for 'this' keyword
BinaryTree.prototype.add = function (value) {
  const node = new BinaryTree(value);
  if (value > this.value) {
    if (this.right === null) this.right = node;
    // recurse
    else this.right.add(value);
  }

  if (value < this.value) {
    if (this.left === null) this.left = node;
    else this.left.add(value);
  }
};
tree.add(9);
tree.add(18);
tree.add(12);
console.log(tree);

//      10
//     /   \
//    5     14
//   / \    / \
//  3   6  12  18
//        \
//         9

// // default parameters given -Infinity and Infinity
// const validBST = (tree, min = -Infinity, max = Infinity) => {
//   // if null, return true
//   if (!tree) return true;
//   // if tree.value < min which gets reassigned in recursive expression
//   if (tree.value < min || tree.value > max) return false;

//   return (
//     // recursive call (tree.left = null, min = -Infinity, tree.value is tested)
//     validBST(tree.left, min, tree.value) &&
//     // && makes it so both recursive expressions must be true for the total statement to be true, checking if it's a valid BST
//     validBST(tree.right, tree.value, max)
//   );
// };

const validBST = (tree, min = -Infinity, max = Infinity) => {
  if (!tree) return true;
  if (tree.value < min || tree.value > max) return false;

  return (
    validBST(tree.left, min, tree.value) &&
    validBST(tree.right, tree.value, max)
  );
};

console.log(validBST(tree));
