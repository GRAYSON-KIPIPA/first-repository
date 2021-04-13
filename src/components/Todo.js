import React from 'react'

function Todo({todo}) {
    return (
        <div>
            <input type='checkbox'></input>
            {todo.name}
        </div>
    )
}

export default Todo
