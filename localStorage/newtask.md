# 📘 Smart Task Manager — Project Documentation

---

# 📌 Project Overview

The **Smart Task Manager** is an advanced JavaScript project built using:

- Object-Oriented Programming (OOP)
- DOM Manipulation
- Event Delegation
- LocalStorage

The application allows users to:

- Add tasks
- Edit tasks
- Delete tasks
- Mark tasks as completed
- Filter tasks
- Persist tasks using browser storage

---

# 🚀 Features

## ✅ Add Tasks
Users can create tasks with:

- Task title
- Priority level
- Due date

---

## ✅ Edit Tasks
Users can modify an existing task title dynamically.

---

## ✅ Delete Tasks
Tasks can be permanently removed from:

- UI
- LocalStorage

---

## ✅ Toggle Task Completion
Users can mark tasks as:

- Completed
- Pending

Completed tasks display a line-through effect.

---

## ✅ Filter Tasks

Available filters:

- All Tasks
- Completed Tasks
- Pending Tasks

---

## ✅ LocalStorage Support

All tasks are automatically saved inside browser LocalStorage.

Tasks remain available after:

- Browser refresh
- Browser restart

---

# 🧱 Project Architecture

The project follows an Object-Oriented approach.

---

# 📦 Classes Used

## 1. `Task` Class

Responsible for creating individual task objects.

### Properties

```javascript
id
title
priority
dueDate
completed
```

### Methods

```javascript
toggle()
```

---

## 2. `TaskManager` Class

Responsible for:

- DOM manipulation
- Event handling
- Rendering tasks
- LocalStorage management
- Business logic

---

# 🖥 DOM Elements

| Element | Purpose |
|---|---|
| `#title` | Task title input |
| `#priority` | Priority dropdown |
| `#dueDate` | Due date input |
| `#addBtn` | Add task button |
| `#taskList` | Task container |
| `[data-filter]` | Filter buttons |

---

# ⚡ Core Concepts Used

---

## ✅ Object-Oriented Programming (OOP)

The application uses JavaScript classes to separate:

- Data
- Logic
- UI behavior

This improves:

- Maintainability
- Scalability
- Readability

---

## ✅ Event Delegation

Instead of attaching event listeners to every button:

- One listener is attached to the task list container.

Used for:

- Delete
- Edit
- Toggle Complete

---

## ✅ LocalStorage

Tasks are stored using:

```javascript
localStorage.setItem()
localStorage.getItem()
```

This enables persistent browser storage.

---

## ✅ Dynamic Rendering

Tasks are dynamically rendered using:

```javascript
Array.map()
Template Literals
innerHTML
```

---

# 📂 File Structure

```bash
project-folder/
│
├── index.html
├── app.js
└── README.md
```

---

# ▶️ How to Run the Project

## Step 1

Create the following files:

```bash
index.html
app.js
```

---

## Step 2

Paste the provided HTML and JavaScript code.

---

## Step 3

Open:

```bash
index.html
```

inside the browser.

---

# 🧪 Functional Testing Checklist

---

## Add Task

- [ ] Task appears in UI
- [ ] Task saves in LocalStorage

---

## Delete Task

- [ ] Task removed from UI
- [ ] Task removed from LocalStorage

---

## Edit Task

- [ ] Task title updates correctly
- [ ] Changes persist after refresh

---

## Toggle Completion

- [ ] Task state changes visually
- [ ] State persists after refresh

---

## Filter Tasks

- [ ] All filter works
- [ ] Completed filter works
- [ ] Pending filter works

---

# 🏁 Conclusion

This project demonstrates how real-world frontend applications manage:

- UI updates
- Application state
- Persistent browser data
- User interactions

without relying on frontend frameworks like React or Vue.