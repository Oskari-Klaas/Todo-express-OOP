import express from 'express'
import bodyParser from 'body-parser'


/* Create web serer application */
const app = express();

/*allows the server to read JSON data */
app.use(bodyParser.json());

/* when someone visits then sends them a JSON message*/
app.get('/json-test'/* <---- name of website route aka redirectory */, (req, res) => {
    res.send({
        message: 'json test ok'
    })
})


/* Creates a simple server */
app.listen(3009, () => {
    console.log('Server is running on port 3009');
})