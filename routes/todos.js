import express, { Router } from 'express'
import { TodoController } from '../controllers/todos.js'


// dont quite understand but it creates a router to define my web routes
const router = Router()

// when someone visits the /new-todo route it will call the createTodo function in the todoController class
router.post('/new-todo', (req, res) => TodoController.createTodo(req, res))

export default router
