import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "../Meals/MealsSummary";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>SathvikMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
      <MealsSummary />
    </Fragment>
  );
};

export default Header;
