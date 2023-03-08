import { query as q } from 'faunadb';
import { faunaClient } from '../../../lib/fauna';
import Router, { useRouter } from "next/router";

async function Route() {
  const router = useRouter();
  router.push('/error');
}

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