# @dencioo/greatest-sum

Calculate the greatest sum of three consecutive rows by column in a 2D array.

## Installation

```bash
npm install @dencioo/greatest-sum
```
```js
const getGreatestSum = require('@dencioo/greatest-sum');

const array = [
  [10, 20, 40],
  [40, 50, 60],
  [70, -80, 90],
];

console.log(getGreatestSum(array));
// Output: 120 (or whatever the result is)
```

## API

### `getGreatestSum(array)`

- **array**: A 2D array where each sub-array has the same length and there are at least 3 rows.

- **Returns**: The greatest sum of three consecutive rows by column.

- Returns `'Invalid input'` if the input array is invalid.
