import express from 'express'
import mongoose from 'mongoose'
import configVar from './config'
import cors from 'cors'
import { routes } from '../modules/myGedget/myGadget.route'


const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/products', routes)


 


async function main() {
    await mongoose.connect(configVar.databaseUrl as string);




    app.listen(configVar.port, () => {
        console.log(`server is running on ${configVar.port} `)
    })
     
}

main()