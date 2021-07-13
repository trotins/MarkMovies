import axios from 'axios';
import React,{useState, useEffect}  from 'react';

//http://movie-challenge-api-xpand.azurewebsites.net
export function Data() {

  const[movies,setMovies]=useState([]);
  useEffect(()=>{
    axios.get('http://movie-challenge-api-xpand.azurewebsites.net/api/movies')
    .then(res =>{
      setMovies(res.data.content)
      console.log(res.data.content)
    })
    .catch(err =>{
      console.log(err)
    })
  },[])

  return (
    <div className="data">
      <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Title</th>
              <th>Year</th>
              <th>Revenue</th>
            </tr>
            {
              movies.map(movie => 
                <tr key={movie.id}>
                  <th >{movie.rank}</th>
                  <th >{movie.title}</th>
                  <th >{movie.year}</th>
                  <th >{movie.revenue}</th>
              </tr>
              )
            }
          </thead>
        </table>  
    </div>
  );
}


