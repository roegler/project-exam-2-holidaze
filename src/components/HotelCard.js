import React from 'react';
import MaxGuestsBtn from './MaxGuestsBtn';
import PriceBtn from './PriceBtn';
import BookNowBtn from './BookNowBtn';

function HotelCard(props) {
    return (
        <div className="card-shadow">
            <img src={props.image} alt='selected hotel' height="200" className='w-100' />
            <div className="px-3 pb-3">
                <div className="mt-3 mb-4">
                    <MaxGuestsBtn maxGuests={props.maxGuests}/>
                    <PriceBtn price={props.price}/>
                </div>

                <h4>{props.name}</h4>
                <hr />
                <p>{props.description}</p>

                <div className="text-right">
                    <BookNowBtn id={props.id} />
                </div>
            </div>
        </div>
    );
}

export default HotelCard;
