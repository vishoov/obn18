import express from 'express';
import { getTodos, getById, createTodo, updateById } from '../controller/todo.controller.js';


const router = express.Router();

// get all todos
router.get("/", getTodos)

// get a todo by id 
router.get('/:id', getById)


// create a todo 
router.post("/new", createTodo)

// update a todo by id
router.put('/:id', updateById)


//delete a todo by id



export default router;