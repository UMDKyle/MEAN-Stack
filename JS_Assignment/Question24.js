//Question24
function bubbleSort(arr){
    for(let i =0; i< arr.length-1; i++){
        for(let j = 0; j< arr.length-1-i; j++){
            if(arr[j]<arr[j+1]){
                let pre = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = pre;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));
