
---

# 📚 PART A: Theory & Output Questions (5 Questions)

## Question 21: Hoisting & Scope Chain (Advanced Theory)

### a) What will be the output?

```javascript
console.log(x)
console.log(y)
var x = 5
let y = 10
```

### b) What's the output?

```javascript
function test() {
    console.log(a)
    console.log(b)
    var a = 10
    let b = 20
}
test()
```

### c) What will this print?

```javascript
let x = 10
function outer() {
    let x = 20
    function inner() {
        let x = 30
        console.log(x)
    }
    inner()
    console.log(x)
}
outer()
console.log(x)
```

---

## Question 22: Array Methods & Mutation (Advanced Theory)

### a) What will be the output?

```javascript
let arr1 = [1, 2, 3]
let arr2 = arr1
arr2.push(4)
console.log(arr1)
console.log(arr2)
console.log(arr1 === arr2)
```

### b) What's the output?

```javascript
let nums = [5, 2, 8, 1, 9]
console.log(nums.sort())
console.log(nums)
```

### c) What will this print?

```javascript
let arr = [1, 2, 3, 4, 5]
let result = arr.slice(1, 4)
console.log(result)
console.log(arr)
```

---

## Question 23: String Manipulation Output (Advanced Theory)

### a) What will be printed?

```javascript
let str = "  Hello World  "
console.log(str.trim().length)
console.log(str.length)
```

### b) What's the output?

```javascript
let text = "apple,banana,mango"
let fruits = text.split(",")
console.log(fruits[1])
console.log(fruits.join("-"))
```

### c) What will this print?

```javascript
let name = "JavaScript"
console.log(name.slice(0, 4))
console.log(name.slice(-6))
console.log(name.substring(4, 10))
```

---

## Question 24: Objects & References (Advanced Theory)

### a) What will be the output?

```javascript
let obj1 = {name: "Ram", age: 20}
let obj2 = obj1
obj2.age = 25
console.log(obj1.age)
console.log(obj2.age)
```

### b) What's the output?

```javascript
let person = {
    name: "Sita",
    marks: {
        math: 90,
        science: 85
    }
}
console.log(person.marks.math)
console.log(person["marks"]["science"])
```

### c) What will this print?

```javascript
let user = {name: "Krishna"}
delete user.name
console.log(user.name)
console.log(user)
```

---

## Question 25: Function Scope & Return (Advanced Theory)

### a) What will be printed?

```javascript
function multiply(a, b) {
    return a * b
    console.log("After return")
}
let result = multiply(5, 3)
console.log(result)
```

### b) What's the output?

```javascript
function greet(name) {
    if(!name) {
        return "Hello Guest"
    }
    return "Hello " + name
}
console.log(greet())
console.log(greet("Ram"))
```

### c) What will this print?

```javascript
let count = 0
function increment() {
    count++
}
increment()
increment()
console.log(count)
```

---

# 💻 PART B: Coding Problems (15 Questions)

## 🟢 EASY PROBLEMS (5 Questions)

### Problem 26: Factorial Calculator

**Difficulty:** Easy  
**Topics:** Loops, arithmetic  

Write a function that calculates the factorial of a number.  
Factorial of n (n!) = n × (n−1) × (n−2) × ... × 1  
Example: 5! = 5 × 4 × 3 × 2 × 1 = 120

#### Test Cases:

| Input | Output |
|-------|--------|
| 5     | 120    |
| 0     | 1      |
| 1     | 1      |
| 7     | 5040   |

**Hint:** Use a loop starting from n down to 1.

---

### Problem 27: Remove Duplicates from Array

**Difficulty:** Easy  
**Topics:** Arrays, loops, conditionals  

Given an array, return a new array with duplicate values removed.

#### Test Cases:

| Input                  | Output          |
|------------------------|-----------------|
| [1, 2, 2, 3, 4, 4, 5]  | [1, 2, 3, 4, 5] |
| [5, 5, 5, 5]           | [5]             |
| [1, 2, 3]              | [1, 2, 3]       |
| []                     | []              |

