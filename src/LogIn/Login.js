/*import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}*/

import "./Login.css";
import { FcGoogle } from 'react-icons/fc';
import { GrTwitter } from 'react-icons/gr';
import { GrLinkedinOption } from 'react-icons/gr';
import { AiFillGithub } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { Link } from "react-router-dom"


import React, { useState, useEffect } from 'react';
import * as yup from "yup";
const logInSchema = yup.object().shape({
    Email: yup.string().required(),
    CreatePassword: yup.string().min(8).required(),

})
const inErrs = {
    Email: '',
    CreatePassword: '',
}
export default function LoginPage() {
    const [Email, setEmail] = useState("");
    const [CreatePassword, setPass] = useState("");
    const [errors, setErrors] = useState(inErrs);
    const [submitted, setSubmitted] = useState(false);
    const data = { Email, CreatePassword };

    const validateForm = (data) => {
        logInSchema
            .validate(data, { abortEarly: false })

            .then((obj) => {

                setErrors(inErrs);

            }).catch((err) => {

                const newErrors = err.inner.reduce((acc, curr) => {

                    acc[curr.path] = curr.message;
                    return acc;
                }, {})
            
                setErrors(newErrors);
            })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        validateForm(data);
    }

    const setObject = {
        Email: setEmail,
        CreatePassword: setPass,
    };

    useEffect(() => {
        if (submitted) {
            validateForm(data);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Email, CreatePassword]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setObject[name](value);

    }
    return (
        <div className="container">
            <div className="login-cont">
                <div className="login-color">
                    <div>
                        <div className="ec-con">
                            <div className="ecl1"></div>
                            <div className="ecl"></div>
                        </div>
                        <div className="title">Gamers</div>
                    </div>

                    <div className="login-desc">
                        <p className="qoute"></p>
                        <div> always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
                            </div>
                    </div>
                    <div className="login-auth">Hideo Kojima</div>
                    <div className="login"></div>
                </div>

            </div>
            <div>

                <form style={{ marginLeft: "127px" }} onSubmit={handleSubmit}>
                    <div>
                        <h1 style={{ justifyContent: "center" }}>Join the game!</h1>
                        <p style={{ marginTop: "0px" }}>Go inside the best gamers social network!</p>
                    </div>
                    <div className="icon-cont">
                        <div className="icon"><FcGoogle style={{ paddingTop: "15px" }} /></div>
                        <div className="icon" style={{ color: "#55ACEE" }}><GrTwitter style={{ paddingTop: "15px" }} /></div>
                        <div className="icon" style={{ color: "#0E76A8" }}><GrLinkedinOption style={{ paddingTop: "15px" }} /></div>
                        <div className="icon" style={{ color: "#000000" }}><AiFillGithub style={{ paddingTop: "15px" }} /></div>
                    </div>
                    <div className="line" style={{ width: "55%" }}><p className="or">or</p></div>
                    <label htmlFor="Email">
                        Your email    </label>
                    <input type="email" placeholder="Write your email" value={Email} onChange={handleChange} name="Email" />
                    {errors && <div className="err">{errors.Email}</div>}
                    <label htmlFor="CreatePassword">
                        Enter your password    </label>
                    <div >
                        <i className="eye-icon"> <BsEye /></i>
                        <input type="password" value={CreatePassword} onChange={handleChange} name="CreatePassword" />
                    </div>
                    {errors && <div className="err">{errors.CreatePassword}</div>}
                    <input style={{ paddingLeft: "181px" }} type="submit" value="Login" />
                    <p className="register" >Don’t have an account?  <Link to="/signup"> Register</Link></p>
                </form>
            </div>
        </div >);

}





