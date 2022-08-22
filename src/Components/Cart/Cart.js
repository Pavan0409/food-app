import React, { useContext,  useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [quantity, setQuantity] = useState(); 
  const cartcntx = useContext(CartContext);

  const cartItemDecrementHandler = (id) => {
    cartcntx.removeItem(id);
   setCartItem(cartItem => 
      cartItem.map((item) => id === item.id ? {...item, quantity:item.quantity - 1}:item
      )
    );
  };

  const cartItemIncrementHandler = (id) => {
    // setQuantity(qty);
    cartcntx.addItem(cartItems => 
        cartItems.map((items) => id === items.id ? {...items, quantity:items.quantity + 1}:items
        )
    );  
    // setCartItem(cartItems => 
    //   cartItems.map((items) => id === items.id ? {...items, quantity:items.quantity + 1}:items
    //   )
    // );
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartcntx.items.map((item) => (
        <li className={classes["cart-item"]}>
          <div>
            <h2>{item.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>₹{item.price}</span>
              <span className={classes.quantity}>x {item.quantity}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={() => cartItemDecrementHandler(item.id)}>-</button>
            <button onClick={() => cartItemIncrementHandler(parseInt(item.id))}>+</button>
          </div>
        </li>
      ))}
    </ul>
  );

  const prices = cartcntx.items.map((item) => item.price);
  let total = 0;
  for (var i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  const totalAmount = parseInt(total.toFixed(2));

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button} onClick={props.onClose}>
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