**Hint:** Use a new array and check if element already exists before adding.

---

### Problem 28: Title Case Converter

**Difficulty:** Easy  
**Topics:** Strings, loops, arrays  

Convert a sentence to title case (first letter of each word capitalized).

#### Test Cases:

| Input                      | Output                   |
|----------------------------|--------------------------|
| "hello world"              | "Hello World"            |
| "javaScript is awesome"    | "Javascript Is Awesome"  |
| "the quick brown fox"      | "The Quick Brown Fox"    |

**Hint:** Split into words, capitalize first letter of each, join back.

---

### Problem 29: Find Second Largest Number

**Difficulty:** Easy  
**Topics:** Arrays, loops, conditionals  

Find the second largest number in an array.

#### Test Cases:

| Input                 | Output |
|-----------------------|--------|
| [10, 5, 20, 8, 15]    | 15     |
| [1, 2, 3, 4, 5]       | 4      |
| [100, 200]            | 100    |
| [50, 50, 40]          | 40     |

**Hint:** Find max, then find max excluding the first max.

---

### Problem 30: Count Character Frequency

**Difficulty:** Easy  
**Topics:** Strings, objects, loops  

Count how many times each character appears in a string.

#### Test Cases:

| Input  | Output                  |
|--------|-------------------------|
| "hello" | {h:1, e:1, l:2, o:1}   |
| "aaa"  | {a:3}                   |
| "abba" | {a:2, b:2}              |

**Hint:** Use an object to store counts, loop through string.

---

## 🟡 MEDIUM PROBLEMS (5 Questions)

### Problem 31: Anagram Checker

**Difficulty:** Medium  
**Topics:** Strings, arrays, sorting  

Check if two strings are anagrams (contain same letters in different order).  
Ignore spaces and case.

#### Test Cases:

| Input 1              | Input 2        | Output |
|----------------------|----------------|--------|
| "listen"             | "silent"       | true   |
| "hello"              | "world"        | false  |
| "A gentleman"        | "Elegant man"  | true   |
| "rat"                | "car"          | false  |

**Hint:** Convert to lowercase, remove spaces, sort characters, compare.

---

### Problem 32: Array Chunk

**Difficulty:** Medium  
**Topics:** Arrays, loops  

Split an array into chunks of specified size.

#### Test Cases:

| Input                    | Size | Output                    |
|--------------------------|------|---------------------------|
| [1,2,3,4,5,6,7]         | 3    | [[1,2,3], [4,5,6], [7]]   |
| [1,2,3,4,5]             | 2    | [[1,2], [3,4], [5]]       |
| [1,2,3]                 | 5    | [[1,2,3]]                 |

**Hint:** Use nested array, push elements in groups.

---

### Problem 33: Caesar Cipher Encoder

**Difficulty:** Medium  
**Topics:** Strings, loops, ASCII  

Implement Caesar Cipher: shift each letter by n positions in alphabet.  
Example: "abc" with shift 1 → "bcd"

#### Test Cases:

| Text      | Shift | Output |
|-----------|-------|--------|
| "abc"     | 1     | "bcd"  |
| "xyz"     | 3     | "abc"  |
| "Hello"   | 2     | "Jgnnq" |

**Hint:** Use `charCodeAt()` and `fromCharCode()`, handle wraparound (z→a).

---

### Problem 34: Merge Two Sorted Arrays

**Difficulty:** Medium  
**Topics:** Arrays, loops, logic  

Merge two sorted arrays into one sorted array (without using sort method).

#### Test Cases:

| Array 1        | Array 2       | Output              |
|----------------|---------------|---------------------|
| [1,3,5]        | [2,4,6]       | [1,2,3,4,5,6]       |
| [1,2,3]        | [4,5,6]       | [1,2,3,4,5,6]       |
| [5,10,15]      | [3,8,12]      | [3,5,8,10,12,15]    |

