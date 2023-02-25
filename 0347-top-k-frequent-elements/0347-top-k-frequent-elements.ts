function topKFrequent(nums: number[], k: number): number[] {
    let map = {}
    nums.forEach(n => {
        const key = n;
        if (map[n]) {
            map[key] += 1;
        }
        else {
            map[key] = 1;
        }
    })
    let bucket = [];
    for (let i=0;i<=nums.length;i++) {
        bucket.push([]);
    }
    for(let key in map){
        let count=map[key];
        bucket[count].push(key);
    }
    let res=[];
    for( let i=bucket.length-1;i>=0;i--){
        if(bucket[i].length === 0){
            continue
        }
        else{
            res = [...res,...bucket[i]]
        }
    }
    return res.slice(0,k)
};
