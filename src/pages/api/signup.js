import { connectToDatabase } from '../../../utils/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, number } = req.body;

    const { db } = await connectToDatabase();
    await db.collection('UserData').insertOne({
      name,
      email,
      number
    });

    res.status(201).json({ message: 'User created' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}