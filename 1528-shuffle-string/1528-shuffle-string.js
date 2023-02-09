/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res=[];
    for(let i=0;i<=indices.length-1;i++){
        res[indices[i]]=s[i]
    }
    return res.join('')
};