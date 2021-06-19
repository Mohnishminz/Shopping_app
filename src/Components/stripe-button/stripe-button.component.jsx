import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "sk_test_51J3MKSSFky3Ooq93kdpj3xByFHS23nXHYp7LKGtURJyVKCdi2hBGvHUdWvJMnpGkZrwNpV46CPmXizsO6jUkp31Y00ZN4cgRtL";

  return (
    <StripeCheckout
        name="Three Comma Co."
   
        amount ={priceForStripe}
    />
  );
};


export default StripeCheckoutButton