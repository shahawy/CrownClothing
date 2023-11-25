import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"; // CardElement is the component that gives us the payment form from strip

import { useState } from "react";

import { useSelector } from "react-redux";

import Button from "../button/Button";

import "./paymentForm.css";

function PaymentForm() {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const currentUser = useSelector((state) => state.user.value);
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // to exit and don't complete the function if there is no stripe or elements
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      // the first argument is the path of the serverless function in our folder
      method: "post",
      headers: {
        "content-type": "application/json", // This means we are sending data in json form
      },
      body: JSON.stringify({ amount: cartTotalPrice * 100 }), // The data we want to post and we multiplied it by 100 because Stripe takes the amount in cents
    }).then((res) => res.json());

    const { client_secret } = response.paymentIntent;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName ? currentUser.displayName : "Guest",
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <div className="payment-form-container">
      <form className="form-container" onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button
          disabled={isProcessingPayment}
          style={{
            backgroundColor: isProcessingPayment && "#2B2730",
            marginTop: "30px",
          }}
          buttonType="inverted"
          buttonName="Pay Now"
        />
      </form>
    </div>
  );
}

export default PaymentForm;
