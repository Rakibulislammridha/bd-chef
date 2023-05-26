import React, { useEffect, useState } from "react";
import Chef from "../Chef/Chef";
import { Container } from "react-bootstrap";

const ChefDetails = () => {
  // chefs data on state
  const [chefs, setChefs] = useState([]);

  // fetch data
  useEffect(() => {
    fetch("https://bd-chef-recipe-server-rakibulislammridha.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    // chefs container
    <Container
      className="bg-success text-dark bg-opacity-10"
      style={{ fontFamily: "playfairDisplay" }}
    >
      <h1
        className="text-center mt-5"
        style={{ fontSize: "45px", fontFamily: "playfairDisplay" }}
      >
        Our Master <span style={{ color: "#da722c" }}>Chefs</span>
      </h1>

      {/* find single chef using .map */}
      <div
        className="mt-4 mb-4 row justify-content-center"
        style={{ gridGap: "90px" }}
      >
        {chefs.map((chef) => (
          <Chef key={chef.id} chef={chef}></Chef>
        ))}
      </div>
    </Container>
  );
};

export default ChefDetails;
