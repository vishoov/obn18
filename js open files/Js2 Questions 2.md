

## 1. Nested Loops - Advanced

### Q1 — E-Commerce Inventory Management

**Scenario:**
You're building an inventory management system for an e-commerce platform called "ShopFast". The system needs to check for potential product bundle deals by comparing every product with every other product to find complementary items (products frequently bought together).

The current implementation is:

```javascript
function findBundles(products) {
  const bundles = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < products.length; j++) {
      for (let k = 0; k < products.length; k++) {
        if (i !== j && j !== k && i !== k) {
          bundles.push([products[i], products[j], products[k]]);
        }
      }
    }
  }
  return bundles;
}
```

**Questions:**
1. What is the time complexity of this function?
2. If the products array has 1000 items, approximately how many bundle combinations will be generated?
3. The system is experiencing severe performance issues. Propose an optimized solution that reduces unnecessary iterations.
4. How would you modify this to find only unique bundles (where [A, B, C] is the same as [C, B, A])?

---

### Q2 — Video Streaming Platform Analytics

**Scenario:**
"StreamNow", a video streaming platform, tracks user watch history. They want to implement a feature that shows "Users who watched X also watched Y" by comparing watch histories of all users.

```javascript
function findSimilarViewers(users) {
  const similarities = [];
  for (let i = 0; i < users.length; i++) {
    for (let j = i + 1; j < users.length; j++) {
      let commonVideos = 0;
      for (let vi = 0; vi < users[i].watched.length; vi++) {
        for (let vj = 0; vj < users[j].watched.length; vj++) {
          if (users[i].watched[vi] === users[j].watched[vj]) {
            commonVideos++;
          }
        }
      }
      if (commonVideos > 5) {
        similarities.push({ user1: i, user2: j, common: commonVideos });
      }
    }
  }
  return similarities;
}
```

**Questions:**
1. What is the worst-case time complexity of this algorithm?
2. If there are 10,000 users, each having watched 100 videos, how many comparisons will be made?
3. Suggest a data structure that could optimize the inner nested loop.
4. Write a more efficient version using that data structure.

---

### Q3 — Game Leaderboard Grid

**Scenario:**
A gaming company needs to display a grid-based leaderboard where each cell shows the rank difference between two players. The grid should be symmetric (difference between Player A and Player B is the same as B and A, but opposite sign).

```javascript
function generateLeaderboard(players) {
  const n = players.length;
  const grid = Array(n).fill().map(() => Array(n).fill(0));
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Calculate rank difference
      grid[i][j] = players[i].score - players[j].score;
    }
  }
  return grid;
}
```

**Questions:**
1. This function performs redundant calculations. How many calculations are actually unnecessary?
2. Optimize the function to calculate only the upper triangle of the matrix and derive the rest.
3. What is the space complexity of the current solution vs. your optimized solution?
4. How would you modify this if diagonal cells should show the player's name instead of 0?

---

### Q4 — IoT Sensor Network

**Scenario:**
An IoT company monitors temperature sensors in a smart building. They need to detect "hot spots" - areas where 3 or more adjacent sensors show temperatures above a threshold.

```javascript
function findHotSpots(sensorGrid, threshold) {
  const hotSpots = [];
  const rows = sensorGrid.length;
  const cols = sensorGrid[0].length;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (sensorGrid[i][j] > threshold) {
        // Check all 8 adjacent cells
        let adjacentHot = 0;
        for (let di = -1; di <= 1; di++) {
          for (let dj = -1; dj <= 1; dj++) {
            const ni = i + di;
            const nj = j + dj;
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
              if (sensorGrid[ni][nj] > threshold) {
                adjacentHot++;
              }
            }
          }
        }
        if (adjacentHot >= 3) {
          hotSpots.push({ row: i, col: j, count: adjacentHot });
        }
      }
    }
  }
  return hotSpots;
}
```

**Questions:**
1. What is the time complexity of this algorithm?
2. Identify a bug in the logic (hint: it counts the current cell itself).
3. The grid is 100x100 and 90% of cells are above threshold. How many times will the inner nested loop run?
4. How would you optimize this if sensors are queried frequently but their values change rarely?

---

### Q5 — Travel Route Planner

**Scenario:**
A travel booking site needs to find all possible routes connecting N cities where each route must visit exactly 3 different cities. The constraint is that there must be a direct flight between consecutive cities in the route.

```javascript
function findValidRoutes(cities, flights) {
  const routes = [];
  
  for (let i = 0; i < cities.length; i++) {
    for (let j = 0; j < cities.length; j++) {
      if (i === j) continue;
      if (!hasDirectFlight(flights, cities[i], cities[j])) continue;
      
      for (let k = 0; k < cities.length; k++) {
        if (k === i || k === j) continue;
        if (!hasDirectFlight(flights, cities[j], cities[k])) continue;
        
        routes.push([cities[i], cities[j], cities[k]]);
      }
    }
  }
  return routes;
}

function hasDirectFlight(flights, from, to) {
  return flights.some(f => f.from === from && f.to === to);
}
```

**Questions:**
1. What is the time complexity considering both the nested loops and the `hasDirectFlight` function?
2. If there are 50 cities and 200 flights, how many times will `hasDirectFlight` be called in the worst case?
3. Propose a preprocessing step to make `hasDirectFlight` O(1).
4. How would you modify this to find routes of variable length (2 to 5 cities)?

---

## 2. Pattern Recognition & Optimization

### Q1 — ASCII Art Generator

**Scenario:**
A creative app needs to generate ASCII art patterns for user profiles. The pattern generation is slow for large dimensions and needs optimization.

```javascript
function generateComplexPattern(n) {
  let pattern = '';
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j || i + j === n - 1) {
        pattern += '*';
      } else if (i < n / 2 && j < n / 2) {
        pattern += '+';
      } else if (i >= n / 2 && j >= n / 2) {
        pattern += '#';
      } else {
        pattern += ' ';
      }
    }
    pattern += '\n';
  }
  return pattern;
}
```

**Questions:**
1. What is the current time and space complexity?
2. String concatenation in loops is inefficient in JavaScript. Why?
3. Rewrite the function using an array and `join()`. What's the performance improvement?
4. For `n = 1000`, how many string concatenation operations occur in the original vs. optimized version?
5. How would you generate this pattern in parallel chunks for even better performance?

---

### Q2 — Dynamic Logo Generator

**Scenario:**
A SaaS platform generates company logos using geometric patterns. Users report that preview generation times out for complex patterns.

```javascript
function generateLogo(size, complexity) {
  const pixels = [];
  
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      let pixelValue = 0;
      
      for (let c = 0; c < complexity; c++) {
        const distance = Math.sqrt(
          Math.pow(row - size / 2, 2) + Math.pow(col - size / 2, 2)
        );
        pixelValue += Math.sin(distance / (c + 1)) * 255;
      }
      
      pixels.push(Math.abs(pixelValue) % 256);
    }
  }
  return pixels;
}
```

**Questions:**
1. What is the time complexity in terms of `size` and `complexity`?
2. Identify calculations that are being repeated unnecessarily.
3. How could memoization help optimize this function?
4. Implement a cached version that stores computed values for `(row, col)` pairs.
5. What would be the space-time tradeoff of your optimization?

---

### Q3 — Data Visualization Grid

**Scenario:**
A business intelligence tool generates heat maps by computing weighted averages of surrounding cells. The current implementation is too slow for real-time updates.

