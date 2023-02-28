import React, {useState} from "react";
import "./login.css";
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
  const [show, setShow] = useState(false);

  const toastShow = () => {
    setShow(true);
  };

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
      .then(() => navigate("/"));

    // dispatch(logout())
  };
  return (
    <section>
      <Row>
        <Col xs={6}>
          <ToastContainer className="p-3" position="top-center">
            {["info"].map((variant, idx) => (
              <Toast
                className="d-inline-block m-1"
                bg={variant.toLocaleLowerCase()}
                key={idx}
                onClose={() => setShow(false)}
                show={show}
                delay={3000}
              >
                <ToastHeader>
                  <strong className="me-auto">Message</strong>
                  <small>just now</small>
                </ToastHeader>
                <ToastBody className={variant === "info" && "text-white"}>
                  Login Berhasil !
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
                onClick={toastShow}
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
