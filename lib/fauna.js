// lib/fauna.js

import { Client } from 'faunadb';

export const faunaClient = new Client({
  secret: process.env.FAUNA_SECRET,
});