import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';
import { flipInY } from 'react-animations';
 
const flipInYAnimation = keyframes `${flipInY}`;


const FlipInAnimationDiv = styled.div `
animation: 2s ${flipInYAnimation}`




export default function Result ({ result, openPopup }) {
    return (
       
        <div className='result' onClick={() => openPopup(result.imdbID)} >
     
            <div className='info-section' >
            <FlipInAnimationDiv>
            <div className='card-header'>
                <img src={result.Poster} alt="movie" className="image-poster" />
                <h1>{result.Title}</h1>
                <h4>{result.Year}</h4>
                <p className='type'>{result.Type}</p>
            </div>
            <div className='movie-spacer'></div>
            <div className='movie-social'>
                <ul>
                    <li className='icon'><FontAwesomeIcon icon='share'/></li>
                    <li className='icon'><FontAwesomeIcon icon='heart'/></li>
                    <li className='icon'><FontAwesomeIcon icon='comments'/></li>
                </ul>
            </div>
        </FlipInAnimationDiv>
    </div>
   
            <div className='blur-back'>
                <img src={result.Poster} alt='movie'></img>
            </div>
          
    
        </div>
       
    )
}
