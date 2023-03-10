import React, {useState} from "react";
import "./Login.css";
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
import loginimage from "../../assets/image/login-image.png";
import {loginCustomer} from "../../store/actions/actions-slice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import Logologin from "../../assets/image/logo2.svg";
import Closelogo from "../../assets/image/close.svg";

const Login = () => {
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [isToastShow, setIsToastShow] = useState(false);
  const [showmsg,setShowMsg] = useState ();
  const [bgToast, setBgToast] = useState ();

  const handleEmail = (e) => {
    e.preventDefault();
    setInputEmail(e.target.value);
  };

  const hadlePassword = (e) => {
    e.preventDefault();
    setInputPassword(e.target.value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
    dispatch(loginCustomer({email: inputEmail, password: inputPassword}))
      .unwrap()
      .then(() => 
      {
        setBgToast ('info')
        setShowMsg ('Selamat Anda Berhasil Login !!!')
        setIsToastShow (true);
        setTimeout(() => {
          navigate("/")
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 lf-login">
            <div className="logo-login">
              <a href="/">
                <img src={Logologin} alt="BCR" className="homelogo" />
              </a>

              <img src={Closelogo} alt="close" className="closelogo" />
            </div>
            <h2>Welome Back !</h2>
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
              <Button
                variant="primary"
                type="submit"
                className="w-100 mb-3"
              >
                Sign In
              </Button>
            </Form>
            <div className="sign-text">
              <p className="text-center">
                Don't have an account?
                <a href="/register">Sign Up for free</a>
              </p>
            </div>
          </div>

          <div className="col-6 rg-login">
            <h1 className="text-white mb-5">Binar Car Rental</h1>
            <img className="w-100" src={loginimage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
