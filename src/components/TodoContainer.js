import React, { useEffect, useState } from 'react';

import '../styles/styles.css';

import TodoItem from './TodoItem.js';
import TodoDelete from './TodoDelete.js';

const TodoContainer = () => {
    const [Todos, setTodos] = useState([]);

    useEffect(() => {
        const axios = require('axios').default;
        const URL = 'https://todos-academlo.herokuapp.com';

        axios.get(`${URL}/api/todos`)
            .then(function (response) {
                // handle success
                console.log(response.data.todos);
                setTodos(response.data.todos);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    return(
        <>
            <h4 className="mb-4">To do:</h4>
            {Todos.map((todo) => <div key={todo._id} className="row align-content-center mb-3"><div className="col-md-5"><label htmlFor="status">{todo.task} by {todo.student}</label></div><div className="col-md-6"><TodoItem condition={todo.isCompleted} id={todo._id}/><TodoDelete id={todo._id} /></div></div>)}
        </>
    );
}

export default TodoContainer;