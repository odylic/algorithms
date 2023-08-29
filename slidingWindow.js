const maxSubArraySum = (nums, size) => {
  let currSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; ++i) {
    // add up to get the sum, creates right bound
    currSum += nums[i];

    if ()
  }
};

const arr1 = [1, 2, 3, 4, 5, 6, 8, 9, 2, 3];

console.log(maxSubArraySum(arr1, 3));
