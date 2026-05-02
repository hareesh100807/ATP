import { Schema,model} from "mongoose";

const productSchema=new Schema({
    productId:{
        type:Number,
        required:[true,"productId is required field"]
    },
    productName:{
        type:String,
        required:[true,"productName is required field"]
    },
    price:{
        type: Number,
        required:[true,"price is required field"],
        min:[10000,"Minimum price is 10000"],
        max:[50000,"Maximum price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required field"]
    }
},{
    versionKey:false,
    timestamps:true
})
export const ProductModel=model("product",productSchema)