```javascript
function generateHeatMap(data, radius) {
  const rows = data.length;
  const cols = data[0].length;
  const heatMap = Array(rows).fill().map(() => Array(cols).fill(0));
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      let count = 0;
      
      for (let di = -radius; di <= radius; di++) {
        for (let dj = -radius; dj <= radius; dj++) {
          const ni = i + di;
          const nj = j + dj;
          
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            const weight = 1 / (Math.abs(di) + Math.abs(dj) + 1);
            sum += data[ni][nj] * weight;
            count += weight;
          }
        }
      }
      
      heatMap[i][j] = sum / count;
    }
  }
  return heatMap;
}
```

**Questions:**
1. What is the time complexity in terms of `rows`, `cols`, and `radius`?
2. For a 1000x1000 grid with radius 5, how many total calculations are performed?
3. Research "convolution" and explain how it relates to this problem.
4. Could you use a sliding window technique to optimize repeated boundary checks?
5. How would parallel processing help, and what would be the minimum chunk size to make it worthwhile?

---

## 3. 2D Matrix Operations

### Q1 — Image Processing Pipeline

**Scenario:**
A photo editing app applies multiple transformations to images. Users report that applying 3-4 filters in sequence makes the app unresponsive.

```javascript
function applyFilters(image, filters) {
  let result = image;
  
  for (const filter of filters) {
    if (filter.type === 'rotate90') {
      result = rotate90(result);
    } else if (filter.type === 'flipHorizontal') {
      result = flipHorizontal(result);
    } else if (filter.type === 'transpose') {
      result = transpose(result);
    }
  }
  
  return result;
}

function rotate90(matrix) {
  const n = matrix.length;
  const result = Array(n).fill().map(() => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }
  return result;
}
```

**Questions:**
1. If the image is 4000x4000 pixels and 5 filters are applied, how much memory is allocated?
2. Explain why creating new matrices for each operation is problematic.
3. Implement an in-place rotation algorithm that modifies the matrix without creating new arrays.
4. Some filter combinations cancel each other (e.g., rotate90 four times = no change). How would you optimize this?
5. Design a transformation pipeline that analyzes filter combinations before applying them.

---

### Q2 — Spreadsheet Formula Evaluation

**Scenario:**
You're building a spreadsheet app like Excel. Cells can contain formulas that reference other cells. The evaluation system needs to detect circular dependencies and compute values efficiently.

```javascript
function evaluateCell(grid, row, col, visited = new Set()) {
  const cellId = `${row},${col}`;
  
  if (visited.has(cellId)) {
    throw new Error('Circular dependency detected');
  }
  
  visited.add(cellId);
  
  const cell = grid[row][col];
  
  if (typeof cell === 'number') {
    return cell;
  }
  
  if (cell.startsWith('=SUM(')) {
    const refs = parseReferences(cell);
    let sum = 0;
    for (const ref of refs) {
      sum += evaluateCell(grid, ref.row, ref.col, visited);
    }
    return sum;
  }
  
  return 0;
}
```

**Questions:**
1. What is the worst-case time complexity of this algorithm?
2. If cell A1 references B1, B1 references C1, and so on for 100 cells, how many recursive calls are made to evaluate A1?
3. The same cell might be referenced multiple times in different formulas. How would you cache computed values?
4. Implement a dependency graph approach that computes cells in the correct order.
5. How would you handle updates when a user changes a cell value (which cells need recomputation)?

---

### Q3 — Game Board Pathfinding

**Scenario:**
A puzzle game has a grid where players move from start to finish. The game needs to validate if a solution path exists and count all possible valid paths.

```javascript
function countPaths(grid, row, col, endRow, endCol, visited) {
  if (row === endRow && col === endCol) {
    return 1;
  }
  
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
    return 0;
  }
  
  if (grid[row][col] === 1 || visited[row][col]) {
    return 0; // Wall or already visited
  }
  
  visited[row][col] = true;
  
  let paths = 0;
  paths += countPaths(grid, row + 1, col, endRow, endCol, visited); // Down
  paths += countPaths(grid, row - 1, col, endRow, endCol, visited); // Up
  paths += countPaths(grid, row, col + 1, endRow, endCol, visited); // Right
  paths += countPaths(grid, row, col - 1, endRow, endCol, visited); // Left
  
  visited[row][col] = false; // Backtrack
  
  return paths;
}
```

**Questions:**
1. What is the time complexity of this algorithm?
2. For a 10x10 grid with no walls, what's the maximum number of paths from (0,0) to (9,9)?
3. Explain why the backtracking step (`visited[row][col] = false`) is necessary.
4. How would you modify this to return the shortest path instead of counting all paths?
5. Implement memoization to avoid recalculating paths for the same subproblems.

---

### Q4 — Warehouse Logistics

**Scenario:**
A warehouse uses a grid layout. Robots need to find optimal paths to pick items while avoiding collisions. The system needs to detect if two robots' planned paths will intersect.

```javascript
function detectCollision(pathA, pathB) {
  const occupiedA = new Map();
  const occupiedB = new Map();
  
  for (let t = 0; t < pathA.length; t++) {
    const posA = `${pathA[t].row},${pathA[t].col}`;
    occupiedA.set(posA, t);
  }
  
  for (let t = 0; t < pathB.length; t++) {
    const posB = `${pathB[t].row},${pathB[t].col}`;
    if (occupiedA.has(posB)) {
      const timeA = occupiedA.get(posB);
      if (Math.abs(timeA - t) < 2) { // Within 2 time units
        return { collision: true, time: t, position: pathB[t] };
      }
    }
  }
  
  return { collision: false };
}
```

**Questions:**
1. What is the time and space complexity of this function?
2. If there are 50 robots with paths of length 100 each, how many pairwise collision checks are needed?
3. How would you optimize this for real-time collision detection with many robots?
4. Implement a spatial hashing approach to reduce collision checks.
5. How would you extend this to 3D warehouse with multiple floors?

---

## 4. Nested Data Structures

### Q1 — JSON Schema Validator

**Scenario:**
A REST API needs to validate deeply nested JSON payloads against a schema. The current recursive validator is causing stack overflow errors for deeply nested objects.

```javascript
function validateSchema(data, schema) {
  if (schema.type === 'object') {
    if (typeof data !== 'object' || data === null) return false;
    
    for (const key in schema.properties) {
      if (!validateSchema(data[key], schema.properties[key])) {
        return false;
      }
    }
    return true;
  }
  
  if (schema.type === 'array') {
    if (!Array.isArray(data)) return false;
    
    for (const item of data) {
      if (!validateSchema(item, schema.items)) {
        return false;
      }
    }
    return true;
  }
  
  return typeof data === schema.type;
}
```

**Questions:**
1. What is the maximum recursion depth for an object nested 1000 levels deep?
2. Why does deep recursion cause stack overflow in JavaScript?
3. Convert this recursive function to an iterative one using an explicit stack.
4. How would you add a maximum depth limit to prevent validation of maliciously nested payloads?
5. Implement early exit optimization: stop validating as soon as first error is found.

---

### Q2 — File System Tree

**Scenario:**
A cloud storage service needs to calculate total size of folders recursively. Users with thousands of nested folders experience timeouts.

```javascript
function calculateSize(folder) {
  let total = 0;
  
  for (const item of folder.contents) {
    if (item.type === 'file') {
      total += item.size;
    } else if (item.type === 'folder') {
      total += calculateSize(item); // Recursive call
    }
  }
  
  return total;
}

// Example usage
const root = {
  type: 'folder',
  contents: [
    { type: 'file', size: 100 },
    {
      type: 'folder',
      contents: [
        { type: 'file', size: 200 },
        { type: 'file', size: 150 }
      ]
    }
  ]
};
```

**Questions:**
1. What is the time complexity in terms of total number of files and folders?
2. How would you cache folder sizes to avoid recalculation when a single file changes?
3. Implement an iterative version using a queue (breadth-first traversal).
4. How would you parallelize size calculation for folders at the same level?
5. Design a system that incrementally updates cached sizes when files are added/deleted.

