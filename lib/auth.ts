import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./prisma";
import authConfig from "./auth.config";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    session: ({ session, token }) => {
      
      const newSession = {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
      
      console.log('Session user after modification:', newSession.user);
      
      // Retournez le nouvel objet session
      return newSession;
    }
  },
  pages: {
    signIn: "/auth/signin",
  },
});
