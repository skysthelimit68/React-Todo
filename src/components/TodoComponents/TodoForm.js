import React from 'react';

const TodoForm = props => {
    return (
        
            <form>
                <input type="text"  value={props.value} onChange = { (event) => props.onChange(event) }></input><br></br>
                <div class="button-wrapper">
                    <button onClick = { (event) => props.onClick_add(event) }>Add</button>
                    <button onClick = { (event) => props.onClick_remove(event) }>Clear Completed</button>
                    <button onClick = { (event) => props.onClick_search(event)}>Search</button>
                </div>
            </form>
        
    )
}

export default TodoForm;