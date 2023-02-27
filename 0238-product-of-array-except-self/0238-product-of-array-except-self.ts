function productExceptSelf(nums: number[]): number[] {
    let pre = [];//[1]
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i - 1] === undefined) {
      pre[i] = nums[i]
    }
    else {
      pre[i] = pre[i - 1] * nums[i]
    }
  }
  let post = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i + 1] === undefined) {
      pre[i] = pre[i - 1];
      post = nums[i]
    }
    else {
      pre[i] = (pre[i - 1] === undefined ? 1 : pre[i - 1]) * post;
      post = post * nums[i]
    }
  }
  return pre;
};