import React from 'react'
import './Popup.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from '../Loader/Loader';

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
		<div className='modal-container'>
                <div className='movie'>
                <div className='closeBtn'>
                <FontAwesomeIcon 
                 icon='times-circle'
                 onClick={closePopup}
                 className="times-circle"
                />
                </div>
                    <img src={selected.Poster} alt='movie poster' className='image-poster-modal'/>
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
                    <div className='mr-grid ratings-row'>
                      <div className='col1'>
                          <p className='rating'>Rating: {selected.imdbRating} /10</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <Loader/>
		</section>
	)
}

export default Popup
