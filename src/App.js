import axios from 'axios';
import React,{useState, useEffect}  from 'react';
import { Data } from './DataTable';

//http://movie-challenge-api-xpand.azurewebsites.net
function App() {
  return (
    <div className="App">
      <Data/>
    </div>
  );
}

export default App;
