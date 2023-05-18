import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function POST (request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  let data = await request.json();
  const session = await stripe.checkout.sessions.create({
    line_items: data.map(item => (
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.image[0]],
          },
          unit_amount: item.price * 100,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 1,
        },
        quantity: item.quantity     
      })
    ),
    mode: 'payment',
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000'
  })
  return NextResponse.json(session)
}

