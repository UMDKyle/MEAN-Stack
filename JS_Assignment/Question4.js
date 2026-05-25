//Question4:
function alphabeticalOrder(str){
    let res = str.split('').sort().join('');
    return res;
}
console.log(alphabeticalOrder('webmaster'));
