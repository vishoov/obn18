import React from 'react'
import { useState } from 'react';
const FilterBar = ({categories, category, filter}) => {
    const categoriesArr = Array.from(categories)

    const [selectedCategory, setSelectedCat] = useState("");
  return (
    <div className= 'border'> 
    
    <select
    value={selectedCategory}
    onChange={(e)=>filter(e.target.value)}
    >
        <option value="All">All</option>
        {categoriesArr.map((category)=>{

            return <option key={category} value={category}>
                {category}
            </option>
        })}
    </select>
    </div>
  )
}

export default FilterBar