//Question7:
function countVowels(str){
    let vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    let count = 0;
    for (let s of str){
        if(vowels.has(s)){
            count++;
        }
    }
    return count;
}
console.log(countVowels('The quick brown fox'));
