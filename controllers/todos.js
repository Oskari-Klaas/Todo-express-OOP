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

    getTodos(req, res){
        res.json({tasks: this.TODOS})
    }

    updateTodo(req, res){
        // gets the id and task 
        //params = the like /blank at the end of the url
        const todoId = req.params.id
        const updatedTask = req.body.task

        //logs it into the console
        console.log(req.body)
        console.log(req.params)

        //checks if the todo exists within the list
        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)

        //if it dont throw up an error and skip EVERYTHING else
        if(todoIndex < 0 ){
            res.json({
                message: 'could not find todo with such index'
            })
            throw new Error('Could not find todo')
        }

        //if it does exist then update the task with the new task
        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask)
        res.json({
            message: 'todo is updated',
            updatedTask: this.TODOS[todoIndex]
        })
    }
}


export const TodoController = new todoController()