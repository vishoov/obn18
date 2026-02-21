# JavaScript Question Bank for Junior Developers

> **Difficulty:** Mix (Beginner → Intermediate) | **Audience:** Bootcamp grads preparing for junior roles | **Format:** Mix (Short Answer, Code Snippets, Pseudo-code)

---

## Table of Contents

1. [Nested Loops](#1-nested-loops)
2. [Star Patterns](#2-star-patterns)
3. [Star Patterns Day 2](#3-star-patterns-day-2)
4. [2D Matrix](#4-2d-matrix)
5. [Nested Arrays and Strings](#5-nested-arrays-and-strings)
6. [Time Complexity](#6-time-complexity)
7. [Binary Search](#7-binary-search)
8. [Map and Set](#8-map-and-set)
9. [Recursion](#9-recursion)
10. [Basic Sorting](#10-basic-sorting)
11. [Merge Sort](#11-merge-sort)
12. [Quick Sort](#12-quick-sort)
13. [Callbacks and Higher-Order Functions](#13-callbacks-and-higher-order-functions)
14. [Map, Filter, and Reduce](#14-map-filter-and-reduce)

---

## 1. Nested Loops

### Q1 — What is the Output?

What does the following code print?

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
```

---

### Q2 — Counting Iterations

How many times will `console.log` execute in the following code?

```javascript
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log("hello");
  }
}
```

---

### Q3 — Spot the Bug

The developer wants to print all pairs `(i, j)` where `i` and `j` are NOT equal. What is wrong with this code? Write the fix.

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i = j) continue;
    console.log(i, j);
  }
}
```

---

### Q4 — Multiplication Table

Write a function `multiplicationTable(n)` that uses nested loops to print an `n x n` multiplication table to the console.

**Expected output for `n = 3`:**
```
1 2 3
2 4 6
3 6 9
```

---

### Q5 — Nested Loop with Label Break

What does the following code output? Explain why.

```javascript
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break outer;
    console.log(i, j);
  }
}
```

---

## 2. Star Patterns

### Q1 — Right Triangle

Write a function `rightTriangle(n)` that prints a right triangle of stars.

**Expected output for `n = 4`:**
```
*
**
***
****
```

---

### Q2 — Inverted Triangle

Write a function `invertedTriangle(n)` that prints an inverted right triangle.

**Expected output for `n = 4`:**
```
****
***
**
*
```

---

### Q3 — Hollow Square

Write a function `hollowSquare(n)` that prints a hollow square border of stars.

**Expected output for `n = 4`:**
```
****
*  *
*  *
****
```

---

### Q4 — Output Prediction

What does this code print? Explain the pattern.

```javascript
for (let i = 1; i <= 4; i++) {
  let spaces = " ".repeat(4 - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}
```

---

### Q5 — Diamond Pattern

Write a function `diamond(n)` that prints a diamond shape.

**Expected output for `n = 3`:**
```
  *
 ***
*****
 ***
  *
```

---

## 3. Star Patterns Day 2

### Q1 — Right-Aligned Triangle

Write a function `rightAlignedTriangle(n)` that prints a right-aligned star triangle.

**Expected output for `n = 4`:**
```
   *
  **
 ***
****
```

---

### Q2 — Number Pattern

What does this print? Explain the output.

```javascript
for (let i = 1; i <= 4; i++) {
  let output = "";
  for (let j = 1; j <= i; j++) {
    output += j + " ";
  }
  console.log(output.trim());
}
```

---

### Q3 — Alternating Pattern

Write a function `zigzag(n)` that prints alternating `*` and `O` per row.

**Expected output for `n = 4`:**
```
*O*O
O*O*
*O*O
O*O*
```

---

### Q4 — Staircase Pattern

Write a function `staircase(n)` that produces the following output.

**Expected output for `n = 4`:**
```
#
# #
# # #
# # # #
```

---

### Q5 — Butterfly Pattern

Write a function `butterfly(n)` that prints a butterfly pattern.

**Expected output for `n = 4`:**
```
*      *
**    **
***  ***
********
***  ***
**    **
*      *
```

---

## 4. 2D Matrix

### Q1 — Reading a 2D Array

What is the value logged by the following code?

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][2]);
```

---

### Q2 — Print a Matrix

Write a function `printMatrix(matrix)` that prints each row of a 2D array on a new line, with values separated by spaces.

---

### Q3 — Transpose a Matrix

Write a function `transpose(matrix)` that returns the transpose of a matrix (rows become columns).

```javascript
// Input:
// [[1, 2, 3],
//  [4, 5, 6]]
//
// Output:
// [[1, 4],
//  [2, 5],
//  [3, 6]]
```

---

### Q4 — Sum of Main Diagonal

Write a function `diagonalSum(matrix)` that returns the sum of the main diagonal elements of a square matrix.

```javascript
// Example:
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]  => ?
```

---

### Q5 — Rotate Matrix 90° Clockwise

Write a function `rotate90(matrix)` that rotates an `n×n` matrix 90 degrees clockwise.

```javascript
// Input:          Output:
// [1, 2, 3]       [7, 4, 1]
// [4, 5, 6]  =>   [8, 5, 2]
// [7, 8, 9]       [9, 6, 3]
```

---

## 5. Nested Arrays and Strings

### Q1 — Flatten One Level

What is the output of the following code? What would you use to flatten more than one level deep?

```javascript
const arr = [[1, 2], [3, 4], [5, 6]];
const flat = [].concat(...arr);
console.log(flat);
```

---

### Q2 — Accessing Nested Values

What is logged and why?

```javascript
const data = [
  ["Alice", ["math", "science"]],
  ["Bob",   ["history", "art"]]
];

console.log(data[1][1][0]);
```

---

### Q3 — Flatten and Join

Write a function `flatJoin(arr)` that takes a nested array of words and returns them as a single comma-separated string.

```javascript
// Input:  [["hello", "world"], ["foo", "bar"]]
// Output: "hello,world,foo,bar"
```

---

### Q4 — String to Nested Array

Write a function `wordChars(sentence)` that takes a sentence string and returns an array where each element is an array of characters of that word.

```javascript
// Input:  "hello world"
// Output: [["h","e","l","l","o"], ["w","o","r","l","d"]]
```

---

### Q5 — Optional Chaining in Nested Access

What is the output of the following code? Explain why optional chaining is useful here.

```javascript
const users = [
  { name: "Alice", address: { city: "Delhi" } },
  { name: "Bob" }
];

console.log(users[0]?.address?.city);
console.log(users[1]?.address?.city);
```

---

## 6. Time Complexity

### Q1 — Linear Time

What is the time complexity of the following function? Explain your reasoning.

```javascript
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

---

### Q2 — Quadratic Time

What is the time complexity of this code? Justify your answer.

```javascript
function pairs(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}
```

---

### Q3 — Match the Complexity

Match each code snippet with its time complexity: O(1), O(n), O(n²), O(log n).

```javascript
// A
console.log(arr[0]);

// B
arr.forEach(x => console.log(x));

// C
for (let i = 0; i < arr.length; i++)
  for (let j = 0; j < arr.length; j++)
    console.log(i, j);

// D
function log(n) {
  while (n > 1) { n = Math.floor(n / 2); }
}
```

---

### Q4 — Space Complexity

What is the **space complexity** of the following function and why?

```javascript
function doubleArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * 2);
  }
  return result;
}
```

---

### Q5 — Time-Space Tradeoff

Compare the two solutions below. Which is more efficient? Analyze both the time and space complexity of each.

```javascript
// Solution A
function hasDuplicateA(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

// Solution B
function hasDuplicateB(arr) {
  const seen = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) return true;
    seen.add(arr[i]);
  }
  return false;
}
```

---

## 7. Binary Search

### Q1 — Prerequisite Concept

Binary search requires the array to be ______. What is the time complexity of binary search, and why?

---

### Q2 — Trace Through

Trace through a binary search for target `7` in the array `[1, 3, 5, 7, 9, 11, 13]`. Show each step with left, right, and mid values.

---

### Q3 — Implement Binary Search

Implement an iterative `binarySearch(arr, target)` function that returns the index of the target, or `-1` if not found.

---

### Q4 — Off-By-One Bug

The following binary search has subtle bugs. Identify and fix them.

```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length; // Bug?

  while (left < right) {  // Bug?
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid;
  }
  return -1;
}
```

---

### Q5 — First Occurrence

Modify binary search to return the **first** occurrence of a target in an array that may contain duplicates.

```javascript
// Input: arr = [1, 2, 2, 2, 3, 4], target = 2
// Output: 1  (first index of 2)
```

---

## 8. Map and Set

### Q1 — Map vs Object

What are two key differences between a JavaScript `Map` and a plain object `{}`?

---

### Q2 — Set Uniqueness

What does the following code output and why?

```javascript
const s = new Set([1, 2, 2, 3, 3, 3, 4]);
console.log(s.size);
console.log([...s]);
```

---

### Q3 — Map Methods — Word Count

Write a function `wordCount(str)` that uses a `Map` to count occurrences of each word.

```javascript
// Input:  "the cat sat on the mat the cat"
// Output: Map { 'the' => 3, 'cat' => 2, 'sat' => 1, 'on' => 1, 'mat' => 1 }
```

---

### Q4 — Set for Intersection

Using `Set`, write a function `intersection(a, b)` that returns an array of elements present in **both** arrays.

```javascript
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]
```

---

### Q5 — Tricky Map Reference

What is logged and why?

```javascript
const map = new Map();
const key = { id: 1 };

map.set(key, "Alice");
console.log(map.get({ id: 1 }));  // Line A
console.log(map.get(key));         // Line B
```

---

## 9. Recursion

### Q1 — What is Recursion?

Explain what recursion is and name the two essential components every recursive function must have.

---

### Q2 — Factorial

Write a recursive function `factorial(n)` that returns `n!`.

```javascript
// factorial(5) => 120
// factorial(0) => 1
```

---

### Q3 — Fibonacci

Write a recursive function `fibonacci(n)` that returns the nth Fibonacci number.

```javascript
// fibonacci(6) => 8
// Sequence: 0, 1, 1, 2, 3, 5, 8, ...
```

---

### Q4 — Trace the Call Stack

Trace through `sumArray([1, 2, 3, 4])` step by step:

```javascript
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
```

---

### Q5 — Flatten Nested Array Recursively

Write a recursive function `flattenDeep(arr)` that flattens a deeply nested array.

```javascript
// Input:  [1, [2, [3, [4]], 5]]
// Output: [1, 2, 3, 4, 5]
```

---

## 10. Basic Sorting

### Q1 — Bubble Sort Concept

Explain how Bubble Sort works in plain English and state its time complexity.

---

### Q2 — Implement Bubble Sort

Implement the `bubbleSort(arr)` function.

---

### Q3 — Selection Sort

Implement `selectionSort(arr)`. How does it differ from Bubble Sort?

---

### Q4 — Insertion Sort

Implement `insertionSort(arr)` and explain when it performs best.

---

### Q5 — The Default `.sort()` Trap

A developer uses JavaScript's built-in `.sort()` without a comparator to sort numbers. What's the problem? How do you fix it?

```javascript
const nums = [10, 9, 2, 21, 3];
nums.sort();
console.log(nums);
```

---

## 11. Merge Sort

### Q1 — Concept

Describe how Merge Sort works using the divide-and-conquer strategy. What is its time complexity and space complexity?

---

### Q2 — The Merge Step

Implement the `merge(left, right)` helper that merges two **sorted** arrays into one sorted array.

```javascript
// merge([1,3,5], [2,4,6]) => [1,2,3,4,5,6]
```

---

### Q3 — Full Merge Sort

Using the `merge` helper from Q2, implement the full `mergeSort(arr)` function.

---

### Q4 — Trace Through

Trace the `mergeSort` execution for `[38, 27, 43, 3]`. Show the recursive splitting and merging steps.

---

### Q5 — Merge Sort vs Quick Sort

What are the key differences between Merge Sort and Quick Sort? When would you prefer each?

---

## 12. Quick Sort

### Q1 — Concept

Explain the Quick Sort algorithm. What is a "pivot" and what role does it play?

---

### Q2 — Partition Function

Implement the `partition(arr, low, high)` function using the **last element** as the pivot (Lomuto partition scheme).

---

### Q3 — Full Quick Sort

Using the `partition` function from Q2, implement `quickSort(arr, low, high)`.

---

### Q4 — Worst Case Scenario

For what type of input does Quick Sort perform worst with a "last element as pivot" strategy? How can this be mitigated?

---

### Q5 — Lomuto vs Hoare Partition

Explain the key differences between the Lomuto partition scheme and Hoare's partition scheme. Which performs fewer swaps on average?

---

## 13. Callbacks and Higher-Order Functions

### Q1 — What is a Callback?

What is a callback function? Provide a simple example demonstrating how a callback is passed and invoked.

---

### Q2 — Higher-Order Functions

What is a Higher-Order Function (HOF)? Identify which function is a HOF and which is a callback in this example:

```javascript
function applyTwice(fn, value) {
  return fn(fn(value));
}

const double = x => x * 2;
console.log(applyTwice(double, 3));
```

---

### Q3 — Closures and Returned Functions

What is the output and why?

```javascript
function outer(x) {
  return function inner(y) {
    return x + y;
  };
}

const add5 = outer(5);
console.log(add5(3));
console.log(add5(10));
```

---

### Q4 — Custom forEach

Implement your own `myForEach(arr, callback)` that mimics `Array.prototype.forEach`. The callback should receive the element, index, and original array.

---

### Q5 — Asynchronous Callback

What is the output and in what order? Explain why.

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timer done");
}, 0);

console.log("End");
```

---

## 14. Map, Filter, and Reduce

### Q1 — Map Basics

What does `Array.prototype.map` do? What does the following return?

```javascript
const nums = [1, 2, 3, 4, 5];
const squared = nums.map(n => n * n);
console.log(squared);
console.log(nums);
```

---

### Q2 — Filter Basics

What does `Array.prototype.filter` return? What does this code produce?

```javascript
const words = ["apple", "banana", "kiwi", "mango", "fig"];
const longWords = words.filter(w => w.length > 4);
console.log(longWords);
```

---

### Q3 — Reduce Basics

Explain what `reduce` does, then trace through this example step by step:

```javascript
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
```

---

### Q4 — Method Chaining

Given the following array, use `filter` + `map` chaining to get the names of students who scored **above 70**.

```javascript
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob",   score: 60 },
  { name: "Carol", score: 92 },
  { name: "Dave",  score: 70 },
];
```

---

### Q5 — Reduce to an Object

Use `reduce` to group the following orders by category and count how many are in each.

```javascript
const orders = [
  { id: 1, category: "food" },
  { id: 2, category: "tech" },
  { id: 3, category: "food" },
  { id: 4, category: "clothes" },
  { id: 5, category: "tech" },
  { id: 6, category: "tech" },
];
// Expected: { food: 2, tech: 3, clothes: 1 }
```

