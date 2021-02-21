import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateTodo = () => {
    const {register, handleSubmit, errors} = useForm();
    const [newTodo, setNewtodo] = useState('');

    const onSubmit = (data) => {
        console.log(data);
        setNewtodo(data);
    };

    useEffect(() => {
        if(newTodo) {
            const axios = require('axios').default;
            const URL = 'https://todos-academlo.herokuapp.com';
        
            axios.post(`${URL}/api/todo`, {
                task: newTodo.task,
                isCompleted: false, 
                student: newTodo.student
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }, [newTodo])

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <h4 className="mb-4">Make an entry:</h4>
                <label className="mb-3">
                    New task:
                    <input type="text" name="task" ref={register({required: 'a task is required'})} className="ml-2 rounded-pill"/>
                </label>
                <label className="mb-3">
                    Student: 
                    <input type="text" name="student" ref={register({required: "it's required to provide a student's name"})} className="ml-2 rounded-pill"/>
                </label>
                <div>   
                    <button type="submit" className="btn btn-dark w-25">Add task</button>
                </div>
                {
                    errors.task && <p>{errors.task.message}</p>
                }
                {
                    errors.student && <p>{errors.student.message}</p>
                }
            </form>
        </div>
    );
}

export default CreateTodo;