---

### Q3 — E-commerce Category Tree

**Scenario:**
An e-commerce site has deeply nested product categories. The search function needs to find all products in a category and all its subcategories, but it's too slow.

```javascript
function findProducts(category, query) {
  let results = [];
  
  // Search in current category
  for (const product of category.products) {
    if (product.name.toLowerCase().includes(query.toLowerCase())) {
      results.push(product);
    }
  }
  
  // Search in subcategories
  for (const subcategory of category.subcategories) {
    results = results.concat(findProducts(subcategory, query));
  }
  
  return results;
}
```

**Questions:**
1. What is the problem with using `concat` in every recursive call?
2. If the category tree has 10 levels and 1000 total categories, how many arrays are created?
3. Rewrite this function to mutate a single results array passed by reference.
4. How would you add pagination (return only 20 results at a time)?
5. Design an indexing system that pre-computes product-to-category mappings for O(1) lookup.

---

### Q4 — Social Network Graph

**Scenario:**
A social network needs to find connection paths between users. The "degrees of separation" feature is slow for users with many connections.

```javascript
function findConnection(userA, userB, maxDepth, visited = new Set()) {
  if (userA.id === userB.id) {
    return [userA.id];
  }
  
  if (maxDepth === 0) {
    return null;
  }
  
  visited.add(userA.id);
  
  for (const friend of userA.friends) {
    if (!visited.has(friend.id)) {
      const path = findConnection(friend, userB, maxDepth - 1, visited);
      if (path) {
        return [userA.id, ...path];
      }
    }
  }
  
  return null;
}
```

**Questions:**
1. What graph traversal algorithm is this (BFS or DFS)?
2. Why might this give a non-shortest path between two users?
3. Rewrite this using BFS to guarantee the shortest path.
4. For a user with 500 friends, each having 500 friends, how many users are checked at depth 2?
5. How would you implement bidirectional search to find connections faster?

---

## 5. Time Complexity Analysis

### Q1 — Social Media Analytics

**Scenario:**
A social media company "SocialConnect" has developed a new feature that allows users to share their favorite songs. They want to analyze song popularity based on user interactions.

```javascript
function analyzeSongPopularity(n) {
  if (n <= 1) return;
  analyzeSongPopularity(n / 2);
  analyzeSongPopularity(n / 2);
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
```

**Questions:**
1. Using the Master Theorem, determine the time complexity of this function.
2. What are the values of `a`, `b`, and `f(n)` in the Master Theorem formula?
3. Which case of the Master Theorem applies here?
4. If n = 1,000,000 interactions, approximately how many operations will be performed?
5. How would the complexity change if the recursive calls were `analyzeSongPopularity(n / 3)` instead?

---

### Q2 — Video Recommendation Engine

**Scenario:**
A streaming platform uses the following algorithm to generate personalized recommendations:

```javascript
function generateRecommendations(users, videos) {
  const recommendations = [];
  
  users.sort((a, b) => a.id - b.id); // Step 1
  
  for (const user of users) { // Step 2
    const userRecs = [];
    
    for (const video of videos) { // Step 3
      let score = 0;
      
      for (const tag of video.tags) { // Step 4
        if (user.interests.includes(tag)) {
          score++;
        }
      }
      
      if (score > 0) {
        userRecs.push({ video, score });
      }
    }
    
    userRecs.sort((a, b) => b.score - a.score); // Step 5
    recommendations.push(userRecs.slice(0, 10)); // Step 6
  }
  
  return recommendations;
}
```

**Questions:**
1. What is the time complexity of each step (1-6)?
2. What is the overall time complexity in terms of U (users), V (videos), T (avg tags per video), and I (avg interests per user)?
3. If there are 100,000 users, 50,000 videos, 10 tags per video, and 20 interests per user, which step is the bottleneck?
4. The `includes` operation on line 12 is O(I). How would you optimize this?
5. Redesign the algorithm with a preprocessing step to achieve better than O(U × V × T × I).

---

### Q3 — Database Query Optimizer

**Scenario:**
A database team is analyzing different query strategies:

```javascript
// Strategy A: Nested Loop Join
function strategyA(table1, table2, key) {
  const results = [];
  for (const row1 of table1) {
    for (const row2 of table2) {
      if (row1[key] === row2[key]) {
        results.push({ ...row1, ...row2 });
      }
    }
  }
  return results;
}

// Strategy B: Hash Join
function strategyB(table1, table2, key) {
  const hashMap = new Map();
  const results = [];
  
  for (const row of table1) {
    const keyValue = row[key];
    if (!hashMap.has(keyValue)) {
      hashMap.set(keyValue, []);
    }
    hashMap.get(keyValue).push(row);
  }
  
  for (const row of table2) {
    const keyValue = row[key];
    if (hashMap.has(keyValue)) {
      for (const matchedRow of hashMap.get(keyValue)) {
        results.push({ ...matchedRow, ...row });
      }
    }
  }
  
  return results;
}
```

**Questions:**
1. What is the time complexity of Strategy A and Strategy B?
2. When would Strategy A actually be faster than Strategy B?
3. What is the space complexity of each strategy?
4. For table1 with 10,000 rows and table2 with 100,000 rows, which strategy should be used?
5. Design a hybrid strategy that chooses between A and B based on table sizes.

---

### Q4 — Cache Invalidation System

**Scenario:**
A content delivery network needs to invalidate cached pages when content updates:

```javascript
function invalidateCache(pages, dependencies) {
  const toInvalidate = new Set();
  
  function findDependents(page) {
    if (toInvalidate.has(page)) return;
    toInvalidate.add(page);
    
    if (dependencies[page]) {
      for (const dependent of dependencies[page]) {
        findDependents(dependent);
      }
    }
  }
  
  for (const page of pages) {
    findDependents(page);
  }
  
  return Array.from(toInvalidate);
}
```

**Questions:**
1. What is the worst-case time complexity in terms of P (pages) and D (dependencies per page)?
2. Could this function have exponential time complexity? Under what circumstances?
3. Explain why the `toInvalidate.has(page)` check prevents exponential blowup.
4. If the dependency graph has cycles, will this function still work? Why or why not?
5. How would you modify this to detect and report circular dependencies?

---

### Q5 — Real-Time Collaborative Editing

**Scenario:**
A Google Docs-like app tracks edit operations and applies them to documents:

```javascript
function applyOperations(document, operations) {
  let doc = document;
  
  operations.sort((a, b) => a.timestamp - b.timestamp);
  
  for (const op of operations) {
    if (op.type === 'insert') {
      doc = doc.slice(0, op.position) + op.text + doc.slice(op.position);
    } else if (op.type === 'delete') {
      doc = doc.slice(0, op.position) + doc.slice(op.position + op.length);
    }
  }
  
  return doc;
}
```

**Questions:**
1. What is the time complexity of this function in terms of O (operations) and D (document length)?
2. String operations like `slice` and concatenation are O(D). How many times are they called?
3. If there are 1000 operations on a 100,000 character document, estimate total operations.
4. Propose using a different data structure (rope, gap buffer, piece table) to optimize this.
5. Research Operational Transformation (OT) and explain how it handles concurrent edits more efficiently.

---

## 6. Binary Search Applications

### Q1 — Rate Limiting System

**Scenario:**
An API gateway implements rate limiting using token buckets. It needs to find the maximum number of requests that can be made in a time window without exceeding the rate limit.

