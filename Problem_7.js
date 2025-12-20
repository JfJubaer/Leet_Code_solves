/*
Problem: Intersection of Two Arrays II
--------------------------------------
Given two integer arrays nums1 and nums2, return an array of their intersection.
Each element in the result must appear as many times as it shows in both arrays.
You may return the result in any order.

Examples:
---------
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9] or [9,4]

Constraints:
------------
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

Solution:
---------
We need to count how many times each number appears in both arrays, and for each 
number, include it in the result as many times as it appears in both.

Steps:
1. Count the frequency of each number in nums1 using a map/object.
2. Iterate through nums2. For each number, if it exists in the map and the count is 
> 0, add it to the result and decrease the count.
3. Return the result array.

Code:
-----
*/

function intersect(nums1, nums2) {
  const count = {};
  const result = [];
  // Count frequency of each number in nums1
  for (let num of nums1) {
    count[num] = (count[num] || 0) + 1;
  }
  // For each number in nums2, if it exists in count, add to result and decrease count

  for (let num of nums2) {
    if (count[num] > 0) {
      result.push(num);
      count[num]--;
    }
  }
  return result;
}

/*
Example Usage:
--------------
console.log(intersect([1,2,2,1], [2,2])); // Output: [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // Output: [4,9] or [9,4]

Follow-up Discussion:
---------------------
1. If the arrays are already sorted, you can use two pointers to traverse both arrays 
efficiently.
2. If nums1 is much smaller than nums2, build the count map from the smaller array to 
save space.
3. If nums2 is stored on disk and memory is limited, process nums2 in chunks,
updating the result incrementally.
*/
