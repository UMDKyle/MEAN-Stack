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
