import React from "react";

import Cover from "../Cover/Cover";
import ChefDetails from "../ChefDetails/ChefDetails";
import HigherSkill from "../HigherSkill/HigherSkill";
import CookingClass from "../CookingClass/CookingClass";

// home page layout
const Home = () => {
  return (
    <>
      <Cover></Cover>
      <ChefDetails></ChefDetails>
      <HigherSkill></HigherSkill>
      <CookingClass></CookingClass>
    </>
  );
};

export default Home;
