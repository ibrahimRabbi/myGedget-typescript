import { Request, Response } from "express"
import { postData } from "./services"
import { joiValidation } from "./joi.validation";




export const postDataController = async (req: Request, res: Response) => {

    try {
        const { error, value } = joiValidation.validate(req?.body);
        if (error) {
            res.status(500).json({
                success: false,
                message: error.details,
            })
        }
        const inseted = await postData(value)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: inseted
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}