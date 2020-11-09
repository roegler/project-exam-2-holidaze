import React from 'react';

import SearchIcon from '../images/search-icon.svg';

function SearchBar() {
    return (
        <form class='search-bar'>
            <input type="text" placeholder="Find your dream hotel…" />
            <button>
                <img src={SearchIcon} alt='search icon'/>
            </button>
        </form>
    );
}

export default SearchBar;

