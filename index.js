const testArray1 = [
  [10, 20, 40],
  [40, 50, 60],
  [70, -80, 90],
];
const testArray2 = [
  [10, 20, 40],
  [40, 50, 90],
  [70, 80, 10],
];
const testArray3 = [
  [10, 15, 22],
  [34, 50],
  [1, 78, 9],
];
const testArray4 = [
  [10, 23, -2],
  [4, 50, 87],
];

function getGreatestSum(array) {
  const isArray2D = function (array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) ) {
        if (array[i].length !== array[0].length) {
          return 'Invalid input';
        }
      }
    }
    return true;
  }

  if (isArray2D(array) === 'Invalid input') {
    return 'Invalid input';
  }

  if (array.length < 3) {
    return 'Invalid input';
  }

  let sum = 0;
  let sumMax = 0;

  for (let i = 0; i < array[1].length; i++) {
    sum = sum + array[1][i];
  }
  sumMax = sum;

  // Loop through columns
  for (let i = 0; i < array[0].length; i++) {
    // Loop through rows 
    for (let j = 0; j < array.length; j++) { 
      if (j === 2) {
        sum = array[j][i] + array[j - 1][i] + array[j - 2][i];

        if (sum >= sumMax) {
          sumMax = sum;
        }
      }
    }
  }
  
  return sumMax;
}

console.log(getGreatestSum(testArray1));
console.log(getGreatestSum(testArray2));
console.log(getGreatestSum(testArray3));
console.log(getGreatestSum(testArray4));