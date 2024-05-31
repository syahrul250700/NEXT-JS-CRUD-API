import NextAuthOptions from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        name: { label: "Full Name", type: "text" },
        email: { label: "Email Address", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { username, name, email, password } = credentials;

        const user = {
          id: 1,
          name: name,
          username: username,
          email: email,
          password: password,
        };
        if (!user) {
          return null; // No user found
        } else {
          // console.log(user);
          return user;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, account, profile, user }) {
      if (account?.providers === "credentials") {
        token.email = user.email;
        token.name = user.name;
      }
      // console.log({ token, account, user });
      return token;
    },
    async session({ session, token }) {
      if ("email" in token) {
        session.user.email = token.email;
      }
      if ("name" in token) {
        session.user.name = token.name;
      }
      // console.log(session, token);
      return session;
    },
  },
};

export default NextAuth(authOptions);
