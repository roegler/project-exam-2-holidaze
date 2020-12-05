import { useState } from "react";
import { AsyncTypeahead } from 'react-bootstrap-typeahead';

function SearchBar() {
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);

    let myHeaders = new Headers();
    myHeaders.append("key", "5f92c26e069f2212ce387be6");

    let requestOptions = {
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

    const filterBy = () => true;

    return (
        <form className="search-bar">
            <AsyncTypeahead
                filterBy={filterBy}
                id="async-example"
                isLoading={isLoading}
                labelKey="id"
                minLength={1}
                onSearch={handleSearch}
                onChange={(hotels) => {
                    window.location = "/hotels/" + hotels[0].id
                }}
                options={results}
                placeholder="Find hotel..."
                renderMenuItemChildren={(hotel, props) => (
                    <div>
                        <span>{hotel.name}</span>
                    </div>
                )}
            />
            <button>
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </form>
    );
}

export default SearchBar;

