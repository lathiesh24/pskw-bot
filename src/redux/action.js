import { ADD_TO_CART } from "./constant";

export const addToCart = (data) =>{
    console.log("Actionn called", data);
    return {
        type:ADD_TO_CART,
        data: data
    }
}

export const checkingAction = (data)=>{
    console.log("ActionnCheckingggg called",data);
    return {
        type:"CHECKING_ACTION",
        data: data
    }
}
