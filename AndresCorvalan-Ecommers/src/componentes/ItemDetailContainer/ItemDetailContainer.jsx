import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { mFetch } from "../../Fetch/mockFetch"

const ItemDetailContainer = () => {
    const [producto, setProduct ] = useState({})
    useEffect(()=>{
        mFetch(1)
        .then(resp => console.log(setProduct(resp)))
        .catch(err=> console.log(err))
    },[])
return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
