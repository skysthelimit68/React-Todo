import React from 'react';


const Todo = props => {
    const itemId = props.todo.id;
    //console.log(elem);
    return (
        <div className=""  onClick = { (event, elem) => props.onClick(event, itemId) } >
            {props.todo.taskName}
        </div>
    )
}

export default Todo;