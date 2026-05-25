//Question10:
function identityMatrix(n){
    let res = [];
    for (let i =0; i<n; i++){
        let row = [];
        for (let j = 0; j<n; j++){
            if(j===i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        res.push(row);
    }
    return res;
}
console.log(identityMatrix(3));
