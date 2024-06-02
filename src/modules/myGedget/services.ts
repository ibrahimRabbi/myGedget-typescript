import { ProductInterface } from "./interface";
import { productModel } from "./model";

export const postData = async (data: ProductInterface) => {
    const insert = await productModel.create(data)
    return insert
}