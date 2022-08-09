import React, { useState, useEffect } from 'react'; //hooks
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //RUN ONCE when the app start
  useEffect(() => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }, []);

  //USE EFFECT
  useEffect(() => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Welcome! Abishek Todo list</h1>
      </header>
      <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} 
        setStatus={setStatus}
      />
      <TodoList 
        filteredTodos={filteredTodos}
        setTodos={setTodos} 
        todos={todos} 
      />
    </div>
  );
}

export default App;
