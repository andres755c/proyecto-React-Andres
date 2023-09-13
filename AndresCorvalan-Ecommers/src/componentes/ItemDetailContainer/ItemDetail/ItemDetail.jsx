

const ItemDetail = ({producto}) => {
    console.log(producto)
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
        </div>
    )
}

export default ItemDetail