```javascript
function maxRequests(timestamps, windowSize, maxPerWindow) {
  // Find the maximum number of requests that can be made
  // starting at any point in the timestamps array
  // such that all requests fit within windowSize
  
  let maxCount = 0;
  
  for (let i = 0; i < timestamps.length; i++) {
    const windowEnd = timestamps[i] + windowSize;
    
    // Count requests within this window
    let count = 0;
    for (let j = i; j < timestamps.length && timestamps[j] < windowEnd; j++) {
      count++;
    }
    
    if (count <= maxPerWindow) {
      maxCount = Math.max(maxCount, count);
    }
  }
  
  return maxCount;
}
```

**Questions:**
1. What is the current time complexity? Can you optimize it using binary search?
2. Implement a binary search approach to find the right boundary of each window.
3. How would you handle the case where timestamps are not sorted?
4. If timestamps arrive in real-time, how would you maintain a sliding window efficiently?
5. Design a data structure that allows O(1) rate limit checking.

---

### Q2 — Cloud Resource Allocation

**Scenario:**
A cloud provider needs to find the minimum server capacity that can handle all incoming requests. Each request has a time range during which it needs resources.

```javascript
function findMinCapacity(requests) {
  // requests = [{ start: 0, end: 5, resources: 3 }, ...]
  // Find minimum capacity to handle all concurrent requests
  
  const events = [];
  
  for (const req of requests) {
    events.push({ time: req.start, change: req.resources });
    events.push({ time: req.end, change: -req.resources });
  }
  
  events.sort((a, b) => a.time - b.time);
  
  let current = 0;
  let maxCapacity = 0;
  
  for (const event of events) {
    current += event.change;
    maxCapacity = Math.max(maxCapacity, current);
  }
  
  return maxCapacity;
}
```

**Questions:**
1. Explain why this "sweep line" algorithm works correctly.
2. What is the time complexity? Which step dominates?
3. Now, given a fixed capacity C, use binary search to find if it's possible to schedule all requests.
4. Combine both approaches: use binary search on capacity to find the minimum viable capacity.
5. How would you modify this to minimize cost if different capacity levels have different pricing?

---

### Q3 — Version Control System

**Scenario:**
A Git-like version control system needs to find the first commit that introduced a bug using binary search (git bisect).

```javascript
function findBugCommit(commits, testFunction) {
  // testFunction returns true if bug exists, false otherwise
  // Find the first commit where testFunction returns true
  
  let left = 0;
  let right = commits.length - 1;
  let firstBugCommit = -1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (testFunction(commits[mid])) {
      firstBugCommit = mid;
      right = mid - 1; // Search left half
    } else {
      left = mid + 1; // Search right half
    }
  }
  
  return firstBugCommit;
}
```

**Questions:**
1. What assumptions must be true for binary search to work here?
2. If `testFunction` takes 2 minutes to run and there are 128 commits, how long does bisect take vs. linear search?
3. What if the bug was introduced in commit X, then fixed in commit Y, then reintroduced in commit Z? Will this algorithm work?
4. Implement a modified version that handles non-monotonic test results.
5. How would you parallelize the testing across multiple machines?

---

### Q4 — E-commerce Price Optimization

**Scenario:**
An e-commerce platform uses dynamic pricing. They need to find the optimal price point that maximizes revenue based on historical demand data.

```javascript
function findOptimalPrice(pricePoints, demandFunction, costPerUnit) {
  // pricePoints: sorted array of possible prices
  // demandFunction(price): returns estimated units sold at that price
  // costPerUnit: production cost
  
  let maxProfit = -Infinity;
  let optimalPrice = pricePoints[0];
  
  for (const price of pricePoints) {
    const unitsSold = demandFunction(price);
    const profit = (price - costPerUnit) * unitsSold;
    
    if (profit > maxProfit) {
      maxProfit = profit;
      optimalPrice = price;
    }
  }
  
  return { price: optimalPrice, profit: maxProfit };
}
```

**Questions:**
1. This is currently O(n). Can binary search help optimize it? Why or why not?
2. What property must the profit function have for binary search to be applicable?
3. If the profit function is unimodal (single peak), implement ternary search to find the optimum.
4. How would you handle discrete price points (can only be $9.99, $19.99, etc.)?
5. Design an A/B testing framework that uses binary search to quickly converge on optimal pricing.

---

### Q5 — Database Index Range Query

**Scenario:**
A database uses B-tree indexes for range queries. Optimize finding all records with values in a given range.

```javascript
function rangeQuery(sortedRecords, minValue, maxValue) {
  // sortedRecords is sorted by the indexed field
  
  const results = [];
  
  for (const record of sortedRecords) {
    if (record.value >= minValue && record.value <= maxValue) {
      results.push(record);
    }
  }
  
  return results;
}
```

**Questions:**
1. What is the current time complexity? How is it inefficient?
2. Use binary search to find the first record >= minValue and the last record <= maxValue.
3. Implement `lowerBound` and `upperBound` functions similar to C++ STL.
4. What is the optimized time complexity if there are K records in the range out of N total?
5. How do databases use B-trees to make range queries even more efficient than binary search?

---

## 7. Map and Set in Real Systems

### Q1 — Distributed Cache

**Scenario:**
A distributed caching system needs to implement LRU (Least Recently Used) cache eviction policy.

```javascript
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  get(key) {
    if (!this.cache.has(key)) return -1;
    
    const value = this.cache.get(key);
    // Move to end (most recently used)
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  
  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    
    this.cache.set(key, value);
    
    if (this.cache.size > this.capacity) {
      // Remove least recently used (first item)
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
  }
}
```

**Questions:**
1. What is the time complexity of `get` and `put` operations?
2. Does JavaScript's `Map` maintain insertion order? Why is this crucial here?
3. What is the space complexity of this implementation?
4. How would you extend this to implement LFU (Least Frequently Used) instead?
5. Design a distributed LRU cache across multiple servers with consistent hashing.

---

### Q2 — Session Management

**Scenario:**
A web application tracks user sessions with automatic timeout. Sessions must expire after 30 minutes of inactivity.

```javascript
class SessionManager {
  constructor(timeoutMs) {
    this.sessions = new Map();
    this.timeouts = new Map();
    this.timeoutMs = timeoutMs;
  }
  
  createSession(userId, data) {
    this.sessions.set(userId, data);
    this.resetTimeout(userId);
  }
  
  getSession(userId) {
    if (this.sessions.has(userId)) {
      this.resetTimeout(userId);
      return this.sessions.get(userId);
    }
    return null;
  }
  
  resetTimeout(userId) {
    if (this.timeouts.has(userId)) {
      clearTimeout(this.timeouts.get(userId));
    }
    
    const timeoutId = setTimeout(() => {
      this.sessions.delete(userId);
      this.timeouts.delete(userId);
    }, this.timeoutMs);
    
    this.timeouts.set(userId, timeoutId);
  }
}
```

**Questions:**
1. What is the memory overhead of storing timeout IDs separately?
2. With 1 million active sessions, what are the performance implications?
3. How would you implement passive expiration (clean up only when accessed)?
4. Design a background cleanup process that removes expired sessions periodically.
5. How would you persist sessions across server restarts using Redis?

---

### Q3 — Real-Time Analytics

**Scenario:**
A real-time analytics dashboard tracks unique visitors per page. It needs to handle millions of events per minute.

```javascript
class UniqueVisitorTracker {
  constructor() {
    this.visitors = new Map(); // page -> Set of visitor IDs
  }
  
  recordVisit(page, visitorId) {
    if (!this.visitors.has(page)) {
      this.visitors.set(page, new Set());
    }
    this.visitors.get(page).add(visitorId);
  }
  
  getUniqueCount(page) {
    if (!this.visitors.has(page)) return 0;
    return this.visitors.get(page).size;
  }
  
  getTopPages(n) {
    const pages = Array.from(this.visitors.entries());
    pages.sort((a, b) => b[1].size - a[1].size);
    return pages.slice(0, n).map(([page, visitors]) => ({
      page,
      uniqueVisitors: visitors.size
    }));
  }
}
```

