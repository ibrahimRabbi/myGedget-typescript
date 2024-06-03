import { OrederInterface } from "./order.intrerface";
import { orderModel } from "./order.model";


export const insertOrderService = async (data: OrederInterface) => {
    const inserting = await orderModel.create(data)
    return inserting
}


export const getAllOrderService = async (obj: object = {}) => {
    const finding = await orderModel.find(obj)
    return finding
}