import React, {useState} from "react";
import BCR83 from "../../assets/image/Group 83.png";
import LogoBCR from "../../assets/image/logo2.svg";
import {Form, Button, FormGroup, FormLabel, FormControl} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegist = () => {
    const payload = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post(
        "https://bootcamp-rent-cars.herokuapp.com/customer/auth/register",
        payload
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.acces_token);
        Navigate("/");
      });
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 Regis-lf">
            <div className="mb-3">
              <img src={LogoBCR} alt=""></img>
            </div>
            <h2>Sign Up</h2>
            <Form>
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
                onClick={handleRegist}
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

          <div className="col-6">
            <img className="w-100" src={BCR83} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
