/*
Add Two Promises
Easy

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number.
 The returned promise should resolve with the sum of the two numbers.

Examples:
Input:
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve
 with a value of 2 + 5 = 7.

Input:
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should 
resolve 
with a value of 10 + -12 = -2.

Problem Explanation:

You are given two promises that each resolve to a number. You need to return a new promise that resolves to the sum of
 the two numbers. You can use Promise.all to wait for both promises to resolve, then sum their results.

Solution:

Use Promise.all([promise1, promise2]) to wait for both promises to resolve.
Once both are resolved, sum the results and resolve the new promise with that sum.
Example usage is provided below.
*/

function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then(([a, b]) => a + b);
}

// Example usage:
const promise1a = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2a = new Promise((resolve) => setTimeout(() => resolve(5), 60));
addTwoPromises(promise1a, promise2a).then(console.log); // 7

const promise1b = new Promise((resolve) => setTimeout(() => resolve(10), 50));
const promise2b = new Promise((resolve) => setTimeout(() => resolve(-12), 30));
addTwoPromises(promise1b, promise2b).then(console.log); // -2
