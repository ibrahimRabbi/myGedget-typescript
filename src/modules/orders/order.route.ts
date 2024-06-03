import express from 'express';
import { insertOrder } from './order.controller';

export const orderRoute = express.Router()

orderRoute.post('/', insertOrder)