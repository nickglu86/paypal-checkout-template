import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalCheckoutButton = (props) => {
  const { product } = props;

  const [paidFor, setPaidFor] = useState(false);

  const [error, setError] = useState(null);

  if (error) {
      // Display error message, modal or redirect user to error page
      alert(error);
  }

  const handleApprove = (orderId) => {
    // Call backend function to fulfill order

    // if response is success
    setPaidFor(true);
    // Refresh user's account or subscription status

    // if response is error
    // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
  };

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    alert("Thank you for your purchase!");
  }

  return (
    <PayPalButtons
      // Style of PayPall Buttons
      style={{
        color: "silver",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill",
      }}
      //onClick provides an interim step for validation before proceeding to checkout.
      onClick={(data, actions) => {
            // Validate on button click, client or server side
            const hasAlreadyBoughtCourse = false;
          
            if (hasAlreadyBoughtCourse) {
              setError(
                "You already bought this course. Go to your account to view your list of courses."
              );
          
              return actions.reject();
            } else {
              return actions.resolve();
            }
          }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: {
                value: product.price,
              },
            },
          ],
        });
      }}
      // Once the transaction is authorized, the onApprove event is called.
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order", order);

        handleApprove(data.orderID);
      }}
      onCancel={() => {
            // Display cancel message, modal or redirect user to cancel page or back to cart
          }}
      onError={(err) => {
            setError(err);
            console.error("PayPal Checkout onError", err);
      }}
    />
  );
};

export default PayPalCheckoutButton;

/*Default*/
// const PayPalCheckoutButton = (props) => {
//       const { product } = props;

//       return <PayPalButtons

//        />;
//     };
