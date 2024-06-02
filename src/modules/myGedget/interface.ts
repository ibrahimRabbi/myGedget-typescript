export type VariantObj = {
    type: string,
    value:string
}
 
export type Inventory = {
    quantity: number,
    inStock:boolean
}


export type ProductInterface = {
    id:string,
    name: string,
    description: string,
    price: number,
    category: string,
    tags: Array<string>,
    variants: Array<VariantObj>,
    inventory:Inventory
}