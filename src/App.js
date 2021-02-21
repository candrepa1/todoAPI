import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import TodoContainer from './components/TodoContainer';
import CreateTodo from './components/CreateTodo';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-center">To-Do List</h1>
          </div>
          <div className="col-md-7 text-center">
            <CreateTodo />
          </div>
          <div className="col-md-5">
            <TodoContainer />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