**Questions:**
1. What is the space complexity if there are 1 million pages and 10 million unique visitors?
2. The `getTopPages` method is inefficient. What data structure would optimize it?
3. Research HyperLogLog and explain how it can estimate unique counts with ~2% error using only 1.5 KB per page.
4. Implement a sliding window to track unique visitors in the last hour only.
5. How would you shard this across multiple servers for horizontal scaling?

---

### Q4 — Autocomplete System

**Scenario:**
A search engine implements autocomplete by tracking search frequency and suggesting top queries.

```javascript
class AutocompleteSystem {
  constructor() {
    this.frequencies = new Map();
    this.prefixMap = new Map();
  }
  
  addQuery(query) {
    this.frequencies.set(query, (this.frequencies.get(query) || 0) + 1);
    
    // Index all prefixes
    for (let i = 1; i <= query.length; i++) {
      const prefix = query.substring(0, i);
      if (!this.prefixMap.has(prefix)) {
        this.prefixMap.set(prefix, new Set());
      }
      this.prefixMap.get(prefix).add(query);
    }
  }
  
  suggest(prefix, limit = 5) {
    if (!this.prefixMap.has(prefix)) return [];
    
    const queries = Array.from(this.prefixMap.get(prefix));
    queries.sort((a, b) => this.frequencies.get(b) - this.frequencies.get(a));
    return queries.slice(0, limit);
  }
}
```

**Questions:**
1. What is the space complexity for a query of length L?
2. If there are 1 million queries averaging 20 characters each, estimate total memory usage.
3. The `suggest` method sorts every time. How would you optimize this?
4. Implement a Trie (prefix tree) based solution and compare space/time tradeoffs.
5. How would you handle typos and fuzzy matching (Levenshtein distance)?

---

### Q5 — Deduplication System

**Scenario:**
A file backup system needs to detect duplicate files efficiently using content hashing.

```javascript
class DeduplicationSystem {
  constructor() {
    this.hashToFiles = new Map();
    this.fileToHash = new Map();
  }
  
  addFile(filePath, content) {
    const hash = this.computeHash(content);
    
    if (this.hashToFiles.has(hash)) {
      // Duplicate detected
      console.log(`Duplicate: ${filePath} matches ${this.hashToFiles.get(hash)[0]}`);
      this.hashToFiles.get(hash).push(filePath);
    } else {
      this.hashToFiles.set(hash, [filePath]);
    }
    
    this.fileToHash.set(filePath, hash);
  }
  
  computeHash(content) {
    // Simplified hash function
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      hash = ((hash << 5) - hash) + content.charCodeAt(i);
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash;
  }
  
  findDuplicates() {
    const duplicates = [];
    for (const [hash, files] of this.hashToFiles) {
      if (files.length > 1) {
        duplicates.push(files);
      }
    }
    return duplicates;
  }
}
```

**Questions:**
1. What is the collision probability of this simple hash function?
2. Research and implement SHA-256 hashing for production use. Why is it better?
3. For large files (GB+), computing hash of entire file is slow. How would you optimize?
4. Implement chunked hashing: hash file in blocks and detect partial duplicates.
5. Design a distributed deduplication system for a data center with petabytes of storage.

---

## 8. Recursion & Dynamic Programming

### Q1 — Text Justification

**Scenario:**
A document editor needs to justify text to fit a given line width, similar to Microsoft Word's justify alignment.

```javascript
function justifyText(words, maxWidth) {
  function canFit(words, start, end, maxWidth) {
    let length = 0;
    for (let i = start; i <= end; i++) {
      length += words[i].length;
    }
    length += (end - start); // Spaces between words
    return length <= maxWidth;
  }
  
  function justify(index, memo = {}) {
    if (index >= words.length) return 0;
    if (memo[index] !== undefined) return memo[index];
    
    let minCost = Infinity;
    
    for (let end = index; end < words.length; end++) {
      if (canFit(words, index, end, maxWidth)) {
        const cost = Math.pow(maxWidth - getLineLength(words, index, end), 2);
        const totalCost = cost + justify(end + 1, memo);
        minCost = Math.min(minCost, totalCost);
      } else {
        break;
      }
    }
    
    memo[index] = minCost;
    return minCost;
  }
  
  function getLineLength(words, start, end) {
    let length = 0;
    for (let i = start; i <= end; i++) {
      length += words[i].length;
    }
    return length + (end - start);
  }
  
  return justify(0);
}
```

**Questions:**
1. Explain the dynamic programming approach used here. What are the overlapping subproblems?
2. What is the time and space complexity with memoization vs. without?
3. Modify the function to return the actual justified lines, not just the cost.
4. How would you change the cost function to prefer fewer lines over more even spacing?
5. Implement a greedy algorithm and compare its output quality to the DP solution.

---

### Q2 — String Edit Distance

**Scenario:**
A spell checker needs to find the minimum number of edits (insert, delete, replace) to transform one word into another (Levenshtein distance).

```javascript
function editDistance(word1, word2, i = 0, j = 0, memo = {}) {
  if (i === word1.length) return word2.length - j;
  if (j === word2.length) return word1.length - i;
  
  const key = `${i},${j}`;
  if (memo[key] !== undefined) return memo[key];
  
  if (word1[i] === word2[j]) {
    memo[key] = editDistance(word1, word2, i + 1, j + 1, memo);
  } else {
    const insert = editDistance(word1, word2, i, j + 1, memo);
    const deleteOp = editDistance(word1, word2, i + 1, j, memo);
    const replace = editDistance(word1, word2, i + 1, j + 1, memo);
    memo[key] = 1 + Math.min(insert, deleteOp, replace);
  }
  
  return memo[key];
}
```

**Questions:**
1. What is the time complexity without memoization? Draw the recursion tree for small inputs.
2. With memoization, what is the time and space complexity?
3. Convert this top-down DP to bottom-up iterative DP using a 2D table.
4. Optimize space to O(min(m, n)) using only two rows of the DP table.
5. Modify the function to return the actual edit operations, not just the count.

---

### Q3 — Stock Trading Strategy

**Scenario:**
A trading algorithm needs to find the maximum profit from buying and selling stocks with various constraints.

```javascript
// Buy and sell multiple times, but can't hold multiple stocks
function maxProfit(prices, k) {
  // k = max number of transactions allowed
  
  function dp(day, transactionsLeft, holding, memo = {}) {
    if (day === prices.length || transactionsLeft === 0) return 0;
    
    const key = `${day},${transactionsLeft},${holding}`;
    if (memo[key] !== undefined) return memo[key];
    
    // Option 1: Do nothing
    let maxProfit = dp(day + 1, transactionsLeft, holding, memo);
    
    if (holding) {
      // Option 2: Sell
      const sellProfit = prices[day] + dp(day + 1, transactionsLeft - 1, false, memo);
      maxProfit = Math.max(maxProfit, sellProfit);
    } else {
      // Option 2: Buy
      const buyProfit = -prices[day] + dp(day + 1, transactionsLeft, true, memo);
      maxProfit = Math.max(maxProfit, buyProfit);
    }
    
    memo[key] = maxProfit;
    return maxProfit;
  }
  
  return dp(0, k, false);
}
```

**Questions:**
1. What are the dimensions of the DP state space?
2. If prices has length N and k=100, how many subproblems are there?
3. When k >= N/2, the problem becomes unbounded (trade as much as you want). Optimize for this case.
4. Add a "cooldown" constraint: must wait 1 day after selling before buying again.
5. Add a transaction fee: each trade costs $2. How does this change the DP?

