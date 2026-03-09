# JavaScript Medium-Level Interview Questions

## 1. E-commerce Product Management System

**Problem Statement**

You're building a product management system for an e-commerce platform. You have an array of product objects where each product has properties like `name`, `category`, `price`, `stock`, and `rating`.

Write a function `processProducts(products, filters)` that performs the following operations:

1. Filter products based on criteria:
   - Minimum price
   - Maximum price
   - Category
   - Minimum rating
   - In-stock only

2. Sort the filtered products by a specified field in ascending or descending order.

3. Return a new array with product names and their discounted prices:
   - 10% discount for `"electronics"`
   - 15% discount for `"clothing"`
   - 5% discount for all other categories

4. If no products match the filters, return an empty array with a message property indicating that no products were found.

**Input Example**

```js
const products = [
  { name: "Laptop", category: "electronics", price: 1200, stock: 5, rating: 4.5 },
  { name: "Headphones", category: "electronics", price: 150, stock: 0, rating: 4.2 },
  { name: "T-Shirt", category: "clothing", price: 25, stock: 50, rating: 4.0 },
  { name: "Jeans", category: "clothing", price: 60, stock: 30, rating: 4.7 },
  { name: "Coffee Maker", category: "home", price: 80, stock: 10, rating: 3.8 },
  { name: "Smartphone", category: "electronics", price: 800, stock: 15, rating: 4.8 },
  { name: "Sneakers", category: "clothing", price: 90, stock: 20, rating: 4.3 }
];

const filters = {
  minPrice: 50,
  maxPrice: 1000,
  category: null,     // null means all categories
  minRating: 4.0,
  inStockOnly: true,
  sortBy: "price",    // "price", "rating", "name"
  sortOrder: "desc"   // "asc" or "desc"
};
```

**Expected Output Shape**

```js
[
  {
    productName: "Smartphone",
    discountedPrice: 720,
    originalPrice: 800,
    savings: 80
  },
  // ...
]
```


## 2. Student Grade Management System

**Problem Statement**

You're building a student grade management system for a university. You have an array of student objects with properties: `name`, `rollNumber`, `marks`, `attendance`, and `department`.

Write a function `analyzeStudents(students, criteria)` that:

1. Filters students based on:
   - Minimum marks
   - Minimum attendance percentage
   - Department (or all departments if `null`)

2. Calculates grade for each student:
   - A: 90+
   - B: 80–89
   - C: 70–79
   - D: 60–69
   - F: <60

3. Sorts the selected students by marks in descending order.

4. Groups students by grade and returns a count for each grade.

5. Returns the top 3 students along with their calculated GPA (`marks / 10`).

**Input Example**

```js
const students = [
  { name: "Alice", rollNumber: 101, marks: 92, attendance: 95, department: "CS" },
  { name: "Bob", rollNumber: 102, marks: 78, attendance: 85, department: "CS" },
  { name: "Charlie", rollNumber: 103, marks: 65, attendance: 70, department: "ECE" },
  { name: "David", rollNumber: 104, marks: 88, attendance: 92, department: "CS" },
  { name: "Eva", rollNumber: 105, marks: 55, attendance: 60, department: "ME" },
  { name: "Frank", rollNumber: 106, marks: 91, attendance: 88, department: "ECE" },
  { name: "Grace", rollNumber: 107, marks: 82, attendance: 94, department: "CS" }
];

const criteria = {
  minMarks: 60,
  minAttendance: 75,
  department: "CS"    // null for all departments
};
```

**Expected Output Shape**

```js
{
  top3Students: [
    { name, rollNumber, marks, grade, gpa },
    // ...
  ],
  gradeDistribution: {
    A: number,
    B: number,
    C: number,
    D: number,
    F: number
  }
}
```


## 3. Employee Salary Analytics

**Problem Statement**

You're building an HR analytics dashboard. You have an array of employee objects with `name`, `department`, `salary`, and `experience`.

Write a function `analyzeEmployeeSalaries(employees)` that:

1. Groups employees by department.

2. For each department, calculates:
   - Average salary
   - Total payroll
   - Highest-paid employee (name and salary)
   - Lowest-paid employee (name and salary)
   - Employee count

3. Returns an array of department-level summaries.

4. Sorts this array by average salary in descending order.

**Input Example**

```js
const employees = [
  { name: "John",  department: "Engineering", salary: 95000,  experience: 5 },
  { name: "Sarah", department: "Engineering", salary: 120000, experience: 8 },
  { name: "Mike",  department: "Sales",       salary: 70000,  experience: 3 },
  { name: "Emily", department: "Sales",       salary: 85000,  experience: 6 },
  { name: "David", department: "Engineering", salary: 105000, experience: 7 },
  { name: "Lisa",  department: "HR",          salary: 65000,  experience: 4 },
  { name: "Tom",   department: "HR",          salary: 75000,  experience: 5 },
  { name: "Anna",  department: "Sales",       salary: 90000,  experience: 7 }
];
```

**Expected Output Shape**

```js
[
  {
    department: "Engineering",
    avgSalary: 106667,
    totalPayroll: 320000,
    highestPaid: { name: "Sarah", salary: 120000 },
    lowestPaid:  { name: "John",  salary: 95000 },
    employeeCount: 3
  },
  // ...
]
```


## 4. Movie Database Search & Filter

**Problem Statement**

You're building a movie search feature for a streaming platform. Each movie has `title`, `genre`, `rating`, `year`, and `runtime`.

Write a function `searchMovies(movies, options)` that:

1. Searches movies by title:
   - Case-insensitive
   - Partial matches allowed

