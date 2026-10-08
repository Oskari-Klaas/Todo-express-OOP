import express, { Router } from 'express'
import { TodoController } from '../controllers/todos.js'


// dont quite understand but it creates a router to define my web routes
const router = Router()

// POST= write and or create into the list, when someone visits the /new-todo route it will call the createTodo function in the todoController class 
router.post('/new-todo', (req, res) => TodoController.createTodo(req, res))
// GET = read and or view the list
router.get('/', (req, res) => TodoController.getTodos(req, res))

export default router
