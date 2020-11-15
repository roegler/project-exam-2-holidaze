import React from 'react';
import MaxGuestsBtn from './MaxGuestsBtn';
import PriceBtn from './PriceBtn';
import BookNowBtn from './BookNowBtn';

import test_img from '../images/test_img.jpg'

function HotelCard() {
    return (
        <div class="card-shadow">
            <img src={test_img} alt='test img' height="200" class='w-100' />
            <div class="px-3 pb-3">
                <div class="my-3">
                    <MaxGuestsBtn />
                    <PriceBtn />
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in risus urna.</p>
                <BookNowBtn />
            </div>
        </div>

    );
}

export default HotelCard;
