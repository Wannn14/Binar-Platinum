import React from 'react'
import './login.css'
import {Form, Button} from 'react-bootstrap';
import loginimage from "../../assets/image/login-image.png";

const login = () => {
    return (
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 lf-login'>
                        <h2>Welome Back !</h2>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Button variant="primary" type="submit" className='w-100 mb-3'>
                                Sign In
                            </Button>
                        </Form>
                        <div className='sign-text'>
                            <p className='text-center'>
                                Don't have an account?
                                <a href='#'>Sign Up for free</a>
                            </p>
                        </div>

                    </div>

                    <div className='col-6 rg-login'>
                        <h1 className='text-white mb-5'>Binar Car Rental</h1>
                        <img className='w-100' src={loginimage} alt=""/>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default login