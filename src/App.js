import React, { useState } from 'react';
import './App.scss';
import Search from './components/Search/Search'
import Results from './components/Results'
import Popup from './components/Popup/Popup'
import axios from 'axios';
import Loader from './components/Loader/Loader';
import Apiconfig from './apiKeys';
import { library } from '@fortawesome/fontawesome-svg-core';
import{ faShare, faComments,faHeart,faTimesCircle,faPlayCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import { bounce, fadeInDown} from 'react-animations';
import logo from './Images/cloud.png';
 

const fadeInDownAnimation = keyframes `${fadeInDown}`;
const FadeInDownDiv = styled.div `
animation: 3s ${fadeInDownAnimation}
` 

const bounceAnimation = keyframes`${bounce}`;
const BouncyDiv = styled.div`
  
  animation: 3s ${bounceAnimation};
`;

//adds icons to  a library to be converted
library.add(faShare, faComments, faHeart, faTimesCircle, faPlayCircle, faSearch);

function App(){
  //react state hook
  const [state, setState] = useState({
    input: '',
    results: [],
    selected: {}
  });
  const apiurl = `https://www.omdbapi.com/?apikey=${Apiconfig.API_KEY}`;

 //need to refactor onclick and keypress...need to merge them
  const search = (e) => {
    if(e.key === "Enter") {
        state.input.trim() === "" || state.input.trim().length === 0 ? 
         alert("Please enter a movie") 
       : axios(apiurl + "&s=" + state.input).then(({ data }) => {
               let results = data.Search;
       
               
               //updates the search changes
               setState(prevState => {
                 return {...prevState, results: results}
               })
       
             });

    }  

  }


  const searchClick = (e) => {
    //checks if search is an empty string or not
    state.input.trim() === "" || state.input.trim().length === 0 ? 
      alert("Please enter a movie") 
  : axios(apiurl + "&s=" + state.input).then(({ data }) => {
          let results = data.Search;
  
          
          //updates the search changes
          setState(prevState => {
            return {...prevState, results: results}
          })
  
        });

    

  }

  

 const handleInput = (e) => {
    let input = e.target.value;

    setState(prevState => {
      return { ...prevState, input: input }
    });

  }


  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;


      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected:{}}
    });
  }

  return (
    <div className="App">
      <header>
      <div className='header-container'>
      <BouncyDiv>
      <h1 className='header-text'>Cinema Cloud</h1>
      <img  className='logo' src={logo} alt='logo'  />
      </BouncyDiv>
      </div>
      </header>
      <main>
      <FadeInDownDiv>
      <Search
        handleInput={handleInput}
        search={search}
        searchClick={searchClick}
        />
      </FadeInDownDiv>
     
      
      <Results  
      results={state.results} 
      openPopup={openPopup}   />
    
    

     {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
    </main>
        <Loader />
      
    </div>
  
  );

};

export default App;
