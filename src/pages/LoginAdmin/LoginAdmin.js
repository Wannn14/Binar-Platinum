import React, {useState} from 'react'
import './LoginAdmin.css'
import loginadmin from '../../assets/image/loginadmin.png'
import Logologin from "../../assets/image/logo2.svg";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import { loginAdmin } from '../../store/actions/admin-auth-slice';
import {
    Form,
    Button,
    Row,
    Col,
    Toast,
    ToastContainer,
    ToastHeader,
    ToastBody,
  } from "react-bootstrap";
const LoginAdmin = () => {
    const [inputEmail, setInputEmail] = useState();
    const [inputPassword, setInputPassword] = useState();
    const [isToastShow, setIsToastShow] = useState(false);
    const [showmsg,setShowMsg] = useState ();
    const [bgToast, setBgToast] = useState ();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleEmail = (e) => {
        e.preventDefault();
        setInputEmail(e.target.value);
      };
    
      const hadlePassword = (e) => {
        e.preventDefault();
        setInputPassword(e.target.value);
      };
      const handleLogin = (e) => {
        e.preventDefault();
        console.log("login");
        dispatch(loginAdmin({email: inputEmail, password: inputPassword}))
          .unwrap()
          .then(() => 
          {
            setBgToast ('info')
            setShowMsg ('Selamat Anda Berhasil Login !!!')
            setIsToastShow (true);
            setTimeout(() => {
              navigate("/chart");
            }, 2000);
          })
          .catch((error)=>{
            setBgToast ('danger')
            setShowMsg ('Silahkan periksa email atau password anda ')
            setIsToastShow(true);
          });
    
      };


  return (
    <section>
        <Row>
        <Col xs={6}>
          <ToastContainer className="p-3" position="top-center">
            {[{bgToast}].map((variant, idx) => (
              <Toast
                className="d-inline-block m-1"
                bg={bgToast}
                key={idx}
                onClose={() => setIsToastShow(false)}
                show={isToastShow}
                delay={3000}
              >
                <ToastHeader>
                  <strong className="me-auto">Message</strong>
                </ToastHeader>
                <ToastBody className={variant === {bgToast} && "text-white"}>
                  {showmsg}
                </ToastBody>
              </Toast>
            ))}
          </ToastContainer>
        </Col>
      </Row>
    
    <div className='container-fluid'>
        <div className='row'>
            <div className='login-left col-8'>
                <img className="w-100" src={loginadmin} alt="" />

            </div>
            <div className='login-right col-4'>
                <img src={Logologin} alt="BCR" className="login-logo" />
                <h3 className='login-title'>
                    Welcome, Admin BCR
                </h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleEmail}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={hadlePassword}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mb-3">
                Sign In
              </Button>
            </Form>

            </div>
        </div>

    </div>
</section>
  )
}

export default LoginAdmin