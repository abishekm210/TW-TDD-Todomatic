import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

const Form = () => {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('all');
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        switch (status) {
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
    }, [todos, status])

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }])
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <div>
            <form>
                <input data-testid="input-field" value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button data-testid="submit-button" onClick={submitTodoHandler} disabled={!inputText} className="todo-button" type="submit">
                    <i className="fas fa-plus-circle"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            <TodoList
                filteredTodos={filteredTodos}
                setTodos={setTodos}
                todos={todos}
            />
        </div>

    );
}

export default Form;