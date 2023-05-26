import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import LazyLoad from "react-lazyload";
import Rating from "react-rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Recipe = ({ recipe }) => {
  // favorite button state
  const [favorite, setFavorite] = useState(false);

  // object destructuring
  const { ingredients, recipeName, recipeImage, rating, cookingMethod } =
    recipe;

  // handle favorite btn
  const handleFavorite = () => {
    if (favorite) {
      return;
    } else {
      setFavorite(true);
      toast.success("Added to favorites successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    // recipe card
    <>
      <Card
        style={{
          width: "18rem",
          marginLeft: "20px",
          marginBottom: "25px",
          fontFamily: "playfairDisplay",
        }}
      >
        {/* recipe cover photo */}
        <LazyLoad>
          <Card.Img
            style={{ width: "286px", height: "300px" }}
            variant="top"
            src={recipeImage}
          />
        </LazyLoad>
        {/* recipe description */}
        <Card.Body>
          <Card.Title style={{ marginBottom: "10px", display: "flex" }}>
            {recipeName}{" "}
          </Card.Title>
          <Card.Text style={{ marginBottom: "8px" }}>
            {" "}
            <span style={{ fontWeight: "bold" }}>Cooking Method:</span>{" "}
            {cookingMethod}
          </Card.Text>
          {/* recipe Ingredients */}
          <div>
            <h5 className="mb-2">Ingredients :</h5>
            {ingredients.map((ingredient) => (
              <ol
                style={{ fontWeight: "normal", marginBottom: 0 }}
                key={ingredient}
              >
                <small>{ingredient}</small>
              </ol>
            ))}
          </div>
          {/* recipe ratings */}
          <div
            style={{
              marginBottom: "8px",
              marginTop: "10px",
              alignItems: "center",
            }}
          >
            {" "}
            <span>Ratings : </span>
            <Rating
              placeholderRating={rating?.number}
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
              readonly
            ></Rating>{" "}
            <span>{rating?.number}</span>
          </div>
          {/* favorite btn */}
          <div>
            <Button
              onClick={handleFavorite}
              className="p-2 text-center text-white border border-0 mb-2 mt-2"
              style={{
                fontSize: "18px",
                background: "#da722c",
                width: "250px",
              }}
              disabled={favorite}
            >
              Add To Favorite
              <FaRegHeart
                style={{
                  color: "#ffff",
                  fontSize: "20px",
                  marginLeft: "10px",
                }}
              ></FaRegHeart>
            </Button>
            <ToastContainer />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Recipe;
