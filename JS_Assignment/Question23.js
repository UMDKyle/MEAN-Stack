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
