import React from 'react'
import { useState } from 'react';
const FilterBar = ({categories, category, setCategory}) => {
    const categoriesArr = Array.from(categories);
  console.log(categories)
  return (
    <div className= 'border'> 


    <h1>Filter bar</h1>
    
    <select
    value={category}
    onChange={(e)=>setCategory(e.target.value)}
    >
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