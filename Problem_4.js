/*
Problem Explanation:
--------------------
You are asked to implement a stack (LIFO: Last-In-First-Out) using only two queues (FIFO: 
First-In-First-Out).
You must support these stack operations:
  - push(x): Add x to the top of the stack
  - pop(): Remove and return the top element
  - top(): Return the top element without removing it
  - empty(): Return true if the stack is empty

Constraints:
  - Only standard queue operations are allowed: push to back, pop/peek from front, check size, check 
  empty
  - You may simulate a queue using arrays (lists) as long as you use only allowed operations

Example:
--------
MyStack myStack = new MyStack();
myStack.push(1);   // Stack: [1]
myStack.push(2);   // Stack: [1, 2]
myStack.top();     // Returns 2 (top of stack)
myStack.pop();     // Removes and returns 2, Stack: [1]
myStack.empty();   // Returns false
*/

// Solution: Implement MyStack using two queues
class MyStack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  // Push element x onto stack
  push(x) {
    // Always push to q2, then move all elements from q1 to q2
    this.q2.push(x);
    while (this.q1.length) {
      this.q2.push(this.q1.shift()); // Remove from front of q1, add to back of q2
    }
    // Swap q1 and q2 so q1 is always the main queue
    [this.q1, this.q2] = [this.q2, this.q1];
  }
  // Removes the element on top of the stack and returns it
  pop() {
    // Remove from front of q1 (top of stack)
    return this.q1.shift();
  }
  // Get the top element
  top() {
    // Peek at front of q1
    return this.q1[0];
  }
  // Returns whether the stack is empty
  empty() {
    return this.q1.length === 0;
  }
}

const stack = new MyStack();
stack.push(1); // q1: [1]
stack.push(2); // q2: [2], move 1 from q1 to q2 => q2: [2,1], swap => q1: [2,1]
stack.push(3); // q2: [3], move 2,1 from q1 to q2 => q2: [3,2,1], swap => q1: [3,2,1]
console.log(stack.top()); // 3 (front of q1)
console.log(stack.pop()); // 3 (removes front of q1, now q1: [2,1])
console.log(stack.top()); // 2
console.log(stack.empty()); // false
console.log(stack.pop()); // 2 (now q1: [1])
console.log(stack.pop()); // 1 (now q1: [])
console.log(stack.empty()); // true

/*
How does this work?
-------------------
The trick is to always keep the newest element at the front of q1.
When you push, you:
  1. Add the new element to q2
  2. Move all elements from q1 to q2 (so new element is at front)
  3. Swap q1 and q2
Now, q1's front is always the top of the stack!

Example Walkthrough:
--------------------
let stack = new MyStack();
stack.push(1); // q1: [1]
stack.push(2); // q2: [2], move 1 from q1 to q2 => q2: [2,1], swap => q1: [2,1]
stack.top();   // returns 2 (front of q1)
stack.pop();   // removes and returns 2, q1: [1]
stack.empty(); // returns false
*/
