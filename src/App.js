import React from 'react';
import CustomToggle from "./CustomToggle"
import SimpleHook from "./SimpleFormHook"
import StarWarMovies from "./StarWarMovies"

import './App.css';

function App() {
  return (
    <div className="App">
       <CustomToggle />
       <SimpleHook />
       <StarWarMovies />
    </div>
  );
}

export default App;
