//Question14
function amountTocoins(amount,coins){
    let cur = amount;
    let res = [];
    coins.sort((a,b)=>b-a);
    while (cur>0){
        let found = false;
        for(let i = 0; i<coins.length;i++){
            if (cur>=coins[i]){
                cur -= coins[i];
                res.push(coins[i]);
                found = true;
                break;
            }
        }
        if(!found){
            return [];
        }
    }
    return res;
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
