/*
Problem Explanation:
--------------------
Given two integer arrays nums1 and nums2, you need to find their intersection.
Intersection means the set of elements that appear in both arrays. Each element 
in the result must be unique (no duplicates), and the order does not matter.

Examples:
---------
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4] or [4,9]

Constraints:
------------
1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000

Solution:
---------
We want to find all unique elements that are present in both arrays.
The best way is to use sets, which automatically remove duplicates and allow fast
 lookup.

Steps:
1. Convert nums1 and nums2 to sets to remove duplicates.
2. For each element in one set, check if it exists in the other set.
3. Collect all such elements into the result array.

Code:
-----
*/

function intersection(nums1, nums2) {
  // Convert both arrays to sets to remove duplicates
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  // Create an array for the intersection
  const result = [];
  // Iterate through set1 and check if each element is in set2
  for (let num of set1) {
    if (set2.has(num)) {
      result.push(num);
    }
  }
  return result;
}

/*
Example Usage:
--------------
console.log(intersection([1,2,2,1], [2,2])); // Output: [2]
console.log(intersection([4,9,5], [9,4,9,8,4])); // Output: [4,9] or [9,4]

Explanation:
------------
- Sets remove duplicates, so [1,2,2,1] becomes {1,2} and [2,2] becomes {2}.
- Only 2 is present in both sets, so the result is [2].
- For the second example, {4,9,5} and {4,8,9} have 4 and 9 in common, so result is [4,9] or [9,4].

This approach is efficient and easy to understand.
*/
