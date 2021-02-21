import React, { useEffect, useState } from 'react';

const TodoDelete = (props) => {
    const ids = props.id;
    const [clickedId, setClickedId] = useState('');

    const handleClick = () => {
        setClickedId(ids);
    }

    useEffect(() => {
        if(clickedId) {
            const axios = require('axios').default;
            const URL = 'https://todos-academlo.herokuapp.com';

            axios.delete(`${URL}/api/todo/${clickedId}`, { headers: { 'Access-Control-Allow-Origin': "*"} })
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }, [clickedId]);

    return(
        <input type="button" value="Delete" onClick={handleClick} className="btn btn-dark btn-sm"/>
    );
}

export default TodoDelete;