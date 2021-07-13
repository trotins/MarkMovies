import axios from 'axios';
import React,{useState, useEffect}  from 'react';
import { Data } from './components/DataTable';
import './App.css';

//http://movie-challenge-api-xpand.azurewebsites.net
function App() {
  return (
    <div className="App">
      <h1>Movie Ranking</h1>
      <Data/>
    </div>
  );
}

export default App;
