# Zunavoa Marketplace

**Live site:** [Open Zunavoa Marketplace](https://oluwafemi1x.github.io/zunavoa-marketplace/)

Zunavoa is a modern multi-vendor ecommerce experience with an editorial storefront and a complete seller command centre.

## Included

- Responsive real-image catalog, search, categories, cart quantities and persistent bag
- Buyer and seller account interfaces with secure password-recovery messaging
- Card checkout and exact-amount timed bank-transfer flow
- Buyer-protection, order confirmation and dispute workflows
- Seller analytics, products, photo upload, orders, settlement account, payouts and store settings
- Keyboard-friendly controls, mobile layouts and clear empty/success states

## Stack

React 19, TypeScript, Vinext, Tailwind CSS 4, shadcn/ui, Lucide and Cloudflare Workers-compatible Sites hosting.

## Run

```bash
npm install
npm run dev
npm run build
npm run build:pages
```

## Production payment note

The checkout is an interactive sandbox and does not collect real money. Before launch, connect Paystack or Flutterwave in server routes, validate signed webhooks, create single-use virtual accounts server-side and store secret keys only in runtime environment variables. OTP email/SMS delivery also requires a transactional provider. Never mark orders paid from a client-side button in production.

## Security hardening

Persist accounts and orders in a managed database; hash passwords with Argon2id; expire and rate-limit OTPs; validate uploaded media; calculate totals server-side; add idempotency keys; verify webhook signatures; and test seller authorization, refunds and dispute transitions.

Demo photography is served from Unsplash. Product names and marketplace data are fictional.
