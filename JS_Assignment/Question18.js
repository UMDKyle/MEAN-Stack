//Question18
function binarySearch(arr,target){
    let l = 0;
    let r = arr.length-1;
    while (l<=r){
        let mid = Math.floor((r+l)/2);
        if (target===arr[mid]){
            return mid;
        }
        if (target>arr[mid]){
            l = mid+1;
        }
        if (target<arr[mid]){
            r = mid-1;
        }
    }
}
console.log(binarySearch([1,2,5,8,60,90],60));
