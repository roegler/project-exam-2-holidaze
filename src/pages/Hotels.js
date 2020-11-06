import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookNowBtn from '../components/BookNowBtn';
import PriceBtn from '../components/PriceBtn';
import MaxGuestsBtn from '../components/MaxGuestsBtn';

function Hotels() {
    return (
        <div class="container hotels-container">
                <div class="row">
                    <div class="col-md">
                        One of three columns
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                    One of three columns
                    </div>
                </div>
                <div class="row">
                    <div class="col-md">
                        <img src="#"/>
                        < MaxGuestsBtn />
                        < PriceBtn />
                    <p>One of three columns</p>
                    < BookNowBtn />
                    </div>
                </div>
        </div>
    );
}

export default Hotels;