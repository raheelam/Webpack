// Given an array of integers num and an integer target,
//return indices of the two numbers such that they add up to target

const findValuesThatMakeUpTarget = (numArray, target) => {
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

console.log(findValuesThatMakeUpTarget([1, 2, 3, 4, 5, 6, 7], 11));
