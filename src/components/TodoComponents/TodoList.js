// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    if(props.searchResult.length === 0) {
            return props.todoList.map( elem => <Todo key={elem.id} todo={elem} onClick = { (event, elem) => props.onClick(event, elem)}/> ) 
        } else {
            return props.searchResult.map( elem => <Todo key={elem.id} todo={elem} onClick = { (event, elem) => props.onClick(event, elem)}/> ) 
        }
        
        
        
      
        
     
    
}

export default TodoList;