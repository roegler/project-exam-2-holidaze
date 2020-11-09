import React from 'react';
import HotelCard from '../components/HotelCard';

function Hotels() {
    return (
        <div class="hotels-container mt-4">
            <div class="row">
                <div class="col-md">
                    <HotelCard />
                </div>
            </div>

            <div class="row">
                <div class="col-md">
                    <HotelCard />
                </div>
            </div>

            <div class="row">
                <div class="col-md">
                    <HotelCard />
                </div>
            </div>
        </div>
    );
}

export default Hotels;