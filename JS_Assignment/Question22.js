//Question22
function countOccurrences(str,letter){
    let count = 0;
    for (let i of str){
        if (i===letter){
            count+=1;
        }
    }
    return count;
}
console.log(countOccurrences('microsoft.com', 'o'));
