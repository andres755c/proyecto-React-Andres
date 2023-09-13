import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <div key={producto.id} className="card w-25">
                        <div className="producto card-body">
                            <img className="imagenDelProducto w-100 card-img-top" src={producto.imagen} alt="mouse pad red dragon" />
                            <h3 className="letraDeProducto">{producto.name}</h3>
                            <p className="letraDeProducto">Precio: {producto.price}</p>
                            <p className="letraDeProducto">Descripcion: {producto.description}</p>
                            <p className="letraDeProducto">Stock: {producto.stock}</p>
                        <div className="bg-black">
                            <Link to={`/detalle/${producto.id}`}>
                                <button className="btn btn-outline-danger w-100">Detalles</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        }

        export default Item