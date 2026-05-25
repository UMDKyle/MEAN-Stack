//Question19
function filterLargerElement(arr,target){
    let res = arr.filter(n=>n>target);
    return res;
}
console.log(filterLargerElement([1, 5, 10, 20, 3],6));
