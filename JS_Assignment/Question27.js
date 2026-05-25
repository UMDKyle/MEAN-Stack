//Question27
function longestPalindrome(str){
    function expand(l,r){
        let start = 0;
        let longest = 0;
        while(l>=0 && r<str.length && str[l]===str[r]){
            start = l;
            longest = r-l;
            l-=1;
            r+=1;
        }
        return [start,longest];
    }
    let bestStart = 0;
    let bestLength = 0;
    for (let i = 0; i < str.length; i++) {
        let odd = expand(i, i);
        let even = expand(i, i + 1);

        let better = odd[1] > even[1] ? odd : even;

        if (better[1] > bestLength) {
            bestStart = better[0];
            bestLength = better[1];
        }
    }
    return str.slice(bestStart,bestStart+bestLength+1);
}
console.log(longestPalindrome("bananas"));
