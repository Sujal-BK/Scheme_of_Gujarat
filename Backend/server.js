import express from 'express'
import dotenv from 'dotenv'
import DBConnection from './DBConfig/Connection.js'
dotenv.config()


const app = express()

const port = process.env.PORT

DBConnection()

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})



