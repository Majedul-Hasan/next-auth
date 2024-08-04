

import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";
import mongoClientPromise from './lib/mongoClinetPromise';
import { MongoDBAdapter } from '@auth/mongodb-adapter';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});