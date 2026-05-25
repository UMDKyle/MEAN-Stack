//Question2:
function checkPalindrome(str){
    let l = 0;
    let r = str.length -1;
    while (r>l){
        while(r>l && str[l]===' '){
            l++;
        }
        while(r>l && str[r]===' '){
            r--;
        }
        if (str[l]===str[r]){
            l++;
            r--;
        }
        else{
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("nurses run"));
