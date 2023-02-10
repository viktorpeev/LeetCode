/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let nums2 = nums.join('').split('');
    return nums.reduce((a, b) => a + b, 0) - nums2.map(x => Number(x)).reduce((a, b) => a + b, 0);


};