import React, { useEffect, useState } from 'react';

import '../styles/styles.css';

import TodoItem from './TodoItem.js';
import TodoDelete from './TodoDelete.js';
import CreateTodo from './CreateTodo';

const TodoContainer = () => {
    const [Todos, setTodos] = useState([]);

    useEffect(() => {
        updateTasks();
    }, [])

    const updateTasks = () => {
        const axios = require('axios').default;
        const URL = 'https://todos-academlo.herokuapp.com';

        axios.get(`${URL}/api/todos`)
            .then(function (response) {
                setTodos(response.data.todos);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return(
        <>
            <CreateTodo update={updateTasks}/>
            <div className="col-md-5">
                <h4 className="mb-4">To do:</h4>
                {Todos.map((todo) => <div key={todo._id} className="row align-content-center mb-3"><div className="col-md-5"><label htmlFor="status">{todo.task} by {todo.student}</label></div><div className="col-md-6"><TodoItem condition={todo.isCompleted} id={todo._id} update={updateTasks}/><TodoDelete id={todo._id} update={updateTasks}/></div></div>)}
            </div>
        </>
    );
}

export default TodoContainer;