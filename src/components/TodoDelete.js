import React from 'react';

const TodoDelete = (props) => {

    const handleClick = async () => {
        await deleteTodo(props.id);
        props.update();
    }

    const deleteTodo = async (id) => {
        const axios = require('axios').default;
        const URL = 'https://todos-academlo.herokuapp.com';

        try {
            const response = await axios.delete(`${URL}/api/todo/${id}`, { headers: { 'Access-Control-Allow-Origin': "*"} });
        } catch(error) {
            console.log(error);
        }
    }

    return(
        <input type="button" value="Delete" onClick={handleClick} className="btn btn-dark btn-sm"/>
    );
}

export default TodoDelete;