import React from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

function Login() {
    const schema = yup.object().shape({
        username: yup
            .string()
            .required("Username is required")
            .min(2, "Your username must contain at least 2 characters"),

        password: yup
            .string()
            .required("Password is required")
            .min(7, "Your password must contain at least 7 characters")
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <div>
            <div className="card-shadow p-5">
                <h1>Login to Holidaze admin page</h1>
                <p>Please enter you username and password.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group>
                        <div className="row mb-3 d-flex flex-column">
                            <div className="col-sm-4 pb-3">
                                <Form.Control type="text" placeholder="Username *" name="username" ref={register} />
                                {errors.username && <p className="text-danger pl-2"><small>{errors.username.message}</small></p>}
                            </div>

                            <div className="col-sm-4">
                                <Form.Control type="text" placeholder="Password *" name="password" ref={register} />
                                {errors.password && <p className="text-danger pl-2"><small>{errors.password.message}</small></p>}
                            </div>
                        </div>

                        <br />
                        <button type="button" className="btn btn-holidaze-secondary">
                            SIGN IN
                        </button>
                    </Form.Group>
                </form>
            </div>
        </div>
    );
}

export default Login;