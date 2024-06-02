import { Request, Response } from "express"
import { postData } from "./services"



export const postDataController = async (req: Request, res: Response) => {
    
    try {
        const inseted = await postData(req?.body)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: inseted
        })
    } catch (error:any) {
        res.status(500).json({
            success: false,
            message: error.message, 
        })
 }
}