import { Request, Response } from "express"
import { getAllOrderService, insertOrderService } from "./order.services"
import { orderValidation } from "./order.validation"
import { errorObject, successObject } from "../../utility/responseObject"


export const insertOrder = async (req: Request, res: Response) => {
    const { error, value } = orderValidation.validate(req.body)
    if (error) {
        res.status(404).json(errorObject(error.details))
    }

   try{
       const inserted = await insertOrderService(value)
       res.status(200).json(successObject("Order created successfully!",inserted))
   } catch (error: any) {
       res.status(404).json(errorObject(error.message))
   }
    
}


export const getAllOrders = async (req: Request, res: Response) => {
    const queryEmail = req.query.email
    if (queryEmail) {
        try {
            const data = await getAllOrderService({email:queryEmail})
            res.status(200).json(successObject("Orders fetched successfully!",data))
        } catch (err: any) {
            res.status(404).json(errorObject('order data not found'))
        }

    } else {
        try {
            const data = await getAllOrderService({})
            res.status(200).json(successObject("all Orders fetched successfully",data))
        } catch (err: any) {
            res.status(404).json(errorObject('all order data not found'))
        }
    } 
}