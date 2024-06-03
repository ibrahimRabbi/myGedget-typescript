import { Schema, model } from "mongoose";
import { OrederInterface } from "./order.intrerface";

const orderSchema = new Schema<OrederInterface>({
    email: { type: String, unique: true, required: true, trim: true },
    productId: { type: String, unique: true, required: true },
    price: { type: Number, required: true, trim: true, max: [5000, 'price must be less then 5000'] },
    quantity:{type:Number,required:true,trim:true}
})

export const orderModel = model<OrederInterface>('orders',orderSchema)