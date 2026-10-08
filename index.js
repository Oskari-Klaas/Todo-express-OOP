import express from 'express'
import bodyParser from 'body-parser'

import todoRoutes from './routes/todos.js'

/* Create web serer application */
const app = express();
/*allows the server to read JSON data */
app.use(express.urlencoded({ extended: true }));

app.use('/todos', todoRoutes)

/* Creates a simple server */
app.listen(3009, () => {
    console.log('Server is running on port 3009');
})