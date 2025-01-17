import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  publicRoutes: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Match all routes except static files and Next.js internals
    "/", 
    "/(api|trpc)(.*)",
    "/sign-in",
    "/sign-up",
  ],
};


console.log("CLERK_SECRET_KEY:", process.env.CLERK_SECRET_KEY);
console.log("NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
