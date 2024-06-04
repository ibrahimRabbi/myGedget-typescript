import express from 'express';
import { getAllOrders, insertOrder } from './order.controller';

export const orderRoute = express.Router()

orderRoute.post('/', insertOrder)

orderRoute.get('/', getAllOrders)