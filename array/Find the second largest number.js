// arr = [3, 7, 1, 9, 5]
// Output: 7


const arr = [ 3,7,1,9,5];

let max = arr[0], smax = arr[1];

for(let i = 2; i < arr.length; i++){
    if(arr[i] > smax) smax = arr[i];
    if(smax > max) [ max , smax] = [smax, max];
}

console.log(smax);