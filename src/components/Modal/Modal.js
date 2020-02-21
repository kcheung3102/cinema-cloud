import React from 'react'
import './Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal() {
    return (
        <div className='container'>
            <div className='modal-container'>
                <div className='movie'>
                <div className='closeBtn'>
                <FontAwesomeIcon icon='times-circle'/>
                </div>
                <div className='image-poster-modal'>
                        <img />
                </div>
                <div className='movie-content'>
                    <div className='mr-grid'>
                        <div className='col-1'>
                            <h1>Superman</h1>
                        </div>
                        <ul className='movie-gen'>
                            <li>Pg-13</li>
                            <li>2 hour 49 min</li>
                            <li>Adventure,Action</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
