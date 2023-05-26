import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark bg-opacity-1 text-white p-5">
      {/* footer content start */}
      <div
        className="d-flex flex-wrap justify-content-between"
        style={{ fontFamily: "playfairDisplay" }}
      >
        {/* Footer logo and description */}
        <div>
          <h3>
            BD <span style={{ color: "#da722c" }}>Chefs</span>
          </h3>
          <p>
            <small>
              Introducing BD Chefs, a culinary destination that tantalizes your
              taste buds.
            </small>
          </p>
          <p>
            <small>Email: dr.rakibulislammridha@gmail.com </small>
          </p>
        </div>
        {/* Important links */}
        <div className="">
          <h4>Important Links</h4>
          <Link className="text-decoration-none text-white" to="/">
            Home
          </Link>{" "}
          <br />
          <Link className="text-decoration-none text-white" to="/blogs">
            Blogs
          </Link>
        </div>
        {/* Social media icons */}
        <div>
          <h4 className="mb-4">Find us On</h4>
          <FaFacebook
            style={{ marginRight: "10px", fontSize: "25px" }}
          ></FaFacebook>
          <FaInstagram
            style={{ marginRight: "10px", fontSize: "25px" }}
          ></FaInstagram>
          <FaTwitter
            style={{ marginRight: "10px", fontSize: "25px" }}
          ></FaTwitter>
        </div>
      </div>
      {/* Footer disclaimer */}
      <p>
        <small>
          © 2023 BD Chefs PTK Ltd. Trademarks and brands are the property of
          their respective owners.
        </small>
      </p>
      {/*  footer content end  */}
    </div>
  );
};

export default Footer;
