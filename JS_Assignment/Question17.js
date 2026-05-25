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
