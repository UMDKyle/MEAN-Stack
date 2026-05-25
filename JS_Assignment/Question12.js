//Question12:
function checkPerfect(num){
    if (num <= 1) {
        return false;
    }
    let count = 0;
    for (let i = 1; i<=num/2;i++){
        if (num%i===0){
            count+=i;
        }
    }
    if (count===num){
        return true;
    }
    return false;
}
console.log(checkPerfect(28));
