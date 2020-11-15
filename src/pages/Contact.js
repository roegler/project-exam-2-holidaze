import React from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

function Contact() {
    return (
        <div class="row my-5">
            <div class="col-sm-6">
                <Map />
            </div>
            <div class="col-sm-6">
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;