import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { mFetch } from "../../Fetch/mockFetch"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [producto, setProduct] = useState({})
    const { pid } = useParams()
    useEffect(()=>{
        mFetch(pid)
        .then(resp => setProduct(resp))
        .catch(err=> console.log(err))
    },[])
return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
