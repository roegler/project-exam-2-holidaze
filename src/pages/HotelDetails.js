import React, { useState, useEffect } from "react";
import MaxGuestsBtn from '../components/MaxGuestsBtn';
import { useParams } from "react-router-dom";
import PriceBtn from '../components/PriceBtn';
import Map from '../components/Map';
import Booking from "../components/Booking";

function HotelDetails() {
    const [showBookingModal, setShowBookingModal] = useState(false);
    const handleShowBookingModal = () => setShowBookingModal(true);
    const handleCloseBookingModal = () => setShowBookingModal(false);

    const [hotel, setHotel] = useState([]);
    let { id } = useParams();

    let myHeaders = new Headers();
    myHeaders.append("key", "5f92c26e069f2212ce387be6");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    useEffect(() => {
        fetch("https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/establishments" + "/" + id, requestOptions)
            .then(response => response.json())
            .then(json => {
                setHotel(json)
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <div className="mt-5">
            <div className="card-shadow p-5">
                <div className="row">
                    <div className="col-sm-7">
                        <a href="/hotels"><svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg> Back</a>
                        <h1 className="display-4">{hotel.name}</h1>
                        <p className="lead">{hotel.description}</p>
                        <div className="mb-4">
                            <MaxGuestsBtn maxGuests={hotel.maxGuests} />
                            <PriceBtn price={hotel.price} />
                        </div>
                        <button type="button" className="btn btn-holidaze-primary" onClick={handleShowBookingModal}>
                            <svg className="icon mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> 
                            BOOK NOW
                        </button>
                    </div>
                    <div className="col-sm-5 mt-5 mt-sm-0">
                        <img src={hotel.image} alt='selected hotel' className='w-100' />
                    </div>
                </div>

                <hr className="my-4" />

                <Map query={hotel.lat + ',' + hotel.lng} />
            </div>

            <Booking show={showBookingModal} onHide={handleCloseBookingModal} establishmentId={id} />
        </div>
    );
}

export default HotelDetails;