---

### Q4 — Coin Change Problem

**Scenario:**
A vending machine needs to give change using the minimum number of coins.

```javascript
function minCoins(coins, amount, memo = {}) {
  if (amount === 0) return 0;
  if (amount < 0) return Infinity;
  if (memo[amount] !== undefined) return memo[amount];
  
  let minCount = Infinity;
  
  for (const coin of coins) {
    const count = 1 + minCoins(coins, amount - coin, memo);
    minCount = Math.min(minCount, count);
  }
  
  memo[amount] = minCount;
  return minCount;
}
```

**Questions:**
1. What is the time complexity with and without memoization?
2. Convert this to an iterative bottom-up DP solution.
3. Modify the function to return the actual coins used, not just the count.
4. What happens if there's no valid combination? How should the function handle this?
5. Some coin systems are "canonical" (greedy works), others aren't. Research why US coins are canonical.

---

### Q5 — Longest Common Subsequence

**Scenario:**
A file diff tool (like Git) needs to find the longest common subsequence between two file versions to minimize the displayed changes.

```javascript
function lcs(text1, text2, i = 0, j = 0, memo = {}) {
  if (i === text1.length || j === text2.length) return 0;
  
  const key = `${i},${j}`;
  if (memo[key] !== undefined) return memo[key];
  
  if (text1[i] === text2[j]) {
    memo[key] = 1 + lcs(text1, text2, i + 1, j + 1, memo);
  } else {
    const option1 = lcs(text1, text2, i + 1, j, memo);
    const option2 = lcs(text1, text2, i, j + 1, memo);
    memo[key] = Math.max(option1, option2);
  }
  
  return memo[key];
}
```

**Questions:**
1. What is the time complexity? How many unique subproblems are there?
2. Convert this to bottom-up DP using a 2D table.
3. Optimize space complexity to O(min(m, n)) using only two rows.
4. Modify to return the actual LCS string, not just its length.
5. Use LCS to implement a basic diff algorithm that shows lines added/removed/unchanged.

---

## 9. Sorting Algorithms in Production

### Q1 — Log File Analyzer

**Scenario:**
A log monitoring system receives millions of log entries per hour. Logs need to be sorted by timestamp for analysis, but the system is running out of memory.

```javascript
function sortLogs(logFile) {
  const logs = [];
  
  // Read all logs into memory
  for (const line of logFile) {
    const [timestamp, level, message] = line.split('|');
    logs.push({ timestamp: new Date(timestamp), level, message });
  }
  
  // Sort in memory
  logs.sort((a, b) => a.timestamp - b.timestamp);
  
  return logs;
}
```

**Questions:**
1. Why is this approach problematic for large log files (100 GB+)?
2. Research external merge sort and explain how it works for files larger than RAM.
3. Design a streaming sort algorithm that processes logs in chunks.
4. How would you parallelize sorting across multiple CPU cores?
5. If logs are already mostly sorted (recent entries appended), which sorting algorithm would be most efficient?

---

### Q2 — E-commerce Product Ranking

**Scenario:**
An e-commerce site ranks products by a complex score combining price, ratings, and popularity. Different users may want different sort orders.

```javascript
function rankProducts(products, userPreferences) {
  function calculateScore(product) {
    const priceScore = (1 - product.price / 10000) * userPreferences.priceWeight;
    const ratingScore = (product.rating / 5) * userPreferences.ratingWeight;
    const popularityScore = (product.sales / 100000) * userPreferences.popularityWeight;
    
    return priceScore + ratingScore + popularityScore;
  }
  
  // Calculate scores
  for (const product of products) {
    product.score = calculateScore(product);
  }
  
  // Sort by score
  products.sort((a, b) => b.score - a.score);
  
  return products;
}
```

**Questions:**
1. If userPreferences change frequently, recalculating and resorting is wasteful. How can you optimize?
2. Implement a caching strategy for precomputed scores with different weight combinations.
3. What if you only need the top 20 products? Implement a partial sort using a heap.
4. Design a system that incrementally updates rankings as new sales data comes in.
5. How would you A/B test different ranking algorithms without duplicating the product database?

---

### Q3 — Event Timeline Merger

**Scenario:**
A calendar app merges multiple event timelines (personal, work, shared calendars). Each timeline is already sorted, but the merged result needs to be sorted too.

```javascript
function mergeTimelines(timelines) {
  const allEvents = [];
  
  // Collect all events
  for (const timeline of timelines) {
    allEvents.push(...timeline.events);
  }
  
  // Sort combined events
  allEvents.sort((a, b) => a.startTime - b.startTime);
  
  return allEvents;
}
```

**Questions:**
1. What is the time complexity of this approach?
2. Since each timeline is already sorted, can you optimize this using k-way merge?
3. Implement k-way merge using a min-heap (priority queue).
4. Compare the time complexity of k-way merge vs. the naive approach.
5. How would you handle recurring events that expand into multiple occurrences?

---

### Q4 — Database Index Maintenance

**Scenario:**
A database maintains sorted indexes on table columns. When bulk inserts happen, the index needs to be updated efficiently.

```javascript
function updateIndex(existingIndex, newRecords) {
  // Naive approach: merge and re-sort
  const combined = [...existingIndex, ...newRecords];
  combined.sort((a, b) => a.value - b.value);
  return combined;
}
```

**Questions:**
1. What is the problem with this approach for large indexes (millions of records)?
2. Implement an incremental insert algorithm that maintains sorted order without full re-sort.
3. Research B-tree and explain why databases use it instead of sorted arrays.
4. Design a bulk insert optimization that sorts new records first, then merges.
5. How would you handle concurrent reads while the index is being updated?

---

### Q5 — Adaptive Sorting

**Scenario:**
A generic sorting library needs to automatically choose the best sorting algorithm based on input characteristics.

```javascript
function adaptiveSort(array) {
  // Currently just uses JavaScript's built-in sort
  return array.sort((a, b) => a - b);
}
```

**Questions:**
1. List scenarios where insertion sort would be faster than quick sort.
2. Implement a function that analyzes array characteristics (size, sortedness, duplicates).
3. Create a decision tree that chooses between insertion sort, quick sort, and merge sort.
4. JavaScript's V8 engine uses Timsort. Research and explain why it's adaptive.
5. Implement a hybrid sort that switches algorithms based on recursion depth (Introsort).

---

## 10. Merge Sort Applications

### Q1 — Counting Inversions

**Scenario:**
A music recommendation system measures how similar two users' preferences are by counting "inversions" - pairs where users ranked items in opposite order.

```javascript
function countInversions(rankings) {
  let inversions = 0;
  
  for (let i = 0; i < rankings.length; i++) {
    for (let j = i + 1; j < rankings.length; j++) {
      if (rankings[i] > rankings[j]) {
        inversions++;
      }
    }
  }
  
  return inversions;
}
```

**Questions:**
1. What is the current time complexity?
2. Inversions can be counted during merge sort. Explain how.
3. Implement a modified merge sort that counts inversions while sorting.
4. What is the optimized time complexity?
5. How would you use inversion count to compute similarity between user preferences?

---

### Q2 — External Sorting

**Scenario:**
A data processing pipeline needs to sort a 500 GB file on a machine with only 8 GB of RAM.

