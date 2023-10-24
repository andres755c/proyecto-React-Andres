import { useCartContext } from "../../context/CartContext"

function CartWidget() {
        const {cantidadTotalDeProductos} = useCartContext()
    return (
        <div><button className="botonCarrito">{ cantidadTotalDeProductos() !== 0 && cantidadTotalDeProductos()} 🛒</button></div>
    )
}

export default CartWidget