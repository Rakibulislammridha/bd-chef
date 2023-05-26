import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../../firebase/firebase.config";

const Register = () => {
  const { createUser, setUser } = useContext(AuthContext);

  // create auth for update user profile
  const auth = getAuth(app);

  // error state
  const [error, setError] = useState("");

  //  navigate hook
  const navigate = useNavigate();

  // set current location of user
  const location = useLocation();

  // user location tracker
  const from = location.state?.from?.pathname || "/login" || "/";

  // checkbox state
  const [accepted, setAccepted] = useState(false);

  // handle register page
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // creating user
    createUser(email, password, photo)
      .then((userCredential) => {
        const currentUser = userCredential.user;
        // Signed in
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          setError("");
          navigate(from);
        });
        setUser(currentUser);
        console.log(currentUser);
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          setError("The password is less than 6 characters put 6 or more");
        } else if (error.code === "auth/invalid-email") {
          setError("Invalid email provide a complete email address");
        }
      });
  };

  // handle checkbox field
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    // register form
    <div
      className="mx-auto bg-success p-2 bg-opacity-10"
      style={{
        fontFamily: "playfairDisplay",
        border: "1px solid gray",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "20px",
        height: "600px",
        width: "450px",
      }}
    >
      <h1 className="mt-4 text-center">Create A New Account !</h1>
      <Form onSubmit={handleRegister} className="mb-4 p-2">
        <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
          <Form.Label>Enter Your Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
          <Form.Label>Enter Photo URL</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter Your Photo URL"
            required
          />
        </Form.Group>
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
        </Form.Group>
        {error && <Form.Text className="text-danger">{error}</Form.Text>}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept{" "}
                <Link
                  style={{
                    color: "#da722c",
                    marginLeft: "4px",
                  }}
                  to="/terms"
                >
                  Terms And Conditions
                </Link>
              </>
            }
          />
        </Form.Group>{" "}
        {/* end of registration form */}
        {/* submit btn */}
        <Button
          type="submit"
          className="p-2 text-white border border-0"
          style={{
            fontSize: "18px",
            background: "#da722c",
            width: "110px",
            marginBottom: "8px",
          }}
          disabled={!accepted}
        >
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Already Have An Account ?{" "}
          <Link style={{ color: "#da722c" }} to="/login">
            Login
          </Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Register;
