import { useEffect, useState } from "react"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"
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
            const database = getFirestore()
            const queryCollection = collection(database, 'productos')
            const queryFiltrado = query(queryCollection, where('category', '==', cid))
            getDocs(queryFiltrado)
            .then(resp => setProducto(resp.docs.map(prod => ( { id : prod.id, ...prod.data() } ) ) ) )
            .catch(err => console.log(err))
            .finally(()=> setCargando(false))
    } else {
        const database = getFirestore()
        const queryCollection = collection(database, 'productos')
        getDocs(queryCollection)
        .then(resp => setProducto(resp.docs.map(prod => ( { id : prod.id, ...prod.data() } ) ) ) )
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