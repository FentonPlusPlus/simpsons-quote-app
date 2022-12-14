import { useState, useEffect } from 'react';
import './App.css';
// import { tSImportEqualsDeclaration } from '@babel/types';

function App() {
  const [ simpson, setSimpson ] = useState({
    name: '',
    quote: '',
    // quotes: ['Eat my shorts', "Don't have a cow man"],
    image: ""
  })
  
  useEffect(() => {
    async function getSimpson() {
      const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes', { headers: {
        Accept: 'application/json'
      }});
      console.log('Response is ', response);
      const data = await response.json();
      console.log('data is ', data)
      setSimpson({...simpson, name: data[0].character, quote: data[0].quote, image: data[0].image})
    }
    getSimpson();
  }, [])

  return (
    <div className="App">
      <div className="navbar">
      </div>
      <div className="container">
        <input className="search-input"></input>
        <h1 className="simpson-name">{simpson.name}</h1>
        <img className="simpson-profile" src={simpson.image} alt="simpson-profile"></img>
        <p className="quote">{simpson.quote}</p>
      </div>
    </div>
  );
}

export default App;
