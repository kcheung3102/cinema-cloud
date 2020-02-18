import React from 'react';




//passing the props by destructing instead of this.props 
 function Search({handleInput, search}) {

    
    
    return (
        <form className='searchbox-wrap'>
       
            <input type='text' 
            placeholder='search for a movie...'
            className='searchbox' 
            onChange={handleInput}
            />
           <input onClick={search} type='submit' value='Search'>Search</input>
        </form>
    )
}
export default Search
