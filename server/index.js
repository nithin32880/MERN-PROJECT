const express = require('express')
const cors = require('cors')
const {MongoClient, ObjectId} = require('mongodb')
const app=express()

 app.use(cors())
 app.use(express.json())
 const client = new MongoClient('mongodb+srv://admin2:admin2@cluster0.rzho4vt.mongodb.net/?retryWrites=true&w=majority')
 client.connect()
 const db =client.db('counseling1')
 const col =db.collection('register')
 //col.insertOne({'student':"123"})

app.post('/register',(req,res)=>{
col.insertOne(req.body)
res.send('Inserted successfully')
})
app.get('/retrieve',async (req,res)=>{
    const result =await col.find().toArray()
    console.log(result)
    res.send(result)
})
app.get('/', (req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.get('/about', (req,res)=>{
    res.send('<h1>This is about page</h1>')
})
app.post('/register',(req,res)=>{
    col1.insertOne(req.body)
    res.send("inserted successfully")
})

app.get('/retrieve',async (req,res)=>{
    const result=await col1.find().toArray()
    console.log(result)
    res.send(result)
})
app.put('/users/:id',async (req,res)=>{
    const {id}=req.params;
    const {name,role,email,password}=req.body;
    const result=col1.updateOne({_id:new ObjectId(id)},
    {$set:{name:name,role:role,email:email,password:password}})
    res.send('updated')

})
app.delete('/users/:id',async(req,res)=>{
    const {id}=req.params
     const result=await col1.deleteOne({_id:new ObjectId(id)})
     res.json({message:"deleted successfully"})
})

app.listen('8080', ()=>{
    console.log('server is running')})
