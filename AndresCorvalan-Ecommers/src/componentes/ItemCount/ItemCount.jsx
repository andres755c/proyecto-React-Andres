import { userCounter } from "../Hooks/useCounter";

    const ItemCount = ({ inicial, stock, onAdd }) => {
    const {count, handleAdd, handleSubstract} = userCounter(inicial, stock)
    return <div>
        <h3 className="titulos3">Contador:</h3>
        <button className="botonesExtra" onClick={handleAdd} > Sumar Producto </button>
        <label>
            <strong>{ count }</strong>
        </label>
        <button className="botonesExtra" onClick={handleSubstract}> Restar Producto </button>
        <br />
        <button className="botonesExtra" onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
}

export default ItemCount