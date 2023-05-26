import React from "react";
import { Button, Card } from "react-bootstrap";
import classSectionImage from "../../../assets/ClassCover.jpg";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./CookingClasses.css";

const CookingClass = () => {
  return (
    // class section
    <Card
      className="cooking-classes  text-white mt-4 mb-4"
      style={{ fontFamily: "playfairDisplay" }}
    >
      {/* class section cover photo */}
      <div className="lazyload-wrapper">
        <LazyLoad>
          <div className="lazyload-wrapper">
            <Card.Img
              src={classSectionImage}
              alt="Card image"
              style={{ height: "auto", maxHeight: "550px" }}
            />
          </div>
        </LazyLoad>
      </div>

      {/* class section description */}
      <Card.ImgOverlay className="text-center p-4">
        <div
          style={{ marginTop: "40px" }}
          className="d-flex flex-column justify-content-center align-items-center card-details"
        >
          <Card.Title
            className="mt-0 mt-md-4 mb-0 mb-md-4 card-title"
            style={{ fontSize: "60px", lineHeight: "65px" }}
          >
            Join Our Cooking Class <br />
            <span style={{ color: "#da722c" }}>Become a Chef</span>
          </Card.Title>
          <Card.Text
            className="mb-2 mb-md-4 card-text"
            style={{ fontSize: "28px", lineHeight: "35px" }}
          >
            Unleash your culinary potential and embark on a transformable
            journey by enrolling in our immersive cooking class. <br /> Designed
            for aspiring chefs and passionate home cooks alike.
          </Card.Text>
          <Link to="register">
            <div className="register-btn-on-cooking-class">
              <Button
                className="p-2 text-white border border-0"
                style={{
                  fontSize: "22px",
                  background: "#da722c",
                  width: "250px",
                  marginTop: "20px",
                }}
              >
                Register Now
              </Button>
            </div>
          </Link>
        </div>
      </Card.ImgOverlay>
    </Card>
    // cooking class section end
  );
};

export default CookingClass;
