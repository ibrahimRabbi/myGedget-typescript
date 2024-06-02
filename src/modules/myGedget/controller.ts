import { Request, Response } from "express"
import { getAllData, getDataById, postData, updateData } from "./services"
import { joiValidation } from "./joi.validation";






export const insertProduct = async (req: Request, res: Response) => {

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




export const getSingleProduct = async (req: Request, res: Response) => {
    const id = req.params?.id

    try {
        const data = await getDataById(id)
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: data
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }

}



export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const allData = await getAllData()
        res.status(200).json({
            success: true,
            message: "All Product fetched successfully!",
            data: allData
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}



export const updateProduct = async (req:Request, res:Response) => {
    const updating = await updateData(req.params.id)
    console.log(updating)
}