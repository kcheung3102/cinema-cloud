import React from 'react';
import Result from './Result';




 function Results({results, toggleModal}) {
    return (
        <section className='results'>
           {results.map(result => (
				<Result key={result.imdbID} result={result} toggleModal={toggleModal} />
           ))}
        </section>
    )
}


export default Results