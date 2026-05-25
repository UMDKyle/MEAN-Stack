//Question26
function longestSubString(str){
    let left = 0;
    let right = 0;
    let l = 0;
    let r = 0;
    let longest = 0;
    let cur = new Set();
    while(r<str.length){
        while(cur.has(str[r])){
            cur.delete(str[l]);
            l+=1;
        }
        cur.add(str[r]);
        if(cur.size>longest){
            longest =cur.size;
            left = l;
            right = r;
        }
        r+=1;
    }
    return str.slice(left,right+1);
}
console.log(longestSubString('abacddbec'));
