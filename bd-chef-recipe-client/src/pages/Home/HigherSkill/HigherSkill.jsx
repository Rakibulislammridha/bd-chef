import React from "react";
import higherSkillCover from "../../../assets/higherSkill.jpg";
import { FaBook, FaVideo } from "react-icons/fa";
import "./HigherSkill.css";

const HigherSkill = () => {
  return (
    //  HigherSkill section start
    <div
      style={{ fontFamily: "playfairDisplay" }}
      className="bg-success p-2 text-dark bg-opacity-10 rounded"
    >
      <h1 style={{ fontSize: "45px" }} className="text-center mt-2 mb-4">
        Makes your Skill Higher{" "}
        <span style={{ color: "#da722c" }}>Cooking at Home</span>
      </h1>
      <div className="higher-skills d-flex d-flex justify-content-center align-items-center position-relative">
        <img
          className="rounded me-4"
          style={{ width: "500px", height: "600px" }}
          src={higherSkillCover}
          alt=""
        />
        <div
          className="all-recipe border rounded bg-opacity-10 position-absolute bottom-0 end-50 translate-middle-x text-white text-center"
          style={{ width: "150px", height: "100px", background: "#023047" }}
        >
          <FaBook style={{ fontSize: "30px", marginTop: "8px" }}></FaBook>{" "}
          <h3 className="fw-bold mb-0 mt-2">200+</h3>
          <p>Food Recipes</p>
        </div>

        <div className="skills-description">
          <h2 style={{ fontSize: "45px" }}>
            Elevated Home Cooking: <br />
            <span style={{ color: "#da722c" }}>
              Taking Your Culinary Skills to New Heights
            </span>
          </h2>
          <p>
            <small>
              In this section, we delve into the realm of higher-level cooking
              techniques and tips to elevate your culinary prowess right in the
              comfort of your own home. Whether you're an aspiring home chef or
              looking to refine your cooking skills, we provide step-by-step
              instructions, expert advice, and innovative recipes to help you
              create restaurant-quality dishes.
            </small>
          </p>
          <div className="d-flex watch-time">
            <FaVideo
              className="watch-font"
              style={{ fontSize: "40px" }}
            ></FaVideo>{" "}
            <p
              className="watch-text"
              style={{ fontSize: "20px", marginTop: "7px", marginLeft: "8px" }}
            >
              Watch Video
            </p>
          </div>
        </div>
      </div>
    </div>
    // HigherSkill section start
  );
};

export default HigherSkill;
