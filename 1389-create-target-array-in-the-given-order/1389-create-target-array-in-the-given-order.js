/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let arr=[];
    for(let i=0;i<=nums.length-1;i++){
        arr.splice(index[i],0,nums[i])
    }
    return arr;
};