// arr = [5, 6, 7]
// element = 4
// Expected output: [4, 5, 6, 7]

const arr = [5,6,7];
const input = 4;

for( let i = arr.length; i > 0; i-- ){
    arr[i] = arr[i-1];
}

arr[0] = input;

console.log(arr);