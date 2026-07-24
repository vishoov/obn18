
import { todos } from "../db/todos.inmemory.js"

const getTodos = (req, res)=>{
    res.json(todos)
}

const getById = (req, res)=>{
try{
    const id = req.params.id;
    const todo = todos.find((todo)=> todo.id==id);
    if(!todo){
        throw new Error("Not Found")
    }
    res.status(200).json({
        todo,
        success:true,

    })
}catch(err){
    res.status(500).json({
        success:false,
        message:err.message,
    })
}
}


const createTodo = (req, res)=>{
    const {title, priority} = req.body;

    const id = todos.length+1;
    const status = "pending";

    const todo = {
        id,
        title,
        status,
        priority
    }

    todos.push(todo);

    res.send(todos)
}

const updateById = (req, res)=>{
    const id = Number(req.params.id);
    const { title, priority, status } = req.body;

    console.log(todos)
    const todo = todos.map(todo=>{
        if(todo.id==id){
            todo.title = title;
            todo.status = status;
            todo.priority = priority
        }

        return todo;
        
            
    })



    res.send(todos)
}


export {
    getTodos,
    getById,
    createTodo,
    updateById
}