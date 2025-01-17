import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Match all routes except static files and Next.js internals
    "/", 
    "/(api|trpc)(.*)",
    "/sign-in",
    "/sign-up",
  ],
};


