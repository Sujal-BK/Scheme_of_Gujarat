import express from 'express'
import dotenv from 'dotenv'
import DBConnection from './DBConfig/Connection.js'
import schemeRouter from './Router/scheme.router.js'
import authRouter from './Router/user.router.js'
import cors from 'cors'
dotenv.config()


const app = express()

const port = process.env.PORT

DBConnection()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/scheme',schemeRouter)
app.use('/auth',authRouter)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})



