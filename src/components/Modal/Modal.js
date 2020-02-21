import React from 'react'
import './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({selected, closeToggle}) {
    return (
        <div className='container'>
            <div className='modal-container'>
                <div className='movie'>
                <div className='closeBtn'>
                <FontAwesomeIcon 
                 icon='times-circle'
                 onClick={closeToggle}

                />
                </div>
                <div className='image-poster-modal'>
                        <img src={selected.Poster} alt='movie poster'/>
                </div>
                <div className='movie-content'>
                    <div className='mr-grid'>
                        <div className='col1'>
                            <h1>{selected.Title}</h1>
                            <ul className='movie-gen'>
                                <li>{selected.Rated}</li>
                                <li>{selected.Runtime}</li>
                                <li>{selected.Genre}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mr-grid summary-row'>
                        <div className='col2'>
                            <h5>SUMMARY</h5>
                        </div>
                        <div className='col2'>
                            <ul className='movie-icons'>
                                <li><FontAwesomeIcon  icon='heart'/>214</li>
                                <li><FontAwesomeIcon  icon='comments'/>123</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mr-grid'>
                        <div className='col1'>
                            <p className='movie-description'>{selected.Plot}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