**Hint:** Use two pointers, compare elements, add smaller one first.

---

### Problem 35: Roman Numeral Converter

**Difficulty:** Medium  
**Topics:** Objects, loops, conditionals  

Convert decimal numbers (1−100) to Roman numerals.  
I=1, V=5, X=10, L=50, C=100

#### Test Cases:

| Input | Output  |
|-------|---------|
| 4     | "IV"    |
| 9     | "IX"    |
| 58    | "LVIII" |
| 94    | "XCIV"  |

**Hint:** Use object with values {100:'C', 90:'XC', 50:'L'...}, loop from largest.

---

## 🔴 HARD PROBLEMS (5 Questions)

### Problem 36: Sudoku Validator (Single Row)

**Difficulty:** Hard  
**Topics:** Arrays, loops, validation  

Validate if a Sudoku row/array is valid (contains digits 1−9 without repetition).

#### Test Cases:

| Input                        | Output                    |
|------------------------------|---------------------------|
| [1,2,3,4,5,6,7,8,9]         | Valid                     |
| [1,2,3,4,5,6,7,8,1]         | Invalid - Duplicate       |
| [1,2,3,4,5,6,7,8,0]         | Invalid - Contains 0      |
| [1,2,3,4,5,6,7,8]           | Invalid - Missing digit   |

**Extension:** Validate entire 9×9 grid with rows and columns.

---

### Problem 37: JSON to Table Converter

**Difficulty:** Hard  
**Topics:** Objects, arrays, nested loops  

Convert array of objects to formatted table string.

```javascript
[
    {name: "Ram", age: 20, city: "Delhi"},
    {name: "Sita", age: 22, city: "Mumbai"}
]
```

**Expected Output:**

```
| name | age | city   |
|------|-----|--------|
| Ram  | 20  | Delhi  |
| Sita | 22  | Mumbai |
```

#### Test Cases:

| Input            | Output             |
|------------------|--------------------|
| Above array      | Formatted table    |
| [{id:1}, {id:2}] | Table with id column |

**Hint:** Extract keys for headers, format with proper spacing.

---

### Problem 38: Binary Search Implementation

**Difficulty:** Hard  
**Topics:** Arrays, loops, algorithms  

Implement binary search on a sorted array (returns index or -1).  
Must be more efficient than linear search.

#### Test Cases:

| Array           | Target | Output |
|-----------------|--------|--------|
| [1,3,5,7,9,11]  | 7      | 3      |
| [2,4,6,8,10]    | 5      | -1     |
| [1,2,3,4,5]     | 1      | 0      |
| [10,20,30]      | 30     | 2      |

**Hint:** Start with middle, compare, narrow search range by half each time.

---

### Problem 39: Flatten Nested Array (Any Depth)

**Difficulty:** Hard  
**Topics:** Arrays, recursion/loops  

Flatten nested arrays of any depth without using `Array.flat()`.

#### Test Cases:

| Input                          | Output       |
|--------------------------------|--------------|
| [1, [2, 3], 4]                 | [1,2,3,4]    |
| [1, [2, [3, [4, 5]]]]          | [1,2,3,4,5]  |
| [[1], [[2]], [[[3]]]]          | [1,2,3]      |
| [1, 2, 3]                      | [1,2,3]      |

**Hint:** Check if element is array, if yes loop through it recursively.

---

### Problem 40: Mini Calculator Parser

**Difficulty:** Hard  
**Topics:** Strings, parsing, operators  

Parse and evaluate a string expression like "10 + 5 * 2".  
Support +, −, *, / with proper order of operations.

#### Test Cases:

| Input           | Output |
|-----------------|--------|
| "10 + 5"        | 15     |
| "10 + 5 * 2"    | 20     |
| "100 / 5 - 10"  | 10     |
| "2 * 3 + 4 * 5" | 26     |

**Hint:** Parse numbers and operators separately, handle * and / first, then + and −.

---
