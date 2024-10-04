import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { message, level } = req.body;

        // Here you can log to your server's console or integrate with a logging service
        console.log(`[${level.toUpperCase()}] - ${message}`);

        // Respond with success status
        return res.status(200).json({ status: 'logged' });
    }

    // Method not allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}