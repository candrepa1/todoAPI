import React from 'react';
import { useForm } from 'react-hook-form';

const CreateTodo = (props) => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = async (data, event) => {
        await createTodo(data);
        props.update();
        event.target.reset();
    };

    const createTodo = async (info) => {
        const axios = require('axios').default;
        const URL = 'https://todos-academlo.herokuapp.com';

        try {
            const response = await axios.post(`${URL}/api/todo`, {
                task: info.task,
                isCompleted: false, 
                student: info.student
            });
          } catch (error) {
            console.error(error);
          }
    };

    return(
        <div className="col-md-5 offset-md-2">
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column align-items-center">
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
                    <button type="submit" className="btn btn-dark">Add task</button>
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