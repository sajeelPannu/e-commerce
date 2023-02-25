import React, { useContext, useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../config/firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

const initialState = { email: "", password: "" };

export default function Register() {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const [state, setState] = useState(initialState);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleRegister = () => {
    const { email, password } = state;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        dispatch({ type: "LOGIN", payload: { user } });
        navigate("/");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        // ..
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card p-5 mt-5 mx-auto" style={{ maxWidth: 580 }}>
            <h1 className="text-center mb-5">Register</h1>
            <input
              className="form-control"
              onChange={handleChange}
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="form-control my-5"
              onChange={handleChange}
              type="password"
              placeholder="Password"
              name="password"
            />
            <button
              className="btn btn-info w-50 mx-auto"
              onClick={handleRegister}
            >
              Register
            </button>

            <Link to="/auth/login" className="btn btn-success mt-1 w-50 mx-auto">Already a User?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
