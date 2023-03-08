import { query as q } from 'faunadb';
import { faunaClient } from '../../../lib/fauna';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone } = JSON.parse(req.body);
      const response = faunaClient.query(
        q.Create(q.Collection('User'), { data: { name, email, phone }})
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}