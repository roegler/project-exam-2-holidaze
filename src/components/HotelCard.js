import React from 'react';
import MaxGuestsBtn from './MaxGuestsBtn';
import PriceBtn from './PriceBtn';
import BookNowBtn from './BookNowBtn';

import test_img from '../images/test_img.jpg'

function HotelCard() {
    return (
        <div>
            <img src={test_img} alt='test img' height="200" class='mb-3'/>
            < MaxGuestsBtn />
            < PriceBtn />
            <p>Lorem ipsum</p>
            < BookNowBtn />
        </div>

    );
}

export default HotelCard;
