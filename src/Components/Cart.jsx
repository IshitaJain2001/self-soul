import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { RxCaretLeft } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
export default function Cart() {
  const isOpen = useSelector((state) => state.isCartOpen);
  const dispatch = useDispatch();

const cartItems = useSelector((state) => state.cartDetails.product);
const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      {isOpen && (
        <div
          className="cart-overlay"
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
        ></div>
      )}

      <div className={`cart-panel ${isOpen ? "" : "closed"}`}>
        <div className="cart-header">
            <button onClick={() => dispatch({ type: "TOGGLE_CART" })}><RxCaretLeft /></button>
          <h2>YOUR CART</h2>
        
        </div>


  {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p className="cart-empty-message">YOUR BAG IS EMPTY</p>
            <span className="whoo">
              Whoops... Nothing in here! Explore around to add items.
            </span>
            <button className="cart-button-primary">START SHOPPING</button>
            <button className="cart-button-secondary">ADD FROM WISHLIST</button>
          </div>
        ) : (
          <div className="cart-items">
          {cartItems.map((item, index) => (
  <div key={index} className="cart-item">
   <div className="titles">
<h3>{item.item}</h3>
<div onClick={()=>dispatch({
  type:"REMOVE_FROM_CART" ,
  payload:index
})}><RxCross1 /> </div>
   </div>
    
   
    <div className="buttons">
<p className="quan"><button onClick={()=>dispatch({
      type:"DECREMENT_QUANTITY",
      payload:index
    })}>-</button>{item.quantity}<button onClick={()=>dispatch({
      type:"INCREMENT_QUANTITY",
      payload:index
    })}>+</button></p>
    <p> ₹{item.price * item.quantity}</p>
    </div>
    
  </div>
))}
<div className="cart-footer ">
<Link to="/Checkout">
<button className="cart-button-primary">CHECKOUT - ₹{totalAmount}</button>
</Link>  
  <p>Tax Included. Shipping calculated at Checkout.</p>
</div>
          </div>
        )}

      </div>
    </>
  );
}
