/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let arr = [];
    let i = 0;
    let last = nums.length-1;
    while (i <= last) {
        arr = arr.concat(Array(nums[i]).fill(nums[i + 1]))
        i += 2;
    }
    return arr;
};