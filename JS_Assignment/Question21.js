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
