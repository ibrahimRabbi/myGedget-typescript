import express from 'express'
import mongoose from 'mongoose'
import configVar from './app/config/config'
import cors from 'cors'
 
import { productRoute } from './app/modules/myGedget/myGadget.route'
import { orderRoute } from './app/modules/orders/order.route'


const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)

 


async function main() {
    await mongoose.connect(configVar.databaseUrl as string);




    app.listen(configVar.port, () => {
        console.log(`server is running on ${configVar.port} `)
    })
     
}

main()