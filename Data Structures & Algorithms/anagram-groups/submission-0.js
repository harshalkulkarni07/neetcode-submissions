class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = new Map();
        let res = [];
        let nonAnagrams = [];
        for(let i=0; i<strs.length; i++){
            let sorted = strs[i].split('').sort().join('')
            if(hash.has(sorted)){
               hash.get(sorted).push(strs[i]);
            }else{
                hash.set(sorted,[strs[i]])
            }
        }
       return Array.from(hash.values())
    }
}
