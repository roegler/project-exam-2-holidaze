import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Form from 'react-bootstrap/Form';

function CreateEstablishment() {

    const schema = yup.object().shape({
        name: yup
            .string()
            .required("Name is required")
            .min(2, "The name must contain at least 2 characters"),

        email: yup
            .string()
            .email('Invalid email')
            .required("Email is required"),

        description: yup
            .string()
            .required("Description is required")
            .min(10, "Description must contain at least 10 characters"),

        price: yup
            .number()
            .required("Price is required")
            .positive()
            .default(0),

        maxGuests: yup
            .number()
            .default(0)
            .required("Max guests is required"),

        lat: yup
            .number()
            .required("Latitude")
            .positive(),

        lng: yup
            .number()
            .required("Longitude")
            .positive(),

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
     
            fetch("https://us-central1-noroff-final-exam.cloudfunctions.net/api/v1/establishments", requestOptions)
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                })
                .catch(error => console.log(error));

    }

    /*const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log("data", data);
    }*/

    return (
        <div>
            <h2>Create new establishment</h2>
            <p>Please fill out the form below.</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <div className="row mb-3">
                        <div className="col-sm-6 mb-3">
                            <Form.Control type="text" placeholder="Name *" name="name" ref={register} />
                            {errors.name && <p className="text-danger pl-2"><small>{errors.name.message}</small></p>}
                        </div>

                        <div className="col-sm-6 mb-3">
                            <Form.Control type="text" placeholder="Email *" name="email" ref={register} />
                            {errors.email && <p className="text-danger pl-2"><small>{errors.email.message}</small></p>}
                        </div>

                        <div className="col-sm-6 mb-3">
                            <Form.Control type="int" placeholder="Price *" name="price" ref={register} />
                            {errors.price && <p className="text-danger pl-2"><small>{errors.price.message}</small></p>}
                        </div>

                        <div className="col-sm-6 mb-3">
                            <Form.Control type="int" placeholder="Max guests *" name="maxGuests" ref={register} />
                            {errors.maxGuests && <p className="text-danger pl-2"><small>{errors.maxGuests.message}</small></p>}
                        </div>

                        <div className="col-sm-6 mb-3">
                            <Form.Control type="int" placeholder="Longitude *" name="lng" ref={register} />
                            {errors.lng && <p className="text-danger pl-2"><small>{errors.lng.message}</small></p>}
                        </div>

                        <div className="col-sm-6 mb-3">
                            <Form.Control type="int" placeholder="Latitude *" name="lat" ref={register} />
                            {errors.lat && <p className="text-danger pl-2"><small>{errors.lng.message}</small></p>}
                        </div>

                        <div className="col-sm-6 mb-3">
                            <Form.Control as="textarea" rows={3} type="text" placeholder="Description *" name="description" ref={register} />
                            {errors.description && <p className="text-danger pl-2"><small>{errors.description.message}</small></p>}
                        </div>

                        <div className="col-sm-6 mb-3">
                            <Form.Control type="file" placeholder="Image *" name="image" ref={register} />
                            {errors.image && <p className="text-danger pl-2"><small>{errors.image.message}</small></p>}
                        </div>

                    </div>

                    <br />
                    <button type="submit" className="btn btn-holidaze-secondary">Create</button>
                </Form.Group>
            </form>
        </div>
    );
}

export default CreateEstablishment;