import express, { Request, Response } from 'express'
import {  deleteProduct, getAllProducts, getSingleProduct, insertProduct, updateProduct } from "./controller";

export const routes = express.Router()

routes.post('/', insertProduct)

routes.get('/:id', getSingleProduct)

routes.get('/', getAllProducts)

routes.put('/:id', updateProduct)

routes.delete('/:id',deleteProduct)