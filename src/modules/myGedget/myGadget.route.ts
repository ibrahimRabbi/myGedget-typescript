import express, { Request, Response } from 'express'
import {  getAllProducts, getSingleProduct, insertProduct } from "./controller";

export const routes = express.Router()

routes.post('/post-data', insertProduct)

routes.get('/get-product/:id', getSingleProduct)

routes.get('/get-allproduct', getAllProducts)
