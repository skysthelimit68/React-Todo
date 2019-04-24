import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: [],
      inputField: "",
      searchResult:[],
    }
  }

  addTask = (event) => {
    event.preventDefault();
    let newTodolist = this.state.todoList;
    newTodolist.push({
      taskName: this.state.inputField,
      id: Date.now(),
      complete: false,
    });
    this.setState({
      todoList: newTodolist,
      inputField: "",
      searchResult: []
    });
  }

 completedTask = (event, elem) => {
    event.target.classList.add("strike");
    let newTodo = this.state.todoList;
    newTodo.forEach( task => {
      if(task.id === elem) {
        task.complete = true;
        return;
      }
    })      
    this.setState({
      todoList : newTodo,
      searchResult : []
    })
  }

  removeTask = (event) => {
    event.preventDefault();
      let newList = this.state.todoList.filter(elem => 
        elem.complete ===  false  
      )
      console.log(newList);
      this.setState({
        todoList : newList
      })
  }

  changeField = (event) => {
    this.setState({
      inputField: event.target.value
    })
    console.log(this.state.inputField)
  }

  searchItem = (event) => {
    event.preventDefault();
    let searchResult = this.state.todoList.filter(todo => {
      return todo.taskName.toLowerCase().includes(this.state.inputField.toLowerCase())
    }) 
    if(searchResult.length === 0) {
      alert("no result found")
    }
    this.setState({
      searchResult : searchResult,
      inputField: ""
    })
  }


  render() {
    return (
      <div className="app-wrapper">
        <div className = "list-wrapper">
          <h2>To Do List</h2>
          <TodoList 
            todoList = {this.state.todoList}
            searchResult = {this.state.searchResult}
            onClick = { (event, elem) => this.completedTask(event, elem) }
          />
        </div>
        <TodoForm 
          value = {this.state.inputField}
          onChange = { (event) => this.changeField(event)}
          onClick_add = { (event) => this.addTask(event) }
          onClick_remove =  { (event) => this.removeTask(event) }
          onClick_search = { (event) => this.searchItem(event)}
        />
        
      </div>
    );
  }
}


export default App;
