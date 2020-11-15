import React from 'react';
import HotelCard from '../components/HotelCard';

function Hotels() {
    return (
        <div class="mt-4">
            <div class="row">
                <div class="col-lg-4">
                    <HotelCard />
                </div>

                <div class="col-lg-4">
                    <HotelCard />
                </div>

                <div class="col-lg-4">
                    <HotelCard />
                </div>
            </div>
        </div>
    );
}

export default Hotels;