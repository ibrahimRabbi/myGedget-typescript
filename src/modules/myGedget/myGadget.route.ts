import express  from 'express'
import {  deleteProduct, getAllProducts, getSingleProduct, insertProduct,  updateProduct } from "./controller";

export const productRoute = express.Router()

productRoute.post('/', insertProduct)

productRoute.get('/:id', getSingleProduct)

productRoute.get('/', getAllProducts)

productRoute.put('/:id', updateProduct)

productRoute.delete('/:id', deleteProduct)

// productRoute.search('/', searchProduct)