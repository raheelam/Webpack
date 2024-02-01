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
  //function for finding sub array with largest sum
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

const sortObjectsByColorsInGivenOrder = (
  list,
  order = ['red', 'white', 'blue']
) => {
  const colorsObj = {};
  const sortedList = [];
  for (let color of order) {
    colorsObj[color] = [];
  }
  /* Sorts an array of objects by color property in given order */
  for (let obj of list) {
    if (colorsObj) {
      colorsObj[obj.color].push(obj);
    }
  }

  for (let color of order) {
    sortedList.push(...colorsObj[color]);
  }

  return sortedList;
};

const findMaxProfitBetweenTwoDays = (
  prices = [1, 2, 3, 4, 1, 3, 4, 55, 8, 2]
) => {
  // given an array of prices assuming each index represents a day,
  // find two days that bring out the max profit
  const pricesCopy = [...prices];
  pricesCopy.sort((a, b) => a - b);
  const buyValue = pricesCopy[0];
  const sellValue = pricesCopy.at(-1);
  const maxProfit = sellValue - buyValue;
  if (maxProfit < 0) {
    return 0;
  } else {
    //to return with the days lets assume the Indices are the days
    const buyDay = prices.indexOf(buyValue);
    const SellDay = prices.indexOf(sellValue);
    return { buyDay, SellDay, buyValue, sellValue, maxProfit };
  }
};

const reverseString = (listOfChar) => {
  // reverse string in array of chars
  const reversedListOfChar = listOfChar.reverse();
  return reversedListOfChar.join('');
};
console.log(findMaxProfitBetweenTwoDays());

console.log(
  sortObjectsByColorsInGivenOrder([
    { color: 'white', type: 'blouse' },
    { color: 'blue', type: 'dress' },
    { color: 'red', type: 'cap' },
    { color: 'white', type: 'shirt' },
    { color: 'blue', type: 'trouser' },
    { color: 'red', type: 'dress' },
  ])
);
console.log(findValuesThatMakeUpTarget([1, 2, 3, 4, 5, 6, 7], 11));
console.log(
  findTheSubArrayWithLargestSum([
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5],
  ])
);
