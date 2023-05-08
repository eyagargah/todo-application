const express = require('express')
const PORT = 8000

const { MongoClient } = require('mongodb')
const uri = 'mongodb+srv://gargaheya:mypassword@cluster0.nfdu7oj.mongodb.net/'

const app = express()

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
app.listen(PORT , ()=> console.log('Server running on port : '+ PORT))