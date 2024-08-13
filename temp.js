// insertion sort
let Array = [1,5,3,5,7,8,3,9];

console.log("Before Sorting :", Array);

for(let i=1; i< Array.length; i++) {
    let temp = Array[i];
    let j=i-1;
    while(j >= 0) {
        if(Array[j] > temp) {
            Array[j+1] = Array[j];
        }
        else break;
        j--;
    }
    Array[j+1] = temp;
}

console.log("After Sorting :", Array);