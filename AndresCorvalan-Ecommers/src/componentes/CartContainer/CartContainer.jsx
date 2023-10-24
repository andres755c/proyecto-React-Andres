import { CollectionReference, Firestore, addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../context/CartContext"
import { useState } from "react"
import { Link } from "react-router-dom"

const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        Nombre: '',
        Numero: '',
        Email: ''
    })
    const [id, setId] = useState('')
    const {cartList, deleteCart, precioTotalDeProductos, eliminarProducto} = useCartContext()
    console.log(cartList)

    const handleAddOrder = (evt) => {
        evt.preventDefault()
        const order = {}
        order.buyes = dataForm
        order.items = cartList.map(prod => {
            return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.quantity}
        })
        order.total = precioTotalDeProductos()

        const queryDB = getFirestore()
        const orderCollection = collection(queryDB, 'orders')
        addDoc(orderCollection, order)
        .then(({id}) => setId(id))
        .catch(err => console.log(err))
        .finally(() =>{
            setDataForm({
                Nombre: '',
                Numero: '',
                Email: ''
            })
        })
    }

    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name] : evt.target.value
        })
    }
    console.log(dataForm)

    return (
        <>
        {id !== '' && <h3>ID de tu compra: {id}</h3>}
        {cartList.length > 0 ?
        <div>
            {cartList.map(prod => <div key={prod.id}>
                <div className="card w-25">
                <div className="producto card-body">
                    <img className="imagenDelProducto w-100 card-img-top" src={prod.imagen}/>
                    <h3 className="letraDeProducto">{prod.name}</h3>
                    <p className="letraDeProducto">{prod.price}</p>
                    <p className="letraDeProducto">Descripcion: {prod.description}</p>
                    <p className="letraDeProducto">Cantidad: {prod.quantity}</p>
                    <p className="letraDeProducto">Stock: {prod.stock}</p>
                    <button className="btn btn-outline-danger w-75" onClick={() => eliminarProducto(prod.id)}>Borrar Producto</button>
                </div>
                </div>
            </div>)}
            { precioTotalDeProductos() !== 0 &&  <h3>Precio total de los productos: {precioTotalDeProductos()}</h3> }
            <button onClick={deleteCart}>Vaciar el Carrito</button>
            <form onSubmit={handleAddOrder}>
                <input 
                    type="text" 
                    name="Nombre" 
                    placeholder="Ingresar tu nombre"
                    value={dataForm.Nombre}
                    onChange={handleOnChange}
                    />
                <input 
                    type="text" 
                    name="Numero" 
                    placeholder="Ingresa tu numero"
                    value={dataForm.Numero}
                    onChange={handleOnChange}
                    />
                <input 
                    type="text" 
                    name="Email" 
                    placeholder="Ingresa tu email"
                    value={dataForm.Email}
                    onChange={handleOnChange}
                    />
                <button className="btn btn-success">Terminar de comprar</button>
            </form>
        </div>
        :
        <div>
            <h3>No tenes productos en tu carrito</h3>
            <Link to={'/'}>Comprar productos</Link>
        </div>}
        </>
    )
}

export default CartContainer