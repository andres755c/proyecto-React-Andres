import { useCartContext } from "../../../context/CartContext"
import ItemCount from "../../ItemCount/ItemCount"

const ItemDetail = ({producto, find}) => {
    const {addProduct} = useCartContext()
    const onAdd = (quantity) => {
        addProduct({ ...producto, quantity: count})
    }
    console.log(cartList)
    return (
        <div className="row">
            <div className="col">
                <img className="w-25" src={producto.imagen} alt="imagen de producto" />
                <div>
                    <p>Nombre: {producto.name}</p>
                    <p>Descripcion: {producto.description}</p>
                    <p>Precio: {producto.price}
                    </p>
                    <p>Stock: {producto.stock}</p>
                </div>
            </div>
            <div>
                <ItemCount inicial={1} stock={5} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail