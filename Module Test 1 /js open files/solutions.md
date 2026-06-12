# JavaScript Medium-Level Interview Solutions

## 1. E-commerce Product Management System

```js
function processProducts(products, filters) {
  // Step 1: Filter products based on criteria
  let filteredProducts = products.filter(product => {
    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }
    if (filters.category !== null && product.category !== filters.category) {
      return false;
    }
    if (product.rating < filters.minRating) {
      return false;
    }
    if (filters.inStockOnly && product.stock === 0) {
      return false;
    }
    return true;
  });

  // If no products match, return a message + empty list
  if (filteredProducts.length === 0) {
    return {
      message: "No products match the specified filters",
      products: []
    };
  }

  // Step 2: Sort based on sortBy and sortOrder
  filteredProducts.sort((a, b) => {
    const field = filters.sortBy;
    let comparison;

    if (typeof a[field] === "string") {
      comparison = a[field].localeCompare(b[field]);
    } else {
      comparison = a[field] - b[field];
    }

    return filters.sortOrder === "asc" ? comparison : -comparison;
  });

  // Step 3: Map to discounted result
  const result = filteredProducts.map(product => {
    let discountRate;

    switch (product.category) {
      case "electronics":
        discountRate = 0.10;
        break;
      case "clothing":
        discountRate = 0.15;
        break;
      default:
        discountRate = 0.05;
    }

    const discountedPrice = product.price * (1 - discountRate);
    const savings = product.price * discountRate;

    return {
      productName: product.name,
      discountedPrice: Math.round(discountedPrice * 100) / 100,
      originalPrice: product.price,
      savings: Math.round(savings * 100) / 100
    };
  });

  return result;
}

// Test Case
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
  category: null,
  minRating: 4.0,
  inStockOnly: true,
  sortBy: "price",
  sortOrder: "desc"
};

console.log(processProducts(products, filters));
```

**Key Concepts**: Array.filter(), Array.sort(), Array.map(), ternary operators, switch statements, object property access

---

## 2. Student Grade Management System

```js
function analyzeStudents(students, criteria) {
  // Step 1: Filter students
  const filtered = students.filter(student => {
    if (student.marks < criteria.minMarks) return false;
    if (student.attendance < criteria.minAttendance) return false;
    if (criteria.department && student.department !== criteria.department) return false;
    return true;
  });

  // Step 2: Add grade and gpa
  const withGrades = filtered.map(student => {
    let grade;
    if (student.marks >= 90) grade = "A";
    else if (student.marks >= 80) grade = "B";
    else if (student.marks >= 70) grade = "C";
    else if (student.marks >= 60) grade = "D";
    else grade = "F";

    const gpa = Math.round((student.marks / 10) * 10) / 10;

    return {
      name: student.name,
      rollNumber: student.rollNumber,
      marks: student.marks,
      grade,
      gpa
    };
  });

  // Step 3: Sort by marks desc
  withGrades.sort((a, b) => b.marks - a.marks);

  // Step 4: Top 3 students
  const top3Students = withGrades.slice(0, 3);

  // Step 5: Grade distribution
  const gradeDistribution = { A: 0, B: 0, C: 0, D: 0, F: 0 };
  withGrades.forEach(student => {
    gradeDistribution[student.grade]++;
  });

  return { top3Students, gradeDistribution };
}

// Test Case
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
  department: "CS"
};

console.log(analyzeStudents(students, criteria));
```

**Key Concepts**: Conditional filtering, if-else chains, Array.slice(), object accumulation, forEach iteration

---

## 3. Employee Salary Analytics

