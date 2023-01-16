import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import fetchRequest from "../../utils/fatchRequest";

import CheckoutForm from "./CheckoutForm";
import "./Checkout.css";
import { useLocation } from "react-router-dom";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51K4MH1SCUI6JQcpYq4nzDexHPPsZuBVTMZOPIcijhghtJx4UTggvcwIqBHuu9VWEi9Py4v04bFEXFXpWnFMfdddd00ISTPKSfL");

export default function Chechout() {
  const location = useLocation()
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {

    (async ()=>{
        // Create PaymentIntent as soon as the page loads
        const url = "http://localhost:4000/api/v1/payments/stripe/create-payment-intent";
        const res = await fetchRequest(url,"POST",{ items: location.state })
        if(res.success){
            console.log(res);
            setClientSecret(res.clientSecret)
        }
        console.log(res);
    })()
   
  }, [location.state]);

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
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}