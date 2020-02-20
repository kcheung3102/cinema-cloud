import React, { useState } from 'react';
import './App.scss';
import Search from './components/Search/Search';
import Results from './components/Results';
import axios from 'axios';
import Loader from './components/Loader/Loader';
import Burger from './components/Navbar/Burger';
import Apiconfig from './apiKeys';

function App(){
  //react state hook
  const [state, setState] = useState({
    input: '',
    results: [],
    selected: {}
  });
  const apiurl = `http://www.omdbapi.com/?i=tt3896198&apikey=${Apiconfig.API_KEY}`;

 
  const search = (e) => {
    if(e.key === "Enter") {
    axios(apiurl + "&s=" + state.input).then(({ data }) => {
        let results = data.Search;

        console.log(results);

        //updates the search changes

        setState(prevState => {
          return {...prevState, results: results}
        })

      });

    } 

  }

 const handleInput = (e) => {
    let input = e.target.value;

    setState(prevState => {
      return { ...prevState, input: input }
    });
  }

  const toggle = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closeToggle = () => {
    setState(prevState => {
      return { ...prevState, selected:{}}
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

<Results 
          results={state.results}/>
    </main>
        <Loader />
      
    </div>
  
  );

};

export default App;
