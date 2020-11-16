import React, { useState, useEffect } from "react";
import MaxGuestsBtn from '../components/MaxGuestsBtn';
import { useParams } from "react-router-dom";
import PriceBtn from '../components/PriceBtn';
import BookNowBtn from '../components/BookNowBtn';
import Map from '../components/Map';

function HotelDetails() {
    const [hotel, setHotel] = useState([]);
    let { id } = useParams();

    var myHeaders = new Headers();
    myHeaders.append("key", "5f92c26e069f2212ce387be6");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/establishments" + '/' + id, requestOptions)
            .then(response => response.json())
            .then(json => {
                setHotel(json)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div class="mt-5">

            <div class="card-shadow p-5">
                <div class="row">
                    <div class="col-sm-7">
                        <a href="/hotels"><svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Back</a>
                        <h1 class="display-4">{hotel.name}</h1>
                        <p class="lead">{hotel.description}</p>
                        <div class="mb-4">
                            <MaxGuestsBtn maxGuests={hotel.maxGuests} />
                            <PriceBtn price={hotel.price} />
                        </div>
                        <BookNowBtn id={id} />
                    </div>
                    <div class="col-sm-5 mt-5 mt-sm-0">
                        <img src={hotel.image} alt='selected hotel' class='w-100' />
                    </div>
                </div>

                <hr class="my-4" />

                <Map query={hotel.lat + ',' + hotel.lng} />
            </div>
        </div>
    );
}

export default HotelDetails;