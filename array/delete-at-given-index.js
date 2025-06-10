// arr = [1, 2, 3, 4]
// index = 1
// Expected output: [1, 3, 4]


const arr = [ 1,2,3,4];
const givenIndex = 1;

for(let i = givenIndex; i < arr.length; i++){
    arr[i] = arr[i+1];
}

arr.length = arr.length - 1; 

console.log(arr);