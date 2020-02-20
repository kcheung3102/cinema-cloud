import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function Result ({ result }) {
    return (
        <div className='result'>
            <div className='info-section'>
            <div className='card-header'>
                <img src={result.Poster} alt="movie" className="image-poster" />
                <h1>{result.Title}</h1>
                <h4>{result.Year}</h4>
                <p className='minutes'>{result.Type}</p>
            <div className='movie-social'>
                <ul>
                    <li className='icon'><FontAwesomeIcon icon='share-alt'/></li>
                    <li className='icon'><FontAwesomeIcon icon='heart'/></li>
                    <li className='icon'><FontAwesomeIcon icon='comments'/></li>
                </ul>
            </div>
        </div>
    </div>
            <div className='blur-back'>
                <img src={result.Poster} alt='movie'></img>
            </div>
           
        </div>
    )
}
