//Question1:
function reverseNumber(num){
    let res = num.toString().split('').reverse().join('');
    return res
}
console.log(reverseNumber(32243));

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

//Question3:
function allCombinations(str){
    let res = [];
    for (let i = 0; i<str.length; i++){
        for (let j = i; j< str.length; j++){
            res.push(str.slice(i,j+1));
        }
    }
    return res;
}
console.log(allCombinations("dog").join(", "));

//Question4:
function alphabeticalOrder(str){
    let res = str.split('').sort().join('');
    return res;
}
console.log(alphabeticalOrder('webmaster'));

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

//Question8:
function checkPrime(num){
    if(num<=1){
        return false;
    }
    for (let i =2;i<=Math.sqrt(num);i++){
        if (num%i===0){
            return false;
        }
    }
    return true;
}
console.log(checkPrime(97));

//Question9:
function getType(value) {
    return typeof value;
}
console.log(getType(function(){}));

//Question10:
function identityMatrix(n){
    let res = [];
    for (let i =0; i<n; i++){
        let row = [];
        for (let j = 0; j<n; j++){
            if(j===i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        res.push(row);
    }
    return res;
}
console.log(identityMatrix(3));

//Question11:
function secondMaxMin(arr){
    let max = -Infinity;
    let smax = -Infinity;
    let min = Infinity;
    let smin = Infinity;
    for (i =0; i< arr.length;i++){
        if (arr[i]>max){
            smax = max;
            max = arr[i];
        }
        else if (arr[i]>smax){
            smax = arr[i];
        }
        if (arr[i]<min){
            smin = min;
            min = arr[i];
        }
        else if (arr[i]<smin){
            smin = arr[i];
        }
    }
    return [smin,smax];
}
console.log(secondMaxMin([1,2,3,4,5]));

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

//Question13
function getFactors(num){
    let res = []
    for(let i=1; i<num+1;i++){
        if (num%i===0){
            res.push(i);
        }
    }
    return res;
}
console.log(getFactors(12));

//Question14
function amountTocoins(amount,coins){
    let cur = amount;
    let res = [];
    coins.sort((a,b)=>b-a);
    while (cur>0){
        let found = false;
        for(let i = 0; i<coins.length;i++){
            if (cur>=coins[i]){
                cur -= coins[i];
                res.push(coins[i]);
                found = true;
                break;
            }
        }
        if(!found){
            return [];
        }
    }
    return res;
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

//Question15
function getExponent(b,n){
    return b**n;
}
console.log(getExponent(2,3));

//Question16
function uniqueChar(str){
    let mySet = new Set();
    for (let i of str){
        mySet.add(i);
    }
    let res = [...mySet];
    return res.join('');
}
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

//Question17
function getOccurrences(str){
    let myMap = new Map();
    for (let i of str){
        if(myMap.has(i)){
            myMap.set(i,myMap.get(i)+1);
        }
        else{
            myMap.set(i,1);
        }
    }
    return myMap;
}
console.log(getOccurrences("test"));

//Question18
function binarySearch(arr,target){
    let l = 0;
    let r = arr.length-1;
    while (l<=r){
        let mid = Math.floor((r+l)/2);
        if (target===arr[mid]){
            return mid;
        }
        if (target>arr[mid]){
            l = mid+1;
        }
        if (target<arr[mid]){
            r = mid-1;
        }
    }
}
console.log(binarySearch([1,2,5,8,60,90],60));

//Question19
function filterLargerElement(arr,target){
    let res = arr.filter(n=>n>target);
    return res;
}
console.log(filterLargerElement([1, 5, 10, 20, 3],6));

//Question20
function generateID(l){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = [];
    while(l>0){
        let index = Math.floor(Math.random()*chars.length)
        res.push(chars[index]);
        l-=1;
    }
    return res.join('');
}
console.log(generateID(4));

//Question21
function getCombinations(arr,l){
    let result = [];
    let cur = [];
    function dfs(n){
        if (cur.length===l){
            result.push([...cur]);
            return;
        }
        for(let i=n;i<arr.length;i++){
            cur.push(arr[i]);
            dfs(i+1);
            cur.pop();
        }

    }
    dfs(0);
    return result;
}

console.log(getCombinations([1,2,3],2));

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

//Question23
function firstNotRepeat(str){
    let count = new Map();
    for(let i of str){
        if (count.has(i)){
            count.set(i,count.get(i)+1);
        }
        else{
            count.set(i,1);
        }
    }
    for(let i of str){
        if (count.get(i)===1){
            return i;
        }
    }
    console.log("every character has repeated");
}
console.log(firstNotRepeat('abacddbec'));

//Question24
function bubbleSort(arr){
    for(let i =0; i< arr.length-1; i++){
        for(let j = 0; j< arr.length-1-i; j++){
            if(arr[j]<arr[j+1]){
                let pre = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = pre;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//Question25
function longestCountry(countries){
    return countries.reduce((longest,country)=>{
        if(country.length>longest.length){
            return country;
        }
        else{
            return longest;
        }
    },'');
}
console.log(longestCountry((["Australia", "Germany", "United States of America"])));

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

//Question28
function greet(name){
    return "Hello, "+name;
}
function sayHello(fn,value){
    return fn(value);
}
console.log(sayHello(greet,"Kyle"));

//Question29
function getFunctionName(fn) {
    return fn.name;
}
console.log(getFunctionName(sayHello));