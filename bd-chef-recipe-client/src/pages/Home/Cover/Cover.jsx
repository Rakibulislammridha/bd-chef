import React from "react";
import { Button } from "react-bootstrap";
import coverPhoto from "../../../assets/cover.jpg";
import LazyLoad from "react-lazyload";

const Cover = () => {
  return (
    // cover section container
    <div className="bg-success p-2 text-dark bg-opacity-10 rounded">
      {/* cover taille */}
      <h1
        style={{ fontSize: "55px", fontFamily: "playfairDisplay" }}
        className="text-center mb-4"
      >
        We Are <span style={{ color: "#da722c" }}>Always With You !</span>
      </h1>
      <div
        className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center bg-success-subtle text-emphasis-success"
        style={{ fontFamily: "playfairDisplay" }}
      >
        {/* chef cards description */}
        <div className="text-center text-md-start ms-md-4">
          <h1 style={{ fontSize: "55px" }}>
            Helping You To Be <br /> Chef At Your Own <br />
            <span style={{ color: "#da722c" }}>House</span>
          </h1>
          <p>
            Discover the joy of cooking and unlock your inner chef with our
            expert guidance and resources. <br /> We are dedicated to helping
            you become a culinary maestro in the comfort of your own house.
          </p>
          <Button
            className="p-2 d-flex text-white border border-0"
            style={{ fontSize: "18px", background: "#da722c", width: "110px" }}
          >
            Learn More
          </Button>
        </div>

        {/* cover photo on cover section */}
        <LazyLoad>
          <img className="rounded mb-3 mb-md-0" src={coverPhoto} alt="" />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Cover;
