import { ObjectId } from "mongodb";

export default class MP3data {
    constructor(
        public MP3File: string,
        public DateAdded: string,
        public _id?: ObjectId
    ){}
}