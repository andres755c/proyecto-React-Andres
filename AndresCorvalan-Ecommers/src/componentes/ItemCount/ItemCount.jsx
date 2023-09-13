import { userCounter } from "../Hooks/useCounter";

    const ItemCount = ({ inicial, stock, onAdd }) => {
    const {count, handleAdd, handleSubstract} = userCounter(inicial, stock)
    return <div>
        <h3>Contador</h3>
        <button onClick={handleAdd} > + 1 </button>
        <label>
            <strong>{ count }</strong>
        </label>
        <button onClick={handleSubstract}> - 1 </button>
        <button onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
}

export default ItemCount