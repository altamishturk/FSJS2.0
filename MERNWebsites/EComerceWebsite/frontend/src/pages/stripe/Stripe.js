import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "./Checkout.css";
import { useLocation ,useParams} from "react-router-dom";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51K4MH1SCUI6JQcpYq4nzDexHPPsZuBVTMZOPIcijhghtJx4UTggvcwIqBHuu9VWEi9Py4v04bFEXFXpWnFMfdddd00ISTPKSfL");

export default function Chechout() {
  const location = useLocation();
  const {clientSecret} = useParams();


  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm products={location.state} />
        </Elements>
      )}
    </div>
  );
}