import React from 'react';
import './Search.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




//passing the props by destructing instead of this.props 
 function Search({handleInput, search, searchClick}) {

    return (
		
        <section className='searchbox-wrap'>
        <input 
				type="text" 
				placeholder="Search for a movie..." 
				onChange={handleInput}
				onKeyPress={search}
				className='searchbox '
			/>
			<FontAwesomeIcon
			icon='search'
			size='3x'
			className='search-btn'
			onClick={searchClick}	
			/>
        </section>
		
		
    )
}
export default Search
