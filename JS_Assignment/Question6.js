//Question6:
function longestWord(str){
    let longest = 0;
    let index = 0;
    let myStr = str.split(' ');
    for (let i = 0; i<myStr.length;i++){
        if (myStr[i].length>longest){
            longest = myStr[i].length;
            index = i;
        }
    }
    return myStr[index];
}
console.log(longestWord('Web Development Tutorial'));
