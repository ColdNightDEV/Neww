import { query as q } from 'faunadb';
import { Client } from 'faunadb';

export const faunaClient = new Client({
  secret: process.env.FAUNA_SECRET,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone } = JSON.parse(req.body);
      const response = faunaClient.query(
        q.Create(q.Collection('User'), { data: { name, email, phone }})
      );
      res.status(200).json(response);
      console.log(response);
      {Route}
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.log(error.message)
    }
  }
}