import React, { useState, useEffect } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

import SearchIcon from '../images/search-icon.svg';

function SearchBar() {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);

    var myHeaders = new Headers();
    myHeaders.append("key", "5f92c26e069f2212ce387be6");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const handleSearch = (query) => {
        setIsLoading(true);

        fetch(`https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/establishments`, requestOptions)
            .then((resp) => resp.json())
            .then((hotels) => {
                console.log(hotels)

                const filteredArray = hotels.filter(hotel => {
                    return hotel.name.toLowerCase().includes(query)
                })

                setResults(filteredArray);
                setIsLoading(false);
            });
    };

    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true;


    return (
        /*<form class="search-bar">
            <input type="text" placeholder="" />
            
        </form>*/
        <form class="search-bar">
            <AsyncTypeahead
                filterBy={filterBy}
                id="async-example"
                isLoading={isLoading}
                labelKey="id"
                minLength={1}
                onSearch={handleSearch}
                onChange={(hotels) => {
                    window.location="/hotels/" + hotels[0].id
                }}
                options={results}
                placeholder="Find your dream hotel…"
                renderMenuItemChildren={(hotel, props) => (
                    <div>
                        <span>{hotel.name}</span>
                    </div>
                )}
            />
            <button>
                <img src={SearchIcon} alt="search icon" />
            </button>
        </form>
    );
}

export default SearchBar;

