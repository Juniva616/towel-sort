function towelSort(arr) {
  let result = [];
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let columnInd = i % 2 === 0
          ? j
          : (arr[i].length - j - 1);
        result.push(arr[i][columnInd]);
      }
    } 
    return result;
  } else return result;
}

let arr = [[1, 2, 3,],
           [6, 5, 4], 
           [7, 8, 9, 0],
           [12, 11, 10]]
towelSort(arr);

module.exports = function towelSort(matrix) {
  return [];
}
