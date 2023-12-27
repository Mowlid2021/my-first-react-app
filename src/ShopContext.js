import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

const ShopContext = createContext(initialState);

export const ShopProvider = ({children}) =>{
    const [state, dispatch] = useReducer(shopReducer, initialState);

    const addToCart = (product) =>{
        const updatedProduct = state.products.concat(product);
        calculateTotalPrice(updatedProduct)

        dispatch({
            type: "ADD_TO_CART",
            payload:{
                ...state,
                products: updatedProduct,
            }
        });

    };
    
    const removeFromCart = (product) =>{
        const updatedProduct = state.products.filter((pro)=> pro.id !== product.id)
        calculateTotalPrice(updatedProduct)

        dispatch({
            type:  "REMOVE_FROM_CART",
            payload:{
                ...state,
                products: updatedProduct
            }
        });

    };

    const calculateTotalPrice = (products) =>{
        let total = 0;
        products.forEach((pro)=>{
            total += pro.price
        });

        dispatch({
            type: "TOTAL_PRICE",
            payload: total
        });
    }

    const value = {
        products: state.products,
        total: state.total,
        addToCart,
        removeFromCart,
        calculateTotalPrice
    };

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
};

const useShop = () =>{
    const context = useContext(ShopContext);
    if(context === undefined){
        throw new Error("context must be inside useShop")
    }
    return context
};
export default useShop;