import React from 'react';

function PriceBtn(props) {
    return (
    <span class="pill">Price from <strong>{props.price}$</strong></span>
    );
}

export default PriceBtn;

