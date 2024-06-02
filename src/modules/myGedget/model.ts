import { Schema, model } from "mongoose";
import { ProductInterface } from "./interface";


const productSchema = new Schema<ProductInterface>({
    name: { type: String, required: true, trim: true, maxlength: [15, 'product name maximum 15 character applicable'] },
    price: { type: Number, required: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true },
    variants:{type:[Object],required:true}
})