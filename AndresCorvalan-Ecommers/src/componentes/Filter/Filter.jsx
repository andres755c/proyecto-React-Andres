import { useState } from "react"

const Filter = ({children, productos}) => {
    const [filterState, setFilterState] = useState('')

    const handleFilterChange = (event)=> {
        setFilterState(event.target.value)
    }
    return (
        <>
        { children({productos, filterState, handleFilterChange}) }
        </>
    )
}

export default Filter