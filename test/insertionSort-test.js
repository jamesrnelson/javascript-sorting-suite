const assert = require('chai').assert
const insertSort = require('../insertionSort')

describe('Takes in a small unsorted array', function() {
  it('should sort from least to greatest using insertion', function () {
    var unsortedArray = [2, 1, 4, 3];
    var expectedArray = [1, 2, 3, 4];
    assert.deepEqual(insertSort(unsortedArray), expectedArray);
  });
});

describe('Takes in a large unsorted array', function() {
  it('should sort from least to greatest using insertion', function () {
    var newUnsortedArray = [7, 1, 5, 2, 9, 0, 8, 4, 3, 6];
    var newExpectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    assert.deepEqual(insertSort(newUnsortedArray), newExpectedArray);
  });
});
