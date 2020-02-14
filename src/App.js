import React, { useState } from 'react';
import './App.scss';
import Search from './components/Search';
import Results from './components/Results';
import axios from 'axios';
import ApiConfig from './apiKeys';
import Loader from './components/Loader/Loader';



function App(){
  //react state hook
  const [state, setState] = useState({
    input: '',
    results: [],
    selected: {}
  });
  const apiurl = `https://www.omdbapi.com/?i=tt3896198&apikey=${ApiConfig.API_KEY}`;

 
  const search = (e) => {
    if(e.key === 'Enter' ) {
      axios(apiurl + "&s=" + state.input).then(({data}) => {
        let results = data.Search;
        //updates the search changes
        setState(prevState => {
          return {...prevState, results: results}
        })

      });

     }
  }

  const handleInput = (e) => {
    let input = e.target.value;
    //updates the input changes made when typing
    setState(prevState => {
      return {...prevState, input: input}
    });
  }
  return (
    <div className="App">
      <header>
      <h1>Cinema Cloud</h1>
      </header>
      <main>
      <Search
        handleInput={handleInput}
        search={search}
        />

        <Results results={state.results}/>
      </main>
        <Loader />
    </div>
  
  );

};

export default App;
