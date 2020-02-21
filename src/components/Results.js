import React from 'react';
import Result from './Result';




 function Results({results, toggle}) {
    return (
        <section className='results'>
           {results.map(result => (
				<Result key={result.imdbID} result={result} toggle={toggle} />
           ))}
        </section>
    )
}


export default Results