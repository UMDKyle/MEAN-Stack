//Question1:
function reverseNumber(num){
    let res = num.toString().split('').reverse().join('');
    return res
}
console.log(reverseNumber(32243));
