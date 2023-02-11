function containsDuplicate(nums: number[]): boolean {
    let hash =[];
    for(let i=0;i<=nums.length-1;i++){
        if(!hash[nums[i]]){
            hash[nums[i]]=true;
        }
        else{
            return true;
        }
    }
    return false;
};