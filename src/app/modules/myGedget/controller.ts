import { Request, Response } from "express"
import { deleteData, getAllData, getDataById, postData, updateData } from "./services"
import { joiValidation } from "./joi.validation";
import { errorObject, successObject } from "../../utility/responseObject";



export const insertProduct = async (req: Request, res: Response) => {

    try {
        const { error, value } = joiValidation.validate(req?.body);
        if (error) {
            res.status(500).json(errorObject(error.details))
        }
        const inseted = await postData(value)
        res.status(200).json(successObject("Product created successfully!",inseted))
    } catch (error: any) {
        res.status(500).json(errorObject(error.message))
    }
}




export const getSingleProduct = async (req: Request, res: Response) => {
    const id = req.params?.id

    try {
        const data = await getDataById(id)
        res.status(200).json(successObject("Product fetched successfully!",data))
    } catch (error: any) {
        res.status(500).json(errorObject(error.message))
    }

}


/*****************************get all product and search product API**********************************/

export const getAllProducts = async (req: Request, res: Response) => {
    const queryParam = req.query.searchTerm

    if (queryParam) {
        try {
            const allData = await getAllData({ name: { $regex: queryParam, $options: 'i' } })
            res.status(200).json(successObject(`${queryParam} search successfull`,allData))
        } catch (error: any) {
            res.status(500).json(errorObject('your expected data did not found'))
        }
    } else {
        try {
            const allData = await getAllData({})
            res.status(200).json(successObject("All Product fetched successfully!",allData))
        } catch (error: any) {
            res.status(500).json(errorObject(error.message))
        }
    }
    
}





export const updateProduct = async (req:Request, res:Response) => {
    
    try {
        const updating = await updateData(req.params.id)
        res.status(200).json(successObject("Product updated successfully!",updating))
    } catch (error: any) {
        res.status(500).json(errorObject(error.message))
    }
     
}


export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const deleted = await deleteData(req.params.id)
        res.status(200).json(successObject("Product has been deleted successfully!", deleted))
    } catch (error: any) {
        res.status(500).json(errorObject(error.message))
    }
}



// export const searchProduct = (req:Request,res:Response) => {
//     const query = req.query
//     console.log(query)
// }