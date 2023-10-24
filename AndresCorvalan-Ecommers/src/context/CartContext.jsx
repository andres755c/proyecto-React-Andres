import { createContext, useContext, useState } from "react";
import CartContainer from "../componentes/CartContainer/CartContainer";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct)=>{
        console.log(newProduct)
        const productExist = cartList.find(producto => producto.id === newProduct.id)
        if(productExist){
            productExist.quantity = productExist.quantity + newProduct.quantity;
            setCartList([...cartList])
        }else{
            setCartList([
            ...cartList, newProduct
                ])
            }
        }
    console.log(cartList)

    const addToCart = (newProduct) => {
        const productExist = cartList.find(producto => producto.id === newProduct.id)
        if(productExist){
            productExist.quantity = productExist.quantity + newProduct.quantity;
        }else{
            setCartList([...cartList, newProduct])
        }
    }

    const cantidadTotalDeProductos = () => cartList.reduce((count, objProducto) => count += objProducto.quantity, 0)

    const precioTotalDeProductos = () => cartList.reduce((count, objProducto) => (count += objProducto.quantity * objProducto.price), 0)

    const eliminarProducto = id => setCartList(cartList.filter(producto => producto.id !== id))

    const deleteCart = () => {
        setCartList([])
    }

return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            addToCart,
            deleteCart,
            cantidadTotalDeProductos,
            precioTotalDeProductos,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
    }
export default CartContextProvider