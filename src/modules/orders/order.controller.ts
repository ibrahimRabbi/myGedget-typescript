import { Request, Response } from "express"
import { insertOrderService } from "./order.services"


export const insertOrder = async (req: Request, res: Response) => {

   try{
       const inserted = await insertOrderService(req.body)
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