// Input: [1, 2, 3, 4];
// Output: [4, 3, 2, 1];


function reverseArray (arr){

    let si, ei;
    si = 0;
    ei = arr.length - 1;

    while(si < ei){
        [arr[si],arr[ei]] = [arr[ei], arr[si]];
        si++;
        ei--;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4]));
