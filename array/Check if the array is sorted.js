// arr = [1, 2, 3, 4]
// Output: true


const checkArraySorted = (arr) =>{
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
    }
    return true;
}


console.log(checkArraySorted([1,2,3,4, 2]));