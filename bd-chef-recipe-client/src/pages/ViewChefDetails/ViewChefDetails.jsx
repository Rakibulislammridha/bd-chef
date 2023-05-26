import React from "react";
import { Button } from "react-bootstrap";
import { FaHome, FaThumbsUp } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import LazyLoad from "react-lazyload";

const ViewChefDetails = () => {
  // load data
  const chef = useLoaderData();

  // object destructuring
  const { name, likes, image, numberOfRecipe, experience, aboutChef } = chef;

  return (
    <>
      {/* Chef Details Container */}
      <div className="bg-success p-2 text-dark bg-opacity-10 rounded">
        {/* section title */}
        <h1
          style={{ fontSize: "55px", fontFamily: "playfairDisplay" }}
          className="text-center mb-4"
        >
          {" "}
          <span style={{ color: "#da722c" }}>Hey Buddy !</span> I Am :
        </h1>
        <div
          className="d-flex justify-content-center align-items-center bg-success-subtle text-emphasis-success"
          style={{ fontFamily: "playfairDisplay" }}
        >
          {/* single chef details section description */}
          <div className=" me-4">
            <h1 style={{ fontSize: "55px" }}>{name}</h1>
            <h4>About Me:</h4>
            <p>{aboutChef}</p>
            <h5 className="mb-4">
              I Have{" "}
              <span style={{ fontWeight: "bold", color: "#da722c" }}>
                {experience}
              </span>{" "}
              Experience
            </h5>
            <div className="d-flex mt-2 mb-4">
              <FaThumbsUp
                style={{ color: "#da722c" }}
                className="me-2"
              ></FaThumbsUp>
              <h5 className="">{likes} +likes</h5>
            </div>
            <div
              className="border rounded bg-opacity-10 text-start mb-4"
              style={{ width: "210px", height: "150px", background: "#f8f5f5" }}
            >
              {" "}
              <h6
                style={{ textDecoration: "underline", fontWeight: "bold" }}
                className="ms-2 mt-2"
              >
                My Recipes:
              </h6>
              {numberOfRecipe.map((recipe) => (
                <ol key={recipe.recipeId} className="mb-0">
                  <small>{recipe.recipeName}</small>
                </ol>
              ))}
            </div>
            <Link to="/">
              <Button
                className="p-2 text-center text-white border border-0 mb-4"
                style={{
                  fontSize: "18px",
                  background: "#da722c",
                  width: "210px",
                }}
              >
                Back To Home
                <FaHome className="ms-2"></FaHome>
              </Button>
            </Link>
          </div>
          {/* single chef details section cover photo */}
          <LazyLoad>
            <img className="rounded" src={image} alt="" />
          </LazyLoad>
        </div>
      </div>
      {/* recipe section */}
      <div className="mt-4 bg-success p-2 bg-opacity-10 rounded">
        <h1
          style={{ fontSize: "60px", fontFamily: "playfairDisplay" }}
          className="mt-4 text-center mb-4"
        >
          My <span style={{ color: "#da722c" }}>Recipe</span>
        </h1>
        {/* single recipe card */}
        <div
          style={{ marginLeft: "130px" }}
          className="d-flex gap-4 mt-4 align-items-center"
        >
          {numberOfRecipe.map((recipe) => (
            <Recipe key={recipe.recipeId} recipe={recipe}></Recipe>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewChefDetails;