```js
function analyzeEmployeeSalaries(employees) {
  // Step 1: Group by department
  const departmentMap = {};

  employees.forEach(emp => {
    if (!departmentMap[emp.department]) {
      departmentMap[emp.department] = [];
    }
    departmentMap[emp.department].push(emp);
  });

  // Step 2: Build department analytics
  const summaries = Object.keys(departmentMap).map(dept => {
    const list = departmentMap[dept];

    const totalPayroll = list.reduce((sum, emp) => sum + emp.salary, 0);
    const avgSalary = Math.round(totalPayroll / list.length);

    const sortedBySalary = [...list].sort((a, b) => b.salary - a.salary);
    const highest = sortedBySalary[0];
    const lowest = sortedBySalary[sortedBySalary.length - 1];

    return {
      department: dept,
      avgSalary,
      totalPayroll,
      highestPaid: { name: highest.name, salary: highest.salary },
      lowestPaid: { name: lowest.name, salary: lowest.salary },
      employeeCount: list.length
    };
  });

  // Step 3: Sort by avgSalary desc
  summaries.sort((a, b) => b.avgSalary - a.avgSalary);

  return summaries;
}

// Test Case
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

console.log(analyzeEmployeeSalaries(employees));
```

**Key Concepts**: Object.keys(), Array.reduce(), grouping data, spread operator for array copying, nested object creation

---

## 4. Movie Database Search & Filter

```js
function searchMovies(movies, options) {
  const {
    searchTerm,
    genre,
    minRating,
    yearFrom,
    yearTo,
    sortBy,
    sortOrder,
    page,
    pageSize
  } = options;

  // Step 1: Search by title
  let filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Step 2: Filter conditions
  filtered = filtered.filter(movie => {
    if (genre && movie.genre !== genre) return false;
    if (movie.rating < minRating) return false;
    if (movie.year < yearFrom || movie.year > yearTo) return false;
    return true;
  });

  // Step 3: Sort
  filtered.sort((a, b) => {
    let comparison;
    const field = sortBy;

    if (typeof a[field] === "string") {
      comparison = a[field].localeCompare(b[field]);
    } else {
      comparison = a[field] - b[field];
    }

    return sortOrder === "asc" ? comparison : -comparison;
  });

  // Step 4: Pagination
  const totalCount = filtered.length;
  const totalPages = Math.ceil(totalCount / pageSize);
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const pageMovies = filtered.slice(startIndex, endIndex);

  return {
    movies: pageMovies,
    pagination: {
      currentPage: page,
      pageSize,
      totalCount,
      totalPages,
      hasNextPage: page < totalPages,
      hasPreviousPage: page > 1
    }
  };
}

// Test Case
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
  genre: null,
  minRating: 8.7,
  yearFrom: 1990,
  yearTo: 2015,
  sortBy: "rating",
  sortOrder: "desc",
  page: 1,
  pageSize: 3
};

console.log(searchMovies(movies, options));
```

**Key Concepts**: Object destructuring, case-insensitive search, multiple filter chains, pagination logic, localeCompare()

---

## 5. Shopping Cart Calculation

```js
function calculateCart(cartItems, discounts, taxRate, couponCode) {
  // Step 1: Per-item subtotal and category discount
  const itemsWithCalc = cartItems.map(item => {
    const subtotal = item.price * item.quantity;
    const rate = discounts[item.category] || 0;
    const discountAmount = subtotal * rate;
    const discountedPrice = subtotal - discountAmount;

    return {
      ...item,
      subtotal: Math.round(subtotal * 100) / 100,
      discount: Math.round(discountAmount * 100) / 100,
      discountedPrice: Math.round(discountedPrice * 100) / 100
    };
  });

  // Step 2: Totals before coupon
  const subtotal = itemsWithCalc.reduce((sum, i) => sum + i.subtotal, 0);
  const categoryDiscounts = itemsWithCalc.reduce((sum, i) => sum + i.discount, 0);

  let priceAfterDiscounts = subtotal - categoryDiscounts;

  // Step 3: Coupon logic
  let couponDiscount = 0;
  if (couponCode === "SAVE20" && priceAfterDiscounts > 100) {
    couponDiscount = 20;
    priceAfterDiscounts -= couponDiscount;
  }

  // Step 4: Tax
  const tax = priceAfterDiscounts * taxRate;

  // Step 5: Final total
  const finalTotal = priceAfterDiscounts + tax;

  return {
    items: itemsWithCalc,
    summary: {
      subtotal: Math.round(subtotal * 100) / 100,
      categoryDiscounts: Math.round(categoryDiscounts * 100) / 100,
      couponDiscount: Math.round(couponDiscount * 100) / 100,
      priceBeforeTax: Math.round(priceAfterDiscounts * 100) / 100,
      tax: Math.round(tax * 100) / 100,
      finalTotal: Math.round(finalTotal * 100) / 100,
      totalSavings: Math.round((categoryDiscounts + couponDiscount) * 100) / 100
    }
  };
}

// Test Case
const cartItems = [
  { id: 1, name: "Laptop",   price: 1000, quantity: 1, category: "electronics" },
  { id: 2, name: "Mouse",    price: 25,   quantity: 2, category: "electronics" },
  { id: 3, name: "T-Shirt",  price: 20,   quantity: 3, category: "clothing" },
  { id: 4, name: "Book",     price: 15,   quantity: 2, category: "books" }
];

const discounts = {
  electronics: 0.10,
  clothing: 0.15,
  books: 0.05
};

const taxRate = 0.08;
const couponCode = "SAVE20";

console.log(calculateCart(cartItems, discounts, taxRate, couponCode));
```

