import { useEffect, useState } from "react"
import { doc, getFirestore } from "firebase/firestore"
import ItemDetail  from "./ItemDetail/ItemDetail"
import { mFetch } from "../../Fetch/mockFetch"
import { useParams } from "react-router-dom"
import { getDoc, getDocs } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [producto, setProduct] = useState({})
    const { pid } = useParams()
    useEffect(() => {
        const database = getFirestore()
        const queryDoc = doc(database, 'productos', pid)
        getDoc(queryDoc)
        .then(resp => ( {id : resp.id, ...resp.data()} ) )
        .then(resp => setProduct(resp))
    }, [])
return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
