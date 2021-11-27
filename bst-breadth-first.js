function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree and a callback function, apply the
callback to the values of the BST in breadth-first order.

Example:

If the tree is

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

then apply the callback on the numbers in the order:
4, 2, 7, 1, 3, 9, 8.

Hint:

Maintain a queue (array) consisting of the nodes we need to operate on.
For each node in the queue, push the left and right children (if applicable) to
the end of the queue. Keep consuming the queue (using the shift method) until
there are no more nodes in the queue.

Utilizing recursion is not necessary, nor recommended.

*/

const bfs = (root, callback) => {
  // declare queue to the value of the entire document, to an array
  const queue = [root];
  // while queue has values
  while (queue.length) {
    // declare node as the first element of the array
    const node = queue.shift();
    // invoke the callback on node.value which is the first element of the array that was just shifted
    callback(node.value);

    // if (node.left) exists in the BST, push into the queue
    if (node.left) queue.push(node.left);
    // if (node.right) exists in the BST, push into the queue
    if (node.right) queue.push(node.right);
    // continue this by level until the while loop finishes
  }
  return queue;
};

bst = new BinarySearchTree(4);
bst.left = new BinarySearchTree(2);
bst.right = new BinarySearchTree(7);
bst.left.left = new BinarySearchTree(1);
bst.left.right = new BinarySearchTree(3);
bst.right.right = new BinarySearchTree(9);
bst.right.right.left = new BinarySearchTree(8);

// should be [ 4,2,7,1,3,9,8]

let results = [];
const cb = (val) => {
  results.push(val);
};
console.log(bfs(bst, cb));

/*

Extension:

Given a 2D grid of 0s, 1s, and a single 2, with the start position the top-left
corner, determine the minimum distance need to travel to the 2.

0s represent traversable land.
1s represent "water" that we cannot traverse.
2 represents our final goal.

The top-left corner will always be a 0. We will try to reach the 2 by
traversing through land. We are only allowed to traverse up/left/down/right,
with no diagonal movement allowed. If the 2 cannot be reached, return -1.

Examples:

Input:
[
  [0, 0, 1, 1],
  [2, 0, 1, 0],
  [1, 0, 0, 0]
]
Output: 1 (starting at the top-left corner, move down)

Input:
[
  [0, 0, 1, 1],
  [0, 0, 1, 2],
  [1, 0, 0, 0]
]
Output: 6 (starting at the top-left corner, either move
down-right-down-right-right-up, or right-down-down-right-right-up)

Input:
[
  [0, 0, 0, 1, 1, 0, 2, 0]
]
Output: -1 (the 2 is not reachable by land)

Hint:

Apply the general principles of breadth-first search. Maintain a queue of
positions with their distances. When consuming each position, check to see which
neighbors are traversable and haven't already been visited.

*/

const minimumDistance = (grid) => {
  const outer = grid.length;
  const inner = grid[0].length;

  const queue = [{ i: 0, j: 0, dist: 0 }];
  const visited = new Array(outer)
    .fill(null)
    .map((ele) => new Array(inner).fill(false));

  // mark an unvisited location as visited and push it to the queue for processing later
  const processPosition = (i, j, dist) => {
    if (!visited[i][j] && grid[i][j] !== 1) {
      visited[i][j] = true;
      queue.push({ i, j, dist });
    }
  };

  while (queue.length) {
    let { i, j, dist } = queue.shift();
    if (grid[i][j] === 2) return dist;

    // increment distance for next location to visit
    dist += 1;

    // check top
    if (i > 0) processPosition(i - 1, j, dist);
    // check buttom
    if (i < outer - 1) processPosition(i + 1, j, dist);
    // check left
    if (j > 0) processPosition(i, j - 1, dist);
    // check right
    if (j < inner - 1) processPosition(i, j + 1, dist);
  }
  // if the value 2 is not on the grid, return -1
  return -1;
};

module.exports = { BinarySearchTree, bfs, minimumDistance };
