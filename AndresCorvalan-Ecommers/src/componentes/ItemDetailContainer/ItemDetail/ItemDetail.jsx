import { useState } from "react"
import { useCartContext } from "../../../context/CartContext"
import ItemCount from "../../ItemCount/ItemCount"
import { Link } from 'react-router-dom';

const ItemDetail = ({producto, find}) => {
    const [isCounter, setIsCounter] = useState(true)
    const {addProduct} = useCartContext()
    const onAdd = (quantity) => {
        addProduct({ ...producto, quantity: quantity})
        setIsCounter(false)
    }
    return (
        <div className="row producto">
            <div className="">
                <img className="w-25" src={producto.imagen} alt="imagen de producto" />
                <div>
                    <p className="letraDeProducto">Nombre: {producto.name}</p>
                    <p className="letraDeProducto">Descripcion: {producto.description}</p>
                    <p className="letraDeProducto">Precio: {producto.price}
                    </p>
                    <p className="letraDeProducto">Stock: {producto.stock}</p>
                </div>
            </div>
            <div>
                {
                    isCounter ? 
                        <ItemCount inicial={1} stock={5} onAdd={onAdd} />
                    :
                    <>
                    <Link to={'/cart'}>
                        <button className="botonesExtra">Ver Carrito</button>
                    </Link>
                    <Link to={'/'}>
                        <button className="botonesExtra">Seguir Comprando</button>
                    </Link>
                    </>
                }
            </div>
        </div>
    )
}

export default ItemDetail