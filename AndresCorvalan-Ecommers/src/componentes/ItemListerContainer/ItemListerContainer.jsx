import { useEffect, useState } from "react"
import { mFetch } from "../../Fetch/mockFetch"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListerContainer = () => {
    const[productos, setProducto] = useState([])
    const [ cargando, setCargando] = useState(true)
    const { cid } = useParams()
    console.log(cid)

    useEffect(()=>{
        if (cid) {
        mFetch()
        .then(respuesta => setProducto( respuesta.filter(producto => cid === producto.category)))
        .catch(err => console.log(err))
        .finally(()=> setCargando(false))
    } else {
        mFetch()
        .then(respuesta => setProducto(respuesta))
        .catch(err => console.log(err))
        .finally(()=> setCargando(false))
    }
    
    }, [cid])
    
    console.log(productos)
    return (
        <div className="productos row" bd="bg-dark" data-bs-theme="dark">
            {cargando ? <h2>Cargando productos...</h2> : <ItemList productos={productos} /> }
        </div>
    )
}

export default ItemListerContainer