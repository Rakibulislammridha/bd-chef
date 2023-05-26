import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import "./Header.css";

const Header = () => {
  // get user and logout  using useContext hook
  const { user, logout } = useContext(AuthContext);

  const [isHovered, setIsHovered] = useState(false);

  //  handle logout for user logout
  const handleLogout = () => {
    logout()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Header section */}
      <div
        className="d-flex flex-column flex-sm-row justify-content-between mt-4 mb-4 sticky-top"
        style={{ fontFamily: "playfairDisplay" }}
      >
        {/* Header title */}
        <h2>
          BD <span style={{ color: "#da722c" }}>Chefs</span>
        </h2>
        {/* Navigation links */}
        <div className="">
          <NavLink className="me-4 text-decoration-none text-secondary" to="/">
            Home
          </NavLink>
          <NavLink className="text-decoration-none text-secondary" to="/blogs">
            Blogs
          </NavLink>
        </div>
        {/* User profile picture and authentication buttons */}
        <div
          className="d-flex align-items-center mt-3 mt-sm-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {user && (
            <div className="profile" style={{ position: "relative" }}>
              <img
                src={user?.photoURL}
                className="rounded-circle"
                style={{
                  marginRight: "10px",
                  fontSize: "30px",
                  width: "50px",
                  height: "50px",
                }}
              ></img>
              {isHovered && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#ffffff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {user?.displayName}
                </span>
              )}
            </div>
          )}
          {user ? (
            <Button
              onClick={handleLogout}
              className="p-2 text-white border border-0"
              style={{
                fontSize: "18px",
                background: "#da722c",
                width: "110px",
              }}
            >
              Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button
                className="p-2 text-white border border-0"
                style={{
                  fontSize: "18px",
                  background: "#da722c",
                  width: "110px",
                }}
              >
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div>
        {/* Marquee section */}
        <Marquee
          style={{
            color: "#da722c",
            fontSize: "40px",
            marginBottom: "20px",
            fontFamily: "playfairDisplay",
          }}
        >
          BD CHEFS : Flavors of the international, A Culinary Voyage with BD
          Chef !!
        </Marquee>
      </div>
    </>
  );
};

export default Header;
