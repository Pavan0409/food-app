import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    console.log(id, '---------id');
    cartcntx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li className={classes['cart-item']}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>{item.price}</span>
              <span className={classes.quantity}>{item.quantity}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={() => cartItemRemoveHandler(item.id)}>-</button>
            <button onClick={item.onAdd}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  const prices = cartcntx.items.map((item) => item.price);
  let total = 0;
  for(var i; i<prices.length; i++){
    total += prices[i];
  }

  const totalAmount = total.toFixed(2);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
