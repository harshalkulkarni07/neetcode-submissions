class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let i=0; i< s.length; i++){
            if(s[i]=="{" || s[i]=="(" || s[i]=="["){
                stack.push(s[i])
            }else{
                if(s[i]==")"){
                    let c = stack.pop()
                    if(c!=='(') return false;
                }
                 if(s[i]=="]"){
                    let c = stack.pop()
                    if(c!=='[') return false;
                }
                 if(s[i]=="}"){
                    let c = stack.pop()
                    if(c!=='{') return false;
                }
            }
        }
        if(stack.length!=0)
            return false;
        return true;
    }
}
