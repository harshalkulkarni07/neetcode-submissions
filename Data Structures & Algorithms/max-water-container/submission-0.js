class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1;
        let max = 0;
        while(left<right){
            let hd = Math.min(heights[right],heights[left]);      
            let cv = hd*(right-left);
            max = Math.max(cv,max);
            if(heights[right]>heights[left]){
                left++
            }else{
                right--;
            }
        }
        return max;
    }
}
