import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { RxCaretLeft } from "react-icons/rx";
export default function Cart() {
  const isOpen = useSelector((state) => state.isCartOpen);
  const dispatch = useDispatch();

const cartItems = useSelector((state) => state.cartDetails.product);

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
            <button><RxCaretLeft /></button>
          <h2>YOUR CART</h2>
        
        </div>
{/* <div className="empty-cart">
            <p className="cart-empty-message">YOUR BAG IS EMPTY</p>
<span className="whoo">Whoops... Nothing in here! Explore around to add items.</span>
        <button className="cart-button-primary">START SHOPPING</button>
        <button className="cart-button-secondary">ADD FROM WISHLIST</button>
</div> */}

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
                <p>{item.item}</p>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </>
  );
}
