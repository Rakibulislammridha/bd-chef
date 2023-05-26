import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { getAuth, signInWithPopup } from "firebase/auth";

// login page

const Login = () => {
  //  get data from AuthContext
  const { signIn, githubProvider, googleProvider } = useContext(AuthContext);

  // error showing
  const [error, setError] = useState("");

  // get auth from firebase
  const auth = getAuth();

  // navigate hook
  const navigate = useNavigate();

  // user location tracer
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // handle login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // login user
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/wrong-password") {
          setError("Wrong password. Please try again.");
        } else if (error.code === "auth/user-not-found") {
          setError("User not found. Please check your email.");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid Email");
        }
      });
  };

  // handle login with github
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle login with google
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // login form
    <div
      className="mx-auto bg-success p-2 bg-opacity-10"
      style={{
        fontFamily: "playfairDisplay",
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "20px",
        height: "550px",
        width: "450px",
      }}
    >
      <h1 className="mt-4 text-center">Please Login</h1>
      <Form onSubmit={handleLogin} className="mb-4 p-2">
        <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          {error && <Form.Text className="text-danger mt-4">{error}</Form.Text>}
        </Form.Group>
        <Button
          type="submit"
          className="p-2 text-white border border-0"
          style={{
            fontSize: "18px",
            background: "#da722c",
            width: "110px",
            marginBottom: "8px",
          }}
        >
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't Have An Account ?{" "}
          <Link style={{ color: "#da722c" }} to="/register">
            Register
          </Link>
        </Form.Text>
      </Form>
      {/* login form end */}

      <hr />

      {/* google and github icons */}

      <div>
        <h4 className="text-center text-decoration-underline">Or Login With</h4>
        <div style={{ textAlign: "center", fontSize: "30px" }}>
          <FaGoogle
            onClick={handleGoogleLogin}
            style={{ marginRight: "30px" }}
          ></FaGoogle>
          <FaGithub onClick={handleGithubLogin}></FaGithub>
        </div>
      </div>
    </div>
  );
};

export default Login;
