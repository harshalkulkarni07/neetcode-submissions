class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let i=0;i<nums.length;i++){
            let secondNum = target - nums[i];
            if(map.has(secondNum)){
                return [map.get(secondNum),i]
            }else{
                map.set(nums[i],i)
            }
        }
    }
}
