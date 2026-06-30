class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""
        for(let i =0;i<strs.length;i++){
            let wLength = strs[i].length;
            res+=wLength+"#"+strs[i];
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j]!=="#"){
                j++
            }
            let len = Number(str.slice(i, j));
            let word = str.slice(j+1,j+1+len);
            res.push(word)
            i=j+1+len;
        }
        return res;
    }
}
