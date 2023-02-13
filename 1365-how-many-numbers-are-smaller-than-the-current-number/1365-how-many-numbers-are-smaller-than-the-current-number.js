/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let i =0;
    let j=nums.length-1;
    let arr=[];
    let count=0;
    while(i<=nums.length-1){
        if(nums[i]>nums[j]){
            count++;
        }
        j--;
        if(j==-1){
            arr[i]=count;
            i++;
            j=nums.length-1;
            count=0;
        }
    }
    return arr;
};