2. Filters by:
   - Genre (or all if `null`)
   - Minimum rating
   - Release year range (`yearFrom` to `yearTo`)

3. Sorts by a specified field (`rating`, `year`, or `title`) and order (`asc` or `desc`).

4. Supports pagination:
   - `page` (1-based)
   - `pageSize`

5. Returns:
   - The paginated list of movies
   - Pagination metadata: total count, total pages, current page, hasNextPage, hasPreviousPage

**Input Example**

```js
const movies = [
  { title: "The Matrix",     genre: "Sci-Fi", rating: 8.7, year: 1999, runtime: 136 },
  { title: "Inception",      genre: "Sci-Fi", rating: 8.8, year: 2010, runtime: 148 },
  { title: "The Godfather",  genre: "Crime",  rating: 9.2, year: 1972, runtime: 175 },
  { title: "Pulp Fiction",   genre: "Crime",  rating: 8.9, year: 1994, runtime: 154 },
  { title: "The Dark Knight",genre: "Action", rating: 9.0, year: 2008, runtime: 152 },
  { title: "Interstellar",   genre: "Sci-Fi", rating: 8.6, year: 2014, runtime: 169 },
  { title: "Fight Club",     genre: "Drama",  rating: 8.8, year: 1999, runtime: 139 }
];

const options = {
  searchTerm: "the",
  genre: null,          // null for all genres
  minRating: 8.7,
  yearFrom: 1990,
  yearTo: 2015,
  sortBy: "rating",     // "rating", "year", "title"
  sortOrder: "desc",    // "asc" or "desc"
  page: 1,
  pageSize: 3
};
```

**Expected Output Shape**

```js
{
  movies: [
    { title, genre, rating, year, runtime },
    // ...
  ],
  pagination: {
    currentPage: number,
    pageSize: number,
    totalCount: number,
    totalPages: number,
    hasNextPage: boolean,
    hasPreviousPage: boolean
  }
}
```


## 5. Shopping Cart Calculation

**Problem Statement**

You're building a shopping cart system with discounts and taxes.

Write a function `calculateCart(cartItems, discounts, taxRate, couponCode)` that:

1. Calculates **subtotal** for each item (`price × quantity`).

2. Applies **category-based discounts** using a discounts configuration object.

3. Applies a **coupon code** (if applicable) on the total after category discounts.

4. Calculates **tax** on the discounted total.

5. Returns:
   - A detailed breakdown per item
   - A summary object containing totals and savings

**Input Example**

```js
const cartItems = [
  { id: 1, name: "Laptop",   price: 1000, quantity: 1, category: "electronics" },
  { id: 2, name: "Mouse",    price: 25,   quantity: 2, category: "electronics" },
  { id: 3, name: "T-Shirt",  price: 20,   quantity: 3, category: "clothing" },
  { id: 4, name: "Book",     price: 15,   quantity: 2, category: "books" }
];

const discounts = {
  electronics: 0.10,    // 10% off
  clothing: 0.15,       // 15% off
  books: 0.05           // 5% off
};

const taxRate = 0.08;   // 8% tax
const couponCode = "SAVE20"; // Example coupon
```

**Expected Output Shape**

```js
{
  items: [
    {
      id,
      name,
      price,
      quantity,
      category,
      subtotal,         // price * quantity
      discount,         // discount amount
      discountedPrice   // subtotal - discount
    },
    // ...
  ],
  summary: {
    subtotal: number,           // total before any discounts
    categoryDiscounts: number,  // sum of all category discounts
    couponDiscount: number,     // discount from coupon
    priceBeforeTax: number,     // after all discounts, before tax
    tax: number,                // tax amount
    finalTotal: number,         // final payable amount
    totalSavings: number        // total discount (category + coupon)
  }
}
```


## 6. Social Media Post Analytics

**Problem Statement**

You're building analytics for a social media platform. Each post has `id`, `type`, `views`, `likes`, `comments`, `shares`, and `date`.

Write a function `analyzePostEngagement(posts, dateRange)` that:

1. Filters posts within a given date range (`from`, `to`).

2. For each post, calculates **engagement rate**:
   - (likes + comments + shares) / views × 100

3. Categorizes each post by engagement:
   - High: > 5%
   - Medium: 2–5%
   - Low: < 2%

4. Finds the **top 5 posts** by engagement rate.

5. Calculates **average engagement rate per post type** (`text`, `image`, `video`, etc.).

6. Returns:
   - Top 5 posts with engagement info
   - Engagement stats grouped by type
   - Total number of posts considered

**Input Example**

```js
const posts = [
  { id: 1, type: "image", views: 1000, likes: 80,  comments: 20, shares: 10, date: "2026-01-01" },
  { id: 2, type: "video", views: 5000, likes: 300, comments: 50, shares: 40, date: "2026-01-02" },
  { id: 3, type: "text",  views: 500,  likes: 15, comments: 5,  shares: 2,  date: "2026-01-03" },
  { id: 4, type: "image", views: 2000, likes: 150, comments: 30, shares: 20, date: "2026-01-04" },
  { id: 5, type: "video", views: 8000, likes: 400, comments: 80, shares: 60, date: "2026-01-05" }
];

const dateRange = {
  from: "2026-01-01",
  to:   "2026-01-05"
};
```

**Expected Output Shape**

```js
{
  top5Posts: [
    {
      id,
      type,
      engagementRate,
      engagementCategory // "High" | "Medium" | "Low"
    },
    // ...
  ],
  engagementByType: [
    {
      type,
      avgEngagement,  // average engagement rate %
      postCount
    },
    // ...
  ],
  totalPosts: number
}
```