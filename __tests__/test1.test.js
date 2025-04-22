// Test 1 tests
const { sortDescending, maxSubarraySum, nestedEvenSum } = require('../src/test1.js');
  
test('sortDescending should sort array from largest to smallest', () => {
  expect(sortDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});

test('maxSubarraySum should find max sum of subarray of given length', () => {
  expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
  expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
});

test('nestedEvenSum should sum all even numbers in nested object', () => {
  const input1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  };
  const input2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
  };
  expect(nestedEvenSum(input1)).toBe(6);
  expect(nestedEvenSum(input2)).toBe(12);
});
