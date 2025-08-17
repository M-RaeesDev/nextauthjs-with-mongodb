import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import api from "../../../../lib/api";

const authOptions = {
    providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  session: {
    strategy: "jwt", // <- yahan set karna hota hai option
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  callbacks: {
    // Triggered every time user logs in
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          // Send user data to backend API for DB save/check
          await api.post(`${process.env.SERVER_URL}/api/auth/google`, {
            name: user.name,
            email: user.email,
            image: user.image,
          });
        } catch (err) {
          console.error("Google signup/login failed:", err?.response?.data || err);
          return false; // stop login if backend fails
        }
      }
      return true;
    },

    // Called whenever a session is checked
    async session({ session, token }) {
      session.user.id = token.sub; // Add user ID to session
      return session;
    },
  },

  pages: {
    signIn: "/login", // custom login page
    error: "/login", // redirect to login on error
  },

  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export{handler as GET, handler as POST}