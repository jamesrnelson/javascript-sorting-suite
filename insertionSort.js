const insertSort = (unsortedNumbers) => {
  var sortedArray = [];
  var originalArrayLength = unsortedNumbers.length;
  for (var i = 0; i < originalArrayLength; i++) {
    var numberToPlace = unsortedNumbers.shift();
    if (sortedArray.length === 0) {
      sortedArray.push(numberToPlace);
    } else {
      let iterations = sortedArray.length;
      for (var j = 0; j < iterations; j++) {
        if (sortedArray[j] < numberToPlace && j === (iterations - 1) ) {
          sortedArray.splice(j + 1, 0, numberToPlace);
        } else if (sortedArray[j] > numberToPlace) {
          sortedArray.splice(j, 0, numberToPlace);
          break;
        }
      }
    }
  }
  return sortedArray;
};

module.exports = insertSort;
