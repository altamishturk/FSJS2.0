import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentElement} from '@stripe/react-stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51K4MH1SCUI6JQcpYq4nzDexHPPsZuBVTMZOPIcijhghtJx4UTggvcwIqBHuu9VWEi9Py4v04bFEXFXpWnFMfdddd00ISTPKSfL');

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};


function CheckoutForm(){

  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  )
}