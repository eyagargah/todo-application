const express = require('express')
const PORT = 8000

const { MongoClient } = require('mongodb')
const uri = 'mongodb+srv://gargaheya:mypassword@cluster0.nfdu7oj.mongodb.net/'

const app = express()

app.use(express.json())
/*******Cors********/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, HEAD, POST, PUT, DELETE, OPTIONS"
    );
    next();
  });


app.get('/', (req , res)=> {
    res.json('hello from my app')
})

app.get('/tasks', async(req , res)=> {
    const client = new MongoClient(uri)
    try {
        await client.connect()
        const db = client.db('app-data')
        const tasks = db.collection('task')

        const returnedTasks = await tasks.find().toArray()

        res.send(returnedTasks)
    } finally{
        await client.close()
    }
})

app.post('/', async(req , res)=> {
    const client = new MongoClient(uri)
    const { task , completed } = req.body
    
    try {
        await client.connect()
        const db = client.db('app-data')
        const tasks = db.collection('task')

        const data = {
            task : task,
            completed: completed
        }
        await tasks.insertOne(data)
    } finally{
        await client.close()
    }
})
app.listen(PORT , ()=> console.log('Server running on port : '+ PORT))