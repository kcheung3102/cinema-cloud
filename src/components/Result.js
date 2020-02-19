import React from 'react'




export default function Result ({ result }) {
    return (
        <div className='result'>
            <img src={result.Poster} alt="movie" className="image-poster" />
            <h3>{result.Title}</h3>
            <p>{result.Year}</p>
        </div>
    )
}
