import React from 'react';
import SubmitBtn from './SubmitBtn';

function ContactForm() {
    return (
        <div>
            <h2>LOOKING FORWARD TO HEAR FORM YOU.</h2>
            <p>Please do not has a hesitate to contact us if anything is unclear. We are here to help.</p>
            <form class="mt-4">
                <div class="form d-flex align-items-end flex-column">
                    <div class="w-100 mb-4">
                        <input type="text" class="form-control" placeholder="Name" />
                    </div>
                    <div class="w-100 mb-4">
                        <input type="email" class="form-control" placeholder="Email" />
                    </div>
                    <div class="w-100 mb-4">
                        <label for="formControlTextarea1">How can we help you?</label>
                        <textarea class="form-control" id="formControlTextarea1" rows="3"></textarea>
                    </div>
                    <SubmitBtn />
                </div>
            </form>
        </div>

    );
}

export default ContactForm;