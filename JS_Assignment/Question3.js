//Question3:
function allCombinations(str){
    let res = [];
    for (let i = 0; i<str.length; i++){
        for (let j = i; j< str.length; j++){
            res.push(str.slice(i,j+1));
        }
    }
    return res;
}
console.log(allCombinations("dog").join(", "));
