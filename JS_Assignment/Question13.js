//Question13
function getFactors(num){
    let res = []
    for(let i=1; i<num+1;i++){
        if (num%i===0){
            res.push(i);
        }
    }
    return res;
}
console.log(getFactors(12));
