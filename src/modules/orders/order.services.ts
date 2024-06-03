import { productModel } from "../myGedget/model";
import { OrederInterface } from "./order.intrerface";
import { orderModel } from "./order.model";


export const insertOrderService = async (data: OrederInterface) => {
    const inserting = await orderModel.create(data)

    if (inserting.productId) {   
        const id = { _id: data.productId }
        const findData = await productModel.findById(id)
        const totalQunty: unknown = findData?.inventory.quantity
        if (typeof totalQunty === 'number') {
            const change = { $set: { 'inventory.quantity': totalQunty - data.quantity } }
            const update = await productModel.updateOne(id, change)
            console.log(update)
            return inserting
        }
       
    }
}


export const getAllOrderService = async (obj: object = {}) => {
    const finding = await orderModel.find(obj)
    return finding
}