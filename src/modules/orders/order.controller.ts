import { Request, Response } from "express"
import { getAllOrderService, insertOrderService } from "./order.services"
import { orderValidation } from "./order.validation"


export const insertOrder = async (req: Request, res: Response) => {
    const { error, value } = orderValidation.validate(req.body)
    if (error) {
        res.status(404).json({
            success: false,
            message: error.details,
        })
    }

   try{
       const inserted = await insertOrderService(value)
       res.status(200).json({
           success: true,
           message: "Order created successfully!",
           data: inserted
       })
   } catch (error: any) {
       res.status(404).json({
           success: false,
           message: error.message,
       })
   }
    
}


export const getAllOrders = async (req: Request, res: Response) => {
    const queryEmail = req.query.email
    if (queryEmail) {
        try {
            const data = await getAllOrderService({email:queryEmail})
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: data
            })
        } catch (err: any) {
            res.status(404).json({
                success: false,
                message: err.message,
            })
        }
    } else {
        try {
            const data = await getAllOrderService({})
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: data
            })
        } catch (err: any) {
            res.status(404).json({
                success: false,
                message: err.message,
            })
        }
    } 
}