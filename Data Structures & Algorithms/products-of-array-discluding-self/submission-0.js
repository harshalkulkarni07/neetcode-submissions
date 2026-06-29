class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length;
        let res = new Array(n).fill(1);

        // Step 1: prefix products
        let prefix = 1;
        for (let i = 0; i < n; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }

        // Step 2: suffix products
        let suffix = 1;
        for (let i = n - 1; i >= 0; i--) {
            res[i] *= suffix;
            suffix *= nums[i];
        }

        return res;
    }
    
}
