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