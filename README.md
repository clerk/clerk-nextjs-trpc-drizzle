<p align="center">
  <a href="https://clerk.com?utm_source=github&utm_medium=clerk_docs" target="_blank" rel="noopener noreferrer">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="./public/light-logo.png">
      <img alt="Clerk Logo for light background" src="./public/dark-logo.png" height="64">
    </picture>
  </a>
  <br />
</p>
<div align="center">
  <h1>
    Clerk, Next.js App Router, tRPC, Drizzle Demo
  </h1>
  <a href="https://www.npmjs.com/package/@clerk/clerk-js">
    <img alt="Downloads" src="https://img.shields.io/npm/dm/@clerk/clerk-js" />
  </a>
  <a href="https://discord.com/invite/b5rXHjAg7A">
    <img alt="Discord" src="https://img.shields.io/discord/856971667393609759?color=7389D8&label&logo=discord&logoColor=ffffff" />
  </a>
  <a href="https://twitter.com/clerkdev">
    <img alt="Twitter" src="https://img.shields.io/twitter/url.svg?label=%40clerkdev&style=social&url=https%3A%2F%2Ftwitter.com%2Fclerkdev" />
  </a>
  <br />
  <br />
  <img alt="Clerk Hero Image" src="./public/hero.png">
</div>

## Introduction

Clerk is a developer-first authentication and user management solution. It provides pre-built React components and hooks for sign-in, sign-up, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any React or Next.js application.

This repository demonstrates how to use Clerk to create a tRPC context that uses Clerk's authentication context, so that you can use Clerk's authentication state in your tRPC procedures. For more information, see the [guide in the Clerk Docs](https://clerk.com/docs/guides/development/trpc).

Stack:

- Next.js 16 (App Router, Turbopack default, `proxy.ts` instead of `middleware.ts`)
- React 19.2
- Clerk Core 3 (`@clerk/nextjs` v7) — uses `<Show when="signed-in">` / `<Show when="signed-out">`
- tRPC v11 + TanStack Query v5
- Drizzle ORM 0.45 with `@neondatabase/serverless` v1 (HTTP)
- Zod 4
- Tailwind CSS v4

Last verified: 2026-05-08.

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fclerk%2Fclerk-nextjs-trpc-drizzle&env=NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,CLERK_SECRET_KEY&envDescription=Clerk%20API%20keys&envLink=https%3A%2F%2Fclerk.com%2Fdocs%2Freferences%2Fnextjs%2Ftrpc&redirect-url=https%3A%2F%2Fclerk.com%2Fdocs%2Freferences%2Fnextjs%2Ftrpc)

## Running the template

```bash
git clone https://github.com/clerk/clerk-nextjs-trpc-drizzle
```

To run the example locally, you need to:

1. `npm install` the required dependencies.
1. Copy `.env.example` to `.env` and fill in your Clerk and Neon credentials.
1. `npm run db:generate && npm run db:migrate` (or `npm run db:push`) to set up the database schema.
1. `npm run dev` to launch the development server.
1. Select the "Sign in" button in the top-right corner of the app's homepage.

## Learn more

To learn more about Clerk and Next.js, check out the following resources:

- [Quickstart: Get started with Next.js and Clerk](https://clerk.com/docs/quickstarts/nextjs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-nextjs-trpc-drizzle)

- [Clerk Documentation](https://clerk.com/docs?utm_source=DevRel&utm_medium=docs&utm_campaign=templates&utm_content=clerk-nextjs-trpc-drizzle)
- [Next.js Documentation](https://nextjs.org/docs)

## Found an issue or want to leave feedback

Feel free to create a support thread on our [Discord](https://clerk.com/discord). Our support team will be happy to assist you in the `#support` channel.

## Connect with us

You can discuss ideas, ask questions, and meet others from the community in our [Discord](https://discord.com/invite/b5rXHjAg7A).

If you prefer, you can also find support through our [Twitter](https://twitter.com/ClerkDev), or you can [email](mailto:support@clerk.dev) us!
