
// You should implement your task here.

function towelSort(arr) {
  if (arr.length > 0)  {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let columnInd = i % 2 === 0
          ? j
          : (arr[i].length - j - 1);
        console.log(+ arr[i][columnInd]);
      }
    }
  } else console.log([]);
}

let arr = [ [1, 2, 3, 0], 
 [6, 5, 4],
  [7, 8],
[11, 10, 9] ];
 
 towelSort(arr);

module.exports = function towelSort(matrix) {
  return [];
}
