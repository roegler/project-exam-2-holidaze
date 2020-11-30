import React, { useState, useEffect } from "react";
import HotelCard from '../components/HotelCard';

function Hotels() {

    let myHeaders = new Headers();
    myHeaders.append("key", "5f92c26e069f2212ce387be6");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // Storage
    const [hotels, setHotels] = useState([]);

    // Getting the hotels from API
    useEffect(() => {
        fetch("https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/establishments", requestOptions)
            .then(response => response.json())
            .then(json => {
                setHotels(json)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="mt-4">
            <div className="row">
                {hotels.map(hotel => (
                    <div className="col-lg-4 pb-5">
                        <HotelCard key={hotel.id} id={hotel.id} name={hotel.name} description={hotel.description} image={hotel.image} price={hotel.price} maxGuests={hotel.maxGuests} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hotels;