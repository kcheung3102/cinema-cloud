import React from 'react';
import Result from './Result';
import styled, { keyframes } from 'styled-components';
import { bounce, fadeInDown} from 'react-animations';

const fadeInDownAnimation = keyframes `${fadeInDown}`;
const FadeInDownDiv = styled.div `
animation: 6s ${fadeInDownAnimation}
`






 function Results({results, openPopup}) {
    return (
   
         <FadeInDownDiv className='results'>
           {results.map(result => (
				<Result key={result.imdbID} result={result} openPopup={openPopup} />
           ))}
          </FadeInDownDiv>
  
      
    
       
    )
}


export default Results