import React, { createContext, useState } from "react";
import all_product from "./assets/Products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart; 
}

const ShopContextProvider = (props) => {
    const [cartItem,setCartItem] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        console.log(addToCart);
    }

    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        return all_product.reduce((total, product) => {
            return total + (cartItem[product.id] || 0) * product.price;
        }, 0).toFixed(2);
    };

    const contextValue = {all_product,cartItem, addToCart, removeFromCart, getTotalCartAmount};

    console.log(cartItem); 

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;