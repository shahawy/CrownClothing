// Node file (some backend functions)

import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {

    try {
    const {amount} = JSON.parse(event.body)   // The amount is in cents, and Json.parse because it returns JSON object and we want to convert it to javascript object to destructure the (amount) property from it
    
    const paymentIntent = await stripeInstance.paymentIntents.create({
        amount: amount,
        currency: "usd",
        payment_method_types: ["card"]
    })

    return {
        statusCode: 200,
        body: JSON.stringify({paymentIntent})  // JSON.stringify to convert from javascript object to JSON object
    } 
    } catch (err) {
        console.log({err})

        return {
            status: 400,
            body: JSON.stringify({err})
        }
    }
}