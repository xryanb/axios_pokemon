import React,{useState} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokes,setPokes]=useState([]);

  const fetchPoke =() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
    .then(response=>{
    setPokes(response.data.results);
  })
  .catch(err => console.log(err))
  }
  
    return (
      <div className="App">
       <button onClick={fetchPoke}>Fetch Pokemon</button>
        {/* {JSON.stringify(pokes)} */}
       <ul>
       {pokes.map( (p,idx)=> {
          return (
            <li key={idx}>{p.name}</li>
          )
        })} 
        </ul>
    
       
      </div>
    );
  }

export default App;
