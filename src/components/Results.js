import React from 'react';
import Result from './Result';




 function Results({results}) {
    return (
        <section className='results'>
            <div className="column">
           {results.map(result => (
				<Result key={result.imdbID} result={result} />
           ))}
           </div>
        </section>
    )
}


export default Results