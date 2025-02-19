import CartCard from "components/cart-card/cart-card";

import { useContext } from "react";
import { mainContext } from "utils/context";
function Cart() {
  const { user, username, loading, cartProducts } = useContext(mainContext);
  const calculateTotalPrice = () => {
    if (cartProducts) {
      let totalPrice = 0;
      cartProducts.forEach((product) => {
        totalPrice += product.price;
      });
      return totalPrice;
    } else {
      return 0;
    }
  };
  return loading ? (
    <div className="cart__message">Loading...</div>
  ) : !user ? (
    <div className="cart__message">Please Login to view your cart</div>
  ) : (
    <div className="cart">
      <div className="cart__products">
        {!cartProducts || cartProducts.length === 0 ? (
          <div className="cart__message cart__message--empty-cart">
            Please add product to your cart
          </div>
        ) : (
          cartProducts.map((product) => {
            return <CartCard product={product} />;
          })
        )}
      </div>
      <div className="cart__checkOut">
        <h1>Checkout</h1>
        <h2>Username: {username}</h2>
        <h2>total: ${calculateTotalPrice()}</h2>
        {calculateTotalPrice() !== 0 && (
          <button className="primary">Pay</button>
        )}
      </div>
    </div>
  );
}
export default Cart;
