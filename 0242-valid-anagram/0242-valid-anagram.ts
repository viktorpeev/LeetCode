function isAnagram(s: string, t: string): boolean {
    if(s.split('').sort().join('') == t.split('').sort().join('')){
        return true;
    }
    else return false
};