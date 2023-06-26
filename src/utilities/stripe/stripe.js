// To connect our project with stripe using the Publishable Key

import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(`${import.meta.env.VITE_REACT_STRIPE_PUBLISHABLE_KEY}`)