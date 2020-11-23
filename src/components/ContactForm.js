import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import SubmitBtn from './SubmitBtn';

function ContactForm() {
    const schema = yup.object().shape({
        name: yup
            .string()
            .required("Name is required")
            .min(2, "Your full name must contain at least 2 characters"),

        email: yup
            .string()
            .email('Invalid email')
            .required("Email is required"),

        message: yup
            .string()
            .required("Message is required")
            .min(10, "Your message must contain at least 10 characters")
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log("data", JSON.stringify(data));

        var myHeaders = new Headers();
        myHeaders.append("key", "5f92c26e069f2212ce387be6");
        myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(data)
        };

        fetch("https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/contacts", requestOptions)
            .catch(error => console.log(error));
    }

    return (
        <div>
            <h2>LOOKING FORWARD TO HEAR FORM YOU.</h2>
            <p>Please do not has a hesitate to contact us if anything is unclear. We are here to help.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <div className="row mb-3">
                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Name *" name="name" ref={register} />
                            {errors.name && <p className="text-danger pl-2"><small>{errors.name.message}</small></p>}
                        </div>

                        <div className="col-sm-6">
                            <Form.Control type="text" placeholder="Email *" name="email" ref={register} />
                            {errors.email && <p className="text-danger pl-2"><small>{errors.email.message}</small></p>}
                        </div>
                    </div>

                    <Form.Control as="textarea" rows={3} type="text" placeholder="Message *" name="message" ref={register} />
                    {errors.message && <p className="text-danger pl-2"><small>{errors.message.message}</small></p>}

                    <br />
                    <SubmitBtn />
                </Form.Group>
            </form>
        </div>
    );
}

export default ContactForm;