import React, { useState } from 'react'
import './Login.css'
import {Form, Button} from 'react-bootstrap';
import loginimage from "../../assets/image/login-image.png";
import { loginCustomer,logout } from '../../store/actions/actions-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [inputEmail, setInputEmail] = useState () 
    const [inputPassword,setInputPassword] = useState ()
    const handleEmail = (e) => {
        e.preventDefault ()
        setInputEmail (e.target.value)
    }

    const hadlePassword = (e) => {
        e.preventDefault ()
        setInputPassword (e.target.value)
    }

    const dispatch = useDispatch()
    const navigate = useNavigate ()
    const handleLogin = (e)=>{
        e.preventDefault()
        console.log('login',);
    dispatch(loginCustomer({email:inputEmail,password:inputPassword}))
            .unwrap()
            .then(()=>navigate('/'))

            // dispatch(logout())
    }
    return (
        <section>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-6 lf-login'>
                        <h2>Welome Back !</h2>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={handleEmail}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={hadlePassword}/>
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

export default Login