# Shopify MetaMask (or any crypto wallet?) Integration

[More details here](https://forum.developerdao.com/t/shopify-metamask-app-idea/636)

## Project will consist of 3 parts:

- NextJS frontend:
  - An admin dashboard where shop owner configures which contract holder is eligible for discounts/custom merch
- NextJS backend:
  - Server that stores the data
  - Dynamically create promo codes for discounts using Shopify API (?) - need to do some research on that
- [A widget](https://shopify.dev/apps/online-store/theme-app-extensions/extensions-framework#app-embed-blocks) that
  - connects with [crypto wallet](https://twitter.com/developer_dao/status/1466080091327369225)
  - talks to server to verify if user is eligible for discounts/custom merch
  - fetches promo code from server and applies it to the user's cart

## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.
- Download `NGROK` - is a free service that makes it easy to host your app in development. [Sign up for NGROK](https://ngrok.com/signup).

## Development

- Clone the project and run `npm install`
- Create `.env` from `.env.example`
- Add `SHOPIFY_API_KEY=<your API key>` from your Shopify App settings
- Add `SHOPIFY_API_SECRET=<your API secret>`
- Add `SHOP=<your shop>.myshopify.com`
- `SCOPES` will be updated, for now just leave them as in the example
- Start NGROK and replace `HOST` with your `NGROK URL`

In your Shopify App settings:

- Set `App URL` to `NGROK URL`
- Set `Allowed redirection URL(s)` to `<NGROK URL>/auth/callback`, for example: https://1231231.ngrok.io/auth/callback*

> _You will need to update it every time you change `NGROK URL`_

- `npm run dev`
- Click `Select store` under `Test your app` in Shopify App settings
- This should prompt you to install the app in your development store and open it in an admin dashboard. Common error is `The redirect URI is not whitelisted`, in that case you need to update `NGROK URL` in `Allowed redirection URL(s)`
