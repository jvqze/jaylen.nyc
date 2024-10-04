import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { message, level } = req.body;
        console.log(`[${level.toUpperCase()}] - ${message}`);
        return res.status(200).json({ status: "logged" });
    }

    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
