import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct)=>{
        setCartList(
            ...cartList, 
            newProduct
        )
    }


return (
        <CartContext.Provider value={{
            cartList,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
)
}

export default CartContextProvider