import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
export default function Pricing() {
  const checkout = async (priceId: string) => {
    const stripe = await stripePromise;
    await stripe!.redirectToCheckout({ lineItems: [{ price: priceId, quantity: 1 }], mode: 'subscription', successUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`, cancelUrl: process.env.NEXT_PUBLIC_SITE_URL });
  };
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">Planos</h2>
      <div className="mt-4 space-x-4">
        <button className="btn" onClick={() => checkout('price_monthly')}>Mensal</button>
        <button className="btn btn-secondary" onClick={() => checkout('price_yearly')}>Anual</button>
      </div>
    </div>
  );
}
