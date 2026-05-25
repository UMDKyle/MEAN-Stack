//Question5:
function convertsFirst(str){
    let myStr = str.split('');
    for (let i = 0; i<myStr.length; i++){
        if (i===0 || myStr[i-1]==" "){
            myStr[i] = myStr[i].toUpperCase();
        }
    }
    return myStr.join('');

}
console.log(convertsFirst('the quick brown fox'));
