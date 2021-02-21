import React, { useEffect, useState } from 'react';

const TodoItem = (props) => {
    const conditions = props.condition;
    const ids = props.id;

    const [id, setId] = useState('');
    const [checkedValue, setCheckedValue] = useState(conditions);

    const handleChange = (e) => {
        setId(ids);
        setCheckedValue(e.target.checked);
    };

    useEffect(() => {
        if(id) {
            const axios = require('axios').default;
            const URL = 'https://todos-academlo.herokuapp.com';

            axios.put(`${URL}/api/todo/${id}`, { isCompleted: checkedValue })
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }, [checkedValue]);

    return(
        <input type="checkbox" checked={checkedValue} onChange={handleChange} className="check-button mx-2"/>
    );
}

export default TodoItem;