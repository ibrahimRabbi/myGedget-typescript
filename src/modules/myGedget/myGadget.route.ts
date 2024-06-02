import express, { Request, Response } from 'express'
import {  getAllProducts, getSingleProduct, insertProduct, updateProduct } from "./controller";

export const routes = express.Router()

routes.post('/post-data', insertProduct)

routes.get('/get-product/:id', getSingleProduct)

routes.get('/get-allproduct', getAllProducts)

routes.put('/update-product/:id',updateProduct)