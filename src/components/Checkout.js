import CardIcon from "../images/credit-card.svg";
import PayPalCheckoutButton from './PayPalCheckoutButton';
import "../styles.css";

const Checkout = () => {
  const product  = {
    description: "Product Example",
    price: 19
  }
  return (
    <div className="checkout">
      <h1>PayPal Checkout</h1>
      <p className="checkout-title">Product Title</p>
      <p className="checkout-description">
        Product Description
      </p>
      <h1 className="checkout-price">$10</h1>
      <img
        className="checkout-product-image"
        src=""
        alt="Product"
      />
      <button className="checkout-button">
        <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src={CardIcon} alt="credit-card-icon" />
          </div>
        </div>
        <div className="text-container">
          <p className="text">Buy</p>
        </div>
      </button>
      <div className="separator"></div>
      <div className="paypal">
        <p className="checkout-title">OR, PAY WITH PAYPAL</p>
        <div className="paypal-button-container">
            <PayPalCheckoutButton product={product} /> 
        </div>
      </div>
    </div>
  );
};

export default Checkout;
