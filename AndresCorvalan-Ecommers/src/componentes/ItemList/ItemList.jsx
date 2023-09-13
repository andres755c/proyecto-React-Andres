import Filter from "../Filter/Filter"
import Item from "../Item/Item"

const handleProductFilter = ({filterState, handleFilterChange, productos}) => {
    console.log(productos)
    return <div>
            <h2>Buscador</h2>
        <input className="barraDelBuscador" type="text" value={filterState} onChange={handleFilterChange}/>
        {
            filterState === "" ? 
            productos?.map(producto => <Item key={producto.id} producto={producto} /> )
            :
            productos.filter(producto => producto.name.toLowerCase().includes(filterState.toLowerCase())).map(producto => <Item key={producto.id} producto={producto} /> )
        }
    </div>
}   

const ItemList = ({productos}) => {
    return (
        <>
        <Filter productos={productos}>
            {handleProductFilter}
        </Filter>
        </>
    ) 
}

export default ItemList