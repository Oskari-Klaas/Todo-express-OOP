import express, { Router } from 'express'
import { TodoController } from '../controllers/todos.js'


// dont quite understand but it creates a router to define my web routes
const router = Router()

// POST= write and or create into the list, when someone visits the /new-todo route it will call the createTodo function in the todoController class 
router.post('/new-todo', (req, res) => TodoController.createTodo(req, res))
// GET = read and or view the list
router.get('/', (req, res) => TodoController.getTodos(req, res))
// PATCH = update and or edit the list, when someone visits the /:id route it will call the updateTodo function in the todoController class
router.patch('/:id', (req, res) => TodoController.updateTodo(req, res))
// DELETE = delete and or remove from the list, when someone visits the /:id route it will call the DeleteTodo function in the todoController class
router.delete('/:id', (req, res) => TodoController.DeleteTodo(req, res))

export default router
