# Formwork Studio

An interactive project board for small design studios, built on [Next.js SaaS Starter](https://github.com/nextjs/saas-starter). Choose a sample brief and track its handover checklist. Changes are saved in the current browser.

## Run the portfolio

Use Node.js 24 and pnpm 10. Run `pnpm install --frozen-lockfile`, then `pnpm dev`. The public board requires no external services.

## Studio accounts and subscriptions

The inherited dashboard, database migrations and Stripe integration remain available. Configure Postgres and a strong session secret to enable accounts, then configure Stripe before offering paid plans. See the [upstream setup guide](https://github.com/nextjs/saas-starter#local-development) and [.env.example](.env.example).

Run the **Verify portfolio** GitHub workflow to build the app, exercise the board in Chrome and capture desktop and mobile screenshots.