**Key Concepts**: Spread operator, Array.reduce(), object property lookup with fallback, decimal rounding, conditional discounts

---

## 6. Social Media Post Analytics

```js
function analyzePostEngagement(posts, dateRange) {
  const fromDate = new Date(dateRange.from);
  const toDate = new Date(dateRange.to);

  // Step 1: Filter by date range
  const inRange = posts.filter(post => {
    const d = new Date(post.date);
    return d >= fromDate && d <= toDate;
  });

  // Step 2: Add engagementRate and category
  const withEngagement = inRange.map(post => {
    const totalEngagement = post.likes + post.comments + post.shares;
    const engagementRate = (totalEngagement / post.views) * 100;

    let engagementCategory;
    if (engagementRate > 5) engagementCategory = "High";
    else if (engagementRate >= 2) engagementCategory = "Medium";
    else engagementCategory = "Low";

    return {
      ...post,
      engagementRate: Math.round(engagementRate * 100) / 100,
      engagementCategory
    };
  });

  // Step 3: Top 5 by engagementRate
  const top5Posts = [...withEngagement]
    .sort((a, b) => b.engagementRate - a.engagementRate)
    .slice(0, 5)
    .map(post => ({
      id: post.id,
      type: post.type,
      engagementRate: post.engagementRate,
      engagementCategory: post.engagementCategory
    }));

  // Step 4: Average engagement by type
  const typeMap = {};
  withEngagement.forEach(post => {
    if (!typeMap[post.type]) {
      typeMap[post.type] = [];
    }
    typeMap[post.type].push(post.engagementRate);
  });

  const engagementByType = Object.keys(typeMap).map(type => {
    const rates = typeMap[type];
    const avg =
      rates.reduce((sum, rate) => sum + rate, 0) / rates.length;

    return {
      type,
      avgEngagement: Math.round(avg * 100) / 100,
      postCount: rates.length
    };
  });

  return {
    top5Posts,
    engagementByType,
    totalPosts: withEngagement.length
  };
}

// Test Case
const posts = [
  { id: 1, type: "image", views: 1000, likes: 80,  comments: 20, shares: 10, date: "2026-01-01" },
  { id: 2, type: "video", views: 5000, likes: 300, comments: 50, shares: 40, date: "2026-01-02" },
  { id: 3, type: "text",  views: 500,  likes: 15, comments: 5,  shares: 2,  date: "2026-01-03" },
  { id: 4, type: "image", views: 2000, likes: 150, comments: 30, shares: 20, date: "2026-01-04" },
  { id: 5, type: "video", views: 8000, likes: 400, comments: 80, shares: 60, date: "2026-01-05" }
];

const dateRange = {
  from: "2026-01-01",
  to: "2026-01-05"
};

console.log(analyzePostEngagement(posts, dateRange));
```

**Key Concepts**: Date object comparison, category grouping, engagement calculation, array spreading for non-destructive sorting

---
