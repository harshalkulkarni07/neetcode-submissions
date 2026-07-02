class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let left = 0;
        let right = nums.length;
        let res = [];
        nums.sort((a, b) => a - b);
        for(let i=0;i<nums.length;i++)
        {
            if (i > 0 && nums[i] === nums[i - 1]) continue;
            left = i+1;
            right = nums.length - 1;
            while(left < right){
                let sum = nums[i]+nums[left]+nums[right];
                if(sum == 0){
                    res.push([nums[i],nums[left],nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) left++; 
                    while (left < right && nums[right] === nums[right - 1]) right--; 
                    left++; 
                    right--;
                }else if(sum > 0){
                    right--;
                }else{
                    left++;
                }
            }
        }
        return res;
    }
}
