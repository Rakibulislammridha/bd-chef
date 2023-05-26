import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import "./Chef.css";

const Chef = ({ chef }) => {
  // object destructuring
  const { id, name, likes, image, numberOfRecipe, experience } = chef;
  return (
    // chefs card container
    <div
      className="col-md-2 col-6 single-chef-card"
      style={{
        width: "420px",
        height: "597px",
        border: "1px solid #ffff",
        borderRadius: "10px",
        padding: "15px",
        textAlign: "center",
        marginLeft: "40px",
        background: "#f8f5f5",
        marginBottom: "20px",
      }}
    >
      <div className="chef-card">
        {/* chefs profile photo */}
        <div className="lazyload-wrapper">
          <LazyLoad>
            <img
              style={{
                width: "400px",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "10px",
                paddingRight: "8px",
              }}
              src={image}
              alt=""
            />
          </LazyLoad>
        </div>

        {/* card body */}
        <div className="chef-card-body text-start">
          <h3>{name}</h3>
          <h5 className="mb-2">Experience: {experience}</h5>
          <div className="recipe-container">
            <h5 className="mb-2">My Recipe: </h5>
            <div className="recipe">
              {numberOfRecipe.map((recipe) => (
                <p key={recipe.recipeId} className="mb-0">
                  {recipe.recipeName}
                </p>
              ))}
            </div>
          </div>
          <div className="d-flex mt-2">
            <FaThumbsUp className="me-2"></FaThumbsUp>
            <p>{likes}</p>
          </div>
        </div>
        <Link to={`/chef/${id}`}>
          {/* recipe details btn*/}
          <button
            className="p-2 text-white border border-0 w-100 align-bottom"
            style={{
              fontSize: "18px",
              background: "#da722c",
              marginTop: 0,
              borderRadius: "10px",
            }}
          >
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Chef;
