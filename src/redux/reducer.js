import { ADD_TO_CART } from "./constant";

export const AddtoCartReducer = (data=[], action)=>{
    console.log("Add to Cart Reducer called", action)
    if (action.type === ADD_TO_CART) {
        return data
    }else {
        return "No action called";
    }
}