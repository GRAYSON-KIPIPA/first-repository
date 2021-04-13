import React, {useState} from 'react'
import Todo from './Todo'


function Myform({todos}) {
   
    return (
        todos.map((todo) =>{
            return <Todo key={todo} todo={todo}/>
        })

       
    )
} 

export default Myform
