function groupAnagrams(strs: string[]): string[][] {
    let map={};
    strs.forEach(s=>{
        const destr = s.split('').sort().join('');
        if(map[destr]){
            map[destr].push(s)
        }
        else{
            map[destr]=[s]
        }
    })
    
    return Object.values(map)
};