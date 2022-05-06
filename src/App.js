import { useState, useEffect } from 'react';
// API => `https://fantasy.premierleague.com/api/${path}`;

// backendURL = 'https://fpl-api-raf.herokuapp.com/';
// path = `?path=entry/821650/history/`

function App() {

  const [team, setTeam] = useState('poo');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      fetch("http://localhost:3000/myteam")
        .then(response => response.json())
        .then(response => {
            
          setTeam(response)
          console.log(response)
          setLoading(false)
        }
      ) 
  },[])

  if(loading) return <h1>Loading ...</h1>

  return (
    <div className="App">
      <header className="App-header"></header>

        <div>GW34 Team</div>  
        <br></br>
        <p> {JSON.stringify(team.picks)}</p>

    </div>
  );
}

export default App;
