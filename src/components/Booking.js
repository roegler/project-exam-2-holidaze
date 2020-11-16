import React from 'react';
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';
import { Modal, closeButton } from 'react-bootstrap'
import InquiryBtn from './InquiryBtn';

function Booking(props) {
    const schema = yup.object().shape({
        firstName: yup
            .string()
            .required("First name is required")
            .min(2, "Your first name must contain at least 2 characters"),

        lastName: yup
            .string()
            .required("Last name is required")
            .min(2, "Your last name must contain at least 2 characters"),

        email: yup
            .string()
            .email('Invalid email')
            .required("Email is required"),

        startDate: yup
            .string()
            .required("Pleace select a start date for your stay"),

        endDate: yup
            .string()
            .required("Pleace select a end date for your stay")
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Modal show={props.show} onHide={props.onHide}>
            <Modal.Header closeButton>
                <Modal.Title>BOOK ROOM</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <div className="row">
                            <div className="col-sm-12 pb-2">
                                <Form.Control type="text" placeholder="First name *" name="firstName" ref={register} />
                                {errors.firstName && <p className="text-danger pl-2"><small>{errors.firstName.message}</small></p>}
                            </div>

                            <div className="col-sm-12 pb-2">
                                <Form.Control type="text" placeholder="Last name *" name="lastName" ref={register} />
                                {errors.lastName && <p className="text-danger pl-2"><small>{errors.lastName.message}</small></p>}
                            </div>

                            <div className="col-sm-12 pb-2">
                                <Form.Control type="text" placeholder="Email *" name="email" ref={register} />
                                {errors.email && <p className="text-danger pl-2"><small>{errors.email.message}</small></p>}
                            </div>

                            <div className="col-sm-6 pb-2">
                                <Form.Control type="date" placeholder="Start date *" name="startDate" ref={register} />
                                {errors.startDate && <p className="text-danger pl-2"><small>{errors.startDate.message}</small></p>}
                            </div>

                            <div className="col-sm-6 pb-2">
                                <Form.Control type="date" placeholder="End date *" name="endDate" ref={register} />
                                {errors.endDate && <p className="text-danger pl-2"><small>{errors.endDate.message}</small></p>}
                            </div>


                            <div className="col-sm-6 pb-2">
                                <label htmlFor="sel1">Select number of guests: </label>
                                <select id="sel1" className="ml-1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                </select>
                            </div>

                            <div className="col-sm-6 pb-2">
                                <label htmlFor="sel1">Select number of room: </label>
                                <select id="sel1" className="ml-1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>

                        </div>

                    </Form.Group>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <InquiryBtn id={props.id} title={"SUBMIT"}/>
            </Modal.Footer>
        </Modal>
    );
}

export default Booking;