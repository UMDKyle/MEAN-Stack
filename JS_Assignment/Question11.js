//Question11:
function secondMaxMin(arr){
    let max = -Infinity;
    let smax = -Infinity;
    let min = Infinity;
    let smin = Infinity;
    for (i =0; i< arr.length;i++){
        if (arr[i]>max){
            smax = max;
            max = arr[i];
        }
        else if (arr[i]>smax){
            smax = arr[i];
        }
        if (arr[i]<min){
            smin = min;
            min = arr[i];
        }
        else if (arr[i]<smin){
            smin = arr[i];
        }
    }
    return [smin,smax];
}
console.log(secondMaxMin([1,2,3,4,5]));
