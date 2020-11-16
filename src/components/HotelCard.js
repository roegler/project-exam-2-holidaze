import React from 'react';
import MaxGuestsBtn from './MaxGuestsBtn';
import PriceBtn from './PriceBtn';
import BookNowBtn from './BookNowBtn';

function HotelCard(props) {
    return (
        <div class="card-shadow">
            <img src={props.image} alt='selected hotel' height="200" class='w-100' />
            <div class="px-3 pb-3">
                <div class="mt-3 mb-4">
                    <MaxGuestsBtn maxGuests={props.maxGuests}/>
                    <PriceBtn price={props.price}/>
                </div>

                <h4>{props.name}</h4>
                <hr />
                <p>{props.description}</p>

                <div class="text-right">
                    <BookNowBtn id={props.id} />
                </div>
            </div>
        </div>
    );
}

export default HotelCard;
