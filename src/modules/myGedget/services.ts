import { ProductInterface } from "./interface";
import { productModel } from "./model";

export const postData = async (data: ProductInterface) => {
    const insert = await productModel.create(data)
    return insert
}

export const getDataById = async (id:string) => {
    const finding = await productModel.findById({ _id: id })
    return finding
}


export const getAllData = async () => {
    const finding = await productModel.find()
    return finding
}

export const updateData = async (id: string) => {
    const filter = { _id: id }
    const feild = { 
        $set:{
            name: 'redmi note 9 pro'
        }
     }
    const updating = await productModel.updateOne(filter, feild)
    return updating
}


export const deleteData = async (id: string) => {
    const deleting = await productModel.deleteOne({ _id: id })
    return deleting
}