import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/users/google`, {
          name: user.name,
          email: user.email,
          image: user.image,
        });
        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      }
    },
    async session({ session }) {
      return session; // add custom fields if needed
    },
  },
});

export { handler as GET, handler as POST };
