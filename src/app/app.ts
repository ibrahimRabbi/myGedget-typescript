import express from 'express'
import mongoose from 'mongoose'
import configVar from './config'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())


 


async function main() {
    await mongoose.connect(configVar.databaseUrl as string);




    app.listen(5000, () => {
        console.log(`server is running on ${configVar.port} `)
    })
     
}

main()