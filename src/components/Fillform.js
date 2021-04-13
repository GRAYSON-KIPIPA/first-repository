import React, { useState, useRef, setTodos } from 'react'

function Fillform({ list, toggleTod }) {
       

 
    return (
        <div>
            {list.map((ls)=>(
            <div>
                <input type='checkbox' isChecked/>
                <h4>{ls.name}</h4>
            </div>
          
            ))}
        
        </div>
    )
}

export default Fillform