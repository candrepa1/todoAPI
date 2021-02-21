import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4 text-center">To-Do List</h1>
            <hr className="mb-5"/>
          </div>
            <TodoContainer />
          </div>
        </div>
      </div>
  );
}

export default App;