```javascript
function externalMergeSort(inputFile, outputFile, memoryLimit) {
  // Step 1: Create sorted runs
  const runs = [];
  let buffer = [];
  
  for (const record of readStream(inputFile)) {
    buffer.push(record);
    
    if (buffer.length * recordSize >= memoryLimit) {
      buffer.sort();
      const runFile = createTempFile();
      writeToFile(runFile, buffer);
      runs.push(runFile);
      buffer = [];
    }
  }
  
  // Handle remaining buffer
  if (buffer.length > 0) {
    buffer.sort();
    const runFile = createTempFile();
    writeToFile(runFile, buffer);
    runs.push(runFile);
  }
  
  // Step 2: Merge runs
  while (runs.length > 1) {
    const newRuns = [];
    for (let i = 0; i < runs.length; i += 2) {
      const merged = mergeTwoFiles(runs[i], runs[i + 1]);
      newRuns.push(merged);
    }
    runs = newRuns;
  }
  
  // Final output
  copyFile(runs[0], outputFile);
}
```

**Questions:**
1. If records are 1 KB each and memory limit is 8 GB, how many records per run?
2. With 500 GB of data, how many runs are created initially?
3. How many merge passes are needed?
4. What is the total I/O cost (data read + written)?
5. How would you optimize this using k-way merge instead of 2-way?

---

### Q3 — Distributed Sorting

**Scenario:**
A big data system (like MapReduce) needs to sort data across 1000 machines.

```javascript
function distributedSort(data, numMachines) {
  // Step 1: Partition data
  const partitions = partitionData(data, numMachines);
  
  // Step 2: Sort each partition locally
  const sortedPartitions = partitions.map(partition => {
    return mergeSort(partition);
  });
  
  // Step 3: Merge sorted partitions
  return kWayMerge(sortedPartitions);
}

function partitionData(data, k) {
  // Naive: round-robin assignment
  const partitions = Array(k).fill().map(() => []);
  
  for (let i = 0; i < data.length; i++) {
    partitions[i % k].push(data[i]);
  }
  
  return partitions;
}
```

**Questions:**
1. What is the problem with round-robin partitioning? (Hint: final merge is expensive)
2. Research and implement range partitioning using sampling.
3. How would you choose partition boundaries to ensure balanced load?
4. What network communication is needed? Estimate bandwidth requirements.
5. Compare this to Hadoop MapReduce's shuffle and sort phase.

---

### Q4 — Parallel Merge Sort

**Scenario:**
Optimize merge sort to use multiple CPU cores on a multi-core machine.

```javascript
function parallelMergeSort(array, maxThreads = 4) {
  if (array.length <= 1) return array;
  
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  
  // Sort both halves in parallel
  const leftPromise = sortAsync(left, maxThreads / 2);
  const rightPromise = sortAsync(right, maxThreads / 2);
  
  return Promise.all([leftPromise, rightPromise])
    .then(([sortedLeft, sortedRight]) => merge(sortedLeft, sortedRight));
}

async function sortAsync(array, threads) {
  if (threads < 1 || array.length < THRESHOLD) {
    return mergeSort(array);
  }
  return parallelMergeSort(array, threads);
}
```

**Questions:**
1. What is THRESHOLD and why is it important?
2. Analyze speedup: with 8 cores and 1M elements, what's the theoretical maximum speedup?
3. JavaScript is single-threaded. How would you actually implement this using Web Workers?
4. What are the overheads of parallelization (task creation, data copying)?
5. Compare parallel merge sort to parallel quick sort. Which parallelizes better?

---

### Q5 — Stable Sort Requirement

**Scenario:**
A spreadsheet application sorts data by multiple columns. The sort must be stable to preserve secondary sort orders.

```javascript
function multiColumnSort(data, columns) {
  // columns = ['date', 'priority', 'name'] - sort by these in order
  
  // Sort by columns in reverse order due to stability
  for (let i = columns.length - 1; i >= 0; i--) {
    const col = columns[i];
    data = stableSort(data, (a, b) => compare(a[col], b[col]));
  }
  
  return data;
}
```

**Questions:**
1. Why must the columns be sorted in reverse order?
2. Explain what "stable sort" means and why it matters here.
3. JavaScript's Array.sort() is not guaranteed to be stable (it was made stable in ES2019). How would you ensure stability in older browsers?
4. Implement a stable sort wrapper that guarantees stability by tracking original indices.
5. Instead of multiple passes, implement a single-pass sort with a composite comparator.

---

## 11. Quick Sort Optimization

### Q1 — Pivot Selection Strategy

**Scenario:**
A sorting library is slow on certain inputs. Analysis shows poor pivot selection causes O(n²) behavior.

```javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Current: always choose last element as pivot
    const pivot = arr[high];
    const pivotIndex = partition(arr, low, high, pivot);
    
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  return arr;
}
```

**Questions:**
1. On what inputs does "last element" pivot perform worst?
2. Implement median-of-three pivot selection (median of first, middle, last).
3. For random data, compare performance of last-element vs. median-of-three.
4. Implement random pivot selection. Why does randomization help?
5. Research "dual-pivot quicksort" (used in Java). What are its advantages?

---

### Q2 — Handling Duplicates

**Scenario:**
A data processing system sorts records with many duplicate keys (e.g., customer cities). Standard quicksort is slow on this data.

```javascript
function quickSortWithDuplicates(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    
    // Problem: many elements equal to pivot are processed in both recursive calls
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}
```

**Questions:**
1. Why are duplicates problematic for standard quicksort?
2. Implement 3-way partitioning (Dutch National Flag algorithm) to handle duplicates efficiently.
3. After 3-way partitioning, what are the three regions of the array?
4. Compare performance on highly duplicate data (90% same value) with standard vs. 3-way quicksort.
5. When would 3-way partitioning perform worse than standard quicksort?

---

### Q3 — Hybrid Quicksort

**Scenario:**
Profiling shows quicksort spends significant time on small subarrays due to recursion overhead.

```javascript
function hybridQuickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    hybridQuickSort(arr, low, pivotIndex - 1);
    hybridQuickSort(arr, pivotIndex + 1, high);
  }
}
```

**Questions:**
1. At what array size does recursion overhead become significant?
2. Implement a hybrid that switches to insertion sort for small subarrays (< 10 elements).
3. Benchmark different threshold values (5, 10, 20, 50). What's optimal?
4. Why is insertion sort fast on small arrays despite being O(n²)?
5. Research Introsort (used in C++ STL). What problem does it solve?

---

### Q4 — Tail Call Optimization

**Scenario:**
Quicksort on nearly sorted data causes stack overflow due to deep recursion.

```javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high); // Tail call
  }
}
```

**Questions:**
1. What is maximum recursion depth in worst case?
2. Implement iterative quicksort using an explicit stack.
3. Implement tail-recursion optimization: always recurse on smaller partition, iterate on larger.
4. What is maximum stack size with tail-recursion optimization?
5. Does JavaScript optimize tail calls? Research TC39 proposal status.

---

### Q5 — Parallel Quicksort

**Scenario:**
Sort a large dataset using all available CPU cores.

```javascript
function parallelQuickSort(arr, maxThreads = 4) {
  if (arr.length <= THRESHOLD || maxThreads <= 1) {
    return quickSort(arr);
  }
  
  const pivotIndex = partition(arr, 0, arr.length - 1);
  const left = arr.slice(0, pivotIndex);
  const right = arr.slice(pivotIndex + 1);
  
  const leftPromise = sortAsync(left, maxThreads / 2);
  const rightPromise = sortAsync(right, maxThreads / 2);
  
  return Promise.all([leftPromise, rightPromise])
    .then(([sortedLeft, sortedRight]) => {
      return [...sortedLeft, arr[pivotIndex], ...sortedRight];
    });
}
```

**Questions:**
1. What is the optimal THRESHOLD value?
2. Compare parallel speedup of quicksort vs. merge sort. Which parallelizes better?
3. What happens if data is already sorted? Does parallelization help?
4. Implement work stealing: idle threads steal work from busy threads' stacks.
5. How would you implement this in Node.js using worker threads?

---

## 12. Higher-Order Functions & Closures

