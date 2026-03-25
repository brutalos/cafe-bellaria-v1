import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { items, shippingData } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items provided' }, { status: 400 });
    }

    const amount = items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // convert to cents
      currency: 'eur',
      automatic_payment_methods: { enabled: true },
      metadata: {
        email: shippingData.email,
        firstName: shippingData.firstName,
        lastName: shippingData.lastName,
      },
    });

    // Create order in PENDING status
    const order = await prisma.order.create({
      data: {
        amount,
        email: shippingData.email,
        firstName: shippingData.firstName,
        lastName: shippingData.lastName,
        address: shippingData.address,
        city: shippingData.city,
        postalCode: shippingData.postalCode,
        country: shippingData.country,
        stripeIntentId: paymentIntent.id,
        items: {
          create: items.map((item: any) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
        },
      },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      orderId: order.id,
    });
  } catch (error: any) {
    console.error('Payment intent error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
