const findValuesThatMakeUpTarget = (numArray, target) => {
  // Given an array of integers num and an integer target,
  //return indices of the two numbers such that they add up to target
  let missingNumber = 0;
  const valuesArray = [];
  const arrayAsObject = numArray.reduce((accumulator, value, index) => ({
    ...accumulator,
    [value]: [value, index],
  }));

  for (let index in numArray) {
    const value = numArray[index];
    missingNumber = target - value;

    if (arrayAsObject[missingNumber]) {
      //** returns the first encountrered indices to the values that sum up to target **//
      //return [arrayAsObject[missingNumber][1], Number(index)];
      valuesArray.push([arrayAsObject[missingNumber][1], Number(index)]);
    }
  }

  return valuesArray;
};

const findTheSubArrayWithLargestSum = (numArray) => {
  let maxSum = 0;
  let maxSumIndex;
  for (let index in numArray) {
    const subArray = numArray[index];
    const currentSum = subArray.reduce((a, b) => a + b, 0);
    if (maxSum < currentSum) {
      maxSum = currentSum;
      maxSumIndex = index;
    }
  }

  return { maxSumIndex, maxSum };
};

console.log(findValuesThatMakeUpTarget([1, 2, 3, 4, 5, 6, 7], 11));
console.log(
  findTheSubArrayWithLargestSum([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
  ])
);
