import React, {useState} from "react";
import BCR83 from "../../assets/image/Group 83.png";
import LogoBCR from "../../assets/image/logo2.svg";
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  Row,
  Col,
  Toast,
  ToastContainer,
  ToastHeader,
  ToastBody,
} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { signupCustomer } from "../../store/actions/register-slice";
import {useDispatch} from "react-redux";
import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const toastShow = () => {
    setShow(true);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("succes");
    dispatch(signupCustomer({email: email, password: password, name: name}))
      .unwrap()
      .then(() => navigate("/login"));
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
                delay={7000}
                autohide
              >
                <ToastHeader>
                  <strong className="me-auto">Message</strong>
                  <small>just now</small>
                </ToastHeader>
                <ToastBody className={variant === "info" && "text-white"}>
                  Anda Berhasil Buat Akun !!
                </ToastBody>
              </Toast>
            ))}
          </ToastContainer>
        </Col>
      </Row>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 Regis-lf">
            <div className="mb-3">
              <img src={LogoBCR} alt=""></img>
            </div>
            <h2>Sign Up</h2>
            <Form onSubmit={handleRegister}>
              <FormGroup className="mb-3" controlId="formBasicName">
                <FormLabel>Name *</FormLabel>
                <FormControl
                  type="name"
                  placeholder="Full Name"
                  onChange={handleName}
                ></FormControl>
              </FormGroup>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Contoh: johndee@gmail.com"
                  onChange={handleEmail}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Create Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="6+ karakter"
                  onChange={handlePassword}
                />
              </Form.Group>

              <Button
                onClick={toastShow}
                variant="primary"
                type="submit"
                className="w-100 mb-3"
              >
                Sign Up
              </Button>
            </Form>
            <div>
              <p>
                Alread have an account?
                <Link to={"/"}>Sign in here</Link>
              </p>
            </div>
          </div>

          <div className="col-6 Regis-rg">
            <img className="w-100" src={BCR83} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;