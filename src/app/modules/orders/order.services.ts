import { productModel } from "../myGedget/model";
import { OrederInterface } from "./order.intrerface";
import { orderModel } from "./order.model";


export const insertOrderService = async (data: OrederInterface) => {

    const id = { _id: data.productId }
    const findData = await productModel.findById(id)
    const totalQunty: any = findData?.inventory.quantity


    if (totalQunty < data.quantity) {
        throw new Error('Insufficient quantity available in inventory')
    } else {
        const inserting = await orderModel.create(data)
        const change = {
            $set: {
                'inventory.quantity': totalQunty < 1 ? 0 : totalQunty - data.quantity,
                'inventory.inStock': totalQunty < 1 ? false : true
            }
        }
        const update = await productModel.updateOne(id, change)
        console.log(update)
        return inserting
    }


}


export const getAllOrderService = async (obj: object = {}) => {
    const finding = await orderModel.find(obj)
    return finding
}


