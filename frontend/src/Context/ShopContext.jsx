import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const ShopContext =  createContext();





const ShopContextProvider = (props)=>{
    const  currency  = '$';
    const deleveryfee  = 10;

    const value = {
        products,
        currency,
        deleveryfee
    }

    return(
        <ShopContext.Provider value={value} >
            {
                props.children
            }
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;