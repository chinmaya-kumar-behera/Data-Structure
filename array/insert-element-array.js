// arr = [3,6,3,1]
// index 2 , element 8

const addElementToArray = (arr, index, element) => {
  const arrLen = arr.length;
  for (let i = arrLen; i > index; i--) {
    arr[i] = arr[i-1];
  }
  arr[index] = element;
  return arr;
};


const arr = [3, 6, 3, 1];

console.log(addElementToArray(arr, 2, 8));
console.log(addElementToArray(arr, 1, 8));