### Q1 — Function Throttling

**Scenario:**
A search autocomplete makes too many API requests. Implement throttling to limit requests to once per 300ms.

```javascript
function throttle(func, delay) {
  let lastCall = 0;
  
  return function(...args) {
    const now = Date.now();
    
    if (now - lastCall >= delay) {
      lastCall = now;
      return func(...args);
    }
  };
}

// Usage
const searchAPI = (query) => fetch(`/api/search?q=${query}`);
const throttledSearch = throttle(searchAPI, 300);
```

**Questions:**
1. What's the difference between throttle and debounce? When would you use each?
2. This implementation doesn't handle returned values or promises well. Fix it.
3. Add a "leading" and "trailing" option to control when function executes.
4. The current implementation loses intermediate calls. Is this desired behavior?
5. Implement a token bucket algorithm for more sophisticated rate limiting.

---

### Q2 — Memoization with TTL

**Scenario:**
A data dashboard makes expensive calculations. Cache results, but invalidate cache entries after 5 minutes.

```javascript
function memoizeWithTTL(func, ttl = 5 * 60 * 1000) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    const cached = cache.get(key);
    
    if (cached && Date.now() - cached.timestamp < ttl) {
      return cached.value;
    }
    
    const result = func(...args);
    cache.set(key, { value: result, timestamp: Date.now() });
    
    return result;
  };
}
```

**Questions:**
1. What happens if cache grows unbounded? Implement LRU eviction.
2. JSON.stringify is slow for complex objects. What alternatives exist?
3. What if the function is async? Modify to handle promises correctly.
4. Implement cache warming: preload cache with expected queries on startup.
5. How would you distribute this cache across multiple server instances?

---

### Q3 — Middleware Pipeline

**Scenario:**
A web framework processes requests through a chain of middleware functions.

```javascript
function createMiddlewarePipeline(middlewares) {
  return function(request) {
    let index = 0;
    
    function next() {
      if (index < middlewares.length) {
        const middleware = middlewares[index++];
        return middleware(request, next);
      }
    }
    
    return next();
  };
}

// Usage
const pipeline = createMiddlewarePipeline([
  (req, next) => { console.log('Auth'); return next(); },
  (req, next) => { console.log('Logging'); return next(); },
  (req, next) => { console.log('Handler'); return 'Response'; }
]);
```

**Questions:**
1. What happens if a middleware forgets to call `next()`?
2. Add error handling: if any middleware throws, catch and pass to error handler.
3. Make this work with async middleware (promises).
4. Implement a "bail" mechanism: middleware can return early without calling next.
5. Add support for post-processing: execute code after next() returns.

---

### Q4 — Function Composition

**Scenario:**
A data transformation pipeline needs to apply multiple transformations in sequence.

```javascript
function compose(...functions) {
  return function(input) {
    let result = input;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
}

// Usage
const addTax = (price) => price * 1.1;
const addShipping = (price) => price + 5;
const formatPrice = (price) => `$${price.toFixed(2)}`;

const calculateTotal = compose(formatPrice, addShipping, addTax);
console.log(calculateTotal(100)); // "$115.00"
```

**Questions:**
1. Implement `pipe` (same as compose but left-to-right instead of right-to-left).
2. Make compose work with async functions (promises).
3. Add type checking: ensure each function's output type matches next function's input type.
4. Implement a parallel compose: run all functions on input and combine results.
5. Research transducers and explain how they optimize composed map/filter operations.

---

### Q5 — Lazy Evaluation

**Scenario:**
A data processing library chains operations on large datasets. Eager evaluation processes entire arrays at each step.

```javascript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Eager: processes entire array three times
const result = data
  .map(x => x * 2)       // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
  .filter(x => x > 10)   // [12, 14, 16, 18, 20]
  .slice(0, 2);          // [12, 14]
// Total operations: 10 map + 10 filter = 20 operations
```

**Questions:**
1. Explain why eager evaluation is wasteful here (only 2 results needed).
2. Implement a lazy evaluation wrapper that delays execution until terminal operation.
3. Design an iterator-based approach that processes one element at a time.
4. Compare memory usage: eager vs. lazy for 1 million element array.
5. JavaScript generators can implement lazy evaluation. Rewrite using generators.

---

## 13. Functional Programming Patterns

### Q1 — Transducers

**Scenario:**
A data analytics pipeline chains map/filter/reduce operations on millions of records. Current implementation creates intermediate arrays.

```javascript
const transactions = [...]; // millions of records

// Current: creates intermediate arrays
const result = transactions
  .filter(t => t.amount > 100)
  .map(t => t.amount)
  .reduce((sum, amount) => sum + amount, 0);
```

**Questions:**
1. How many intermediate arrays are created? What's the memory overhead?
2. Research transducers and explain how they eliminate intermediate arrays.
3. Implement a transducer-based solution that processes one element at a time.
4. Compare performance: eager chaining vs. transducers for 1M records.
5. Can transducers work with async iterables (streams)? Implement an example.

---

### Q2 — Currying and Partial Application

**Scenario:**
A validation library needs flexible, reusable validators.

```javascript
// Current: validators are rigid
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateLength(str, min, max) {
  return str.length >= min && str.length <= max;
}

// Usage is verbose
const isValidPassword = (pwd) => validateLength(pwd, 8, 20);
```

**Questions:**
1. Implement a curry function that transforms validateLength into a curried function.
2. Create a partial application helper that "locks in" some arguments.
3. Build a validation DSL: `const isValidPassword = minLength(8).and(maxLength(20))`.
4. Implement function composition for validators: `compose(notEmpty, isEmail)`.
5. How would you handle async validators (e.g., check if email exists in database)?

---

### Q3 — Immutable Updates

**Scenario:**
A state management system (like Redux) requires immutable updates to nested objects.

```javascript
const state = {
  user: {
    profile: {
      name: 'John',
      address: {
        city: 'New York',
        zip: '10001'
      }
    }
  }
};

// Current: deeply nested update is verbose
const newState = {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      address: {
        ...state.user.profile.address,
        city: 'Boston'
      }
    }
  }
};
```

**Questions:**
1. Implement a lens-based approach: `set(userAddressCityLens, 'Boston', state)`.
2. Create an immutable update helper: `update(state, 'user.profile.address.city', 'Boston')`.
3. Research Immer library. How does it use Proxies to enable mutable-like syntax?
4. What are the performance implications of deep cloning on every update?
5. Implement structural sharing: only clone the path that changed, reuse unchanged branches.

---

### Q4 — Monads for Error Handling

**Scenario:**
An API client makes sequential requests where each depends on the previous. Error handling with promises is verbose.

```javascript
async function getUserData(userId) {
  try {
    const user = await fetchUser(userId);
    if (!user) throw new Error('User not found');
    
    const profile = await fetchProfile(user.profileId);
    if (!profile) throw new Error('Profile not found');
    
    const posts = await fetchPosts(profile.id);
    if (!posts) throw new Error('Posts not found');
    
    return { user, profile, posts };
  } catch (error) {
    console.error(error);
    return null;
  }
}
```

**Questions:**
1. Implement a Result monad (Either) that wraps success/failure without exceptions.
2. Rewrite getUserData using Result monad with chainable operations.
3. Compare exception-based vs. Result monad error handling. What are trade-offs?
4. Implement a Maybe monad for handling null/undefined values.
5. Research Railway Oriented Programming and explain how it applies here.

---

### Q5 — Generators for Infinite Sequences

**Scenario:**
A math library needs to generate infinite sequences (Fibonacci, primes) efficiently.

```javascript
// Current: limited to array size
function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i-1] + seq[i-2]);
  }
  return seq;
}

// Problem: must know n in advance, uses memory for entire sequence
```




