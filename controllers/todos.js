import { Todo } from '../models/todo.js'

// just makes a list and manages the functions or whatevs
class todoController {
    constructor() {
        this.TODOS = []
    }


    // function that creates a new todo and pushes it to the list of todos
    createTodo(req, res){
        const task = req.body.task
        // creates the new todo
        const newTodo = new Todo(Math.random().toString(), task)
        // pushes it into the list
        this.TODOS.push(newTodo)
        // res = send out stuff aka a response to the user
        res.json({
            message: 'created new todo object',
            // explains to the user what the new task is
            newTask: newTodo
        })
    }
}

export const TodoController = new todoController()