import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";
import error from "../../assets/Na_Nov_26.jpg";
import LazyLoad from "react-lazyload";

const ErrorPage = () => {
  return (
    // error page cover photo
    <div className="error-container">
      <div className="image">
        <LazyLoad>
          <img src={error} alt="" />
        </LazyLoad>
      </div>
      {/* error description */}
      <div className="error-title">
        <h1>Error 404 Page Not Found !!</h1>
        <Link to="/">
          <button className="error-btn">Back To Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
