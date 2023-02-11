function arithmeticTriplets(nums: number[], diff: number): number {
    let i = 0;
    let j = 1;
    let k;
    let count = 0;
    while (i <= nums.length - 1) {
        if (nums[j] - nums[i] == diff) {
            k = j + 1;
            while (k <= nums.length - 1) {
                if (nums[k] - nums[j] == diff) {
                    count++;
                }
                k++;
            }
        }
        j++;
        if (j > nums.length - 1) {
            i++;
            j = i + 1;
        }
    }
    return count;
};