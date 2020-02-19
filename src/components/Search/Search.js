import React from 'react';
import './Search.scss';




//passing the props by destructing instead of this.props 
 function Search({handleInput, search}) {

    return (
        <section className='searchbox-wrap'>
        <input 
				type="text" 
				placeholder="Search for a movie..." 
				className="searchbox" 
				onChange={handleInput}
				onKeyPress={search}
			/>
           
        </section>
    )
}
export default Search
