import { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import React from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx, "-------header cart");
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    console.log(item, "----item");
    quantity = quantity + Number(item.quantity);
  });
  console.log(quantity, "----quantity");

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
