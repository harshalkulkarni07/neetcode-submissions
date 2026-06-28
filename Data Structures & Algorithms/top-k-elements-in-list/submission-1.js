class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        let res = [];
        // Step 1: Count frequency
        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }
        
        // sort frequency and return last k elements
        let arr = []
        for(let [key,val] of map.entries()){
            arr.push([key,val])
        }

        arr.sort((a, b) => b[1] - a[1]);

        for (let i = 0; i < k; i++) {
            res.push(arr[i][0]);
        }
        return res;
    }
}
