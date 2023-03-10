import { connectToDatabase } from '../../../utils/mongodb';

export default async function handler(req, res) {

    res.setHeader('Access-Control-Allow-Origin', 'https://legaax.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // 
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