//       const {
//  query: { audioId }, // here i cannot access keyword//
//  method,
//} = req

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ObjectId } from "mongodb";
import Link from "next/link";

import clientPromise from "../../schema/mongoDB";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    let ipAddress = req.headers["x-real-ip"] as string;
    const forwardedFor = req.headers["x-forwarded-for"] as string;

    if (!ipAddress && forwardedFor) {
        ipAddress = forwardedFor?.split(",").at(0) ?? "Unknown";
    }

    if (ipAddress == "Unknown") {
        res.status(300).send({
            message: "Unknown page traced",
        });
    } else {
        const client = await clientPromise;
        const database = client.db("FE2CM");

        const data = await database.collection("MP3 LIST").find({});
        if (req.method == "POST") {
        }
    }
    console.log(req.body);
    res.status(200).send({
        message: "hey stinka butt! this feature of API isn't made yet, come back later...",
    });
}
