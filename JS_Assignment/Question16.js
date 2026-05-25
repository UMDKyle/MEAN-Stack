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
