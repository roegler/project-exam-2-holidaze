import React from 'react';
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import { Modal } from 'react-bootstrap'
import EnquiryBtn from './EnquiryBtn';

function Booking(props) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .required("Name is required")
            .min(2, "Your name must contain at least 2 characters"),

        email: yup
            .string()
            .email('Invalid email')
            .required("Email is required"),

        checkIn: yup
            .string()
            .required("Pleace select a check in date for your stay"),

        checkOut: yup
            .string()
            .required("Pleace select a check out date for your stay")
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    
    function onSubmit(data) {
        console.log("data", data);

        let myHeaders = new Headers();
        myHeaders.append("key", "5f92c26e069f2212ce387be6");
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: JSON.stringify(data)
        };

        fetch("https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/enquiries", requestOptions)
            .then (() => {
                alert("Thank you, your booking was successfully submitted.")
            })
            .catch(error => console.log(error));
    }
    return (
        <Modal show={props.show} onHide={props.onHide}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Header closeButton>
                    <Modal.Title>BOOK ROOM</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group>
                        <div className="row">
                            <div className="col-sm-12 pb-2">
                                <Form.Control type="text" placeholder="Full name *" name="name" ref={register} />
                                {errors.name && <p className="text-danger pl-2"><small>{errors.name.message}</small></p>}
                            </div>

                            <div className="col-sm-12 pb-2">
                                <Form.Control type="text" placeholder="Email *" name="email" ref={register} />
                                {errors.email && <p className="text-danger pl-2"><small>{errors.email.message}</small></p>}
                            </div>

                            <div className="col-sm-6 pb-2">
                                <Form.Control type="date" placeholder="Check in *" name="checkIn" ref={register} />
                                {errors.checkIn && <p className="text-danger pl-2"><small>{errors.checkIn.message}</small></p>}
                            </div>

                            <div className="col-sm-6 pb-2">
                                <Form.Control type="date" placeholder="Check out *" name="checkOut" ref={register} />
                                {errors.checkOut && <p className="text-danger pl-2"><small>{errors.checkOut.message}</small></p>}
                            </div>

                            <input type="hidden" value={props.establishmentId} name="establishmentId" ref={register} />
                        </div>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <EnquiryBtn id={props.id} title={"SUBMIT"} />
                </Modal.Footer>
            </form>
        </Modal>
    );
}

export default Booking;