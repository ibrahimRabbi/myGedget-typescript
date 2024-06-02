import { Schema, model } from "mongoose";
import { Inventory, ProductInterface, VariantObj } from "./interface";
import idGenerator from 'generate-unique-id'

const variantSchema = new Schema<VariantObj>({
    type: { type: String, required: true },
    value:{type:String,required:true}
})

const inventorySchema = new Schema<Inventory>({
    inStock: { type: Boolean, required: true },
    quantity:{type:Number,required:true}
})


const productSchema = new Schema<ProductInterface>({
    id:{type:String,required:true},
    name: { type: String, required: true, trim: true, maxlength: [15, 'product name maximum 15 character applicable'] },
    price: { type: Number,trim:true, required: true },
    category: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: { type:[variantSchema], required: true },
    inventory:{type:inventorySchema,required:true}
})


//middleWare
productSchema.pre('save', function (next) {
    const id = idGenerator({ length: 12, useLetters: true });
    this.id = id
    next()
})


export const productModel = model<ProductInterface>('products', productSchema)
