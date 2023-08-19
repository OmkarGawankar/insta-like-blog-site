import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req: NextRequest, res: NextResponse) {
    const MONGODB_URI = `mongodb+srv://root:5225@cluster0.vtery1k.mongodb.net/?retryWrites=true&w=majority`;

    let client;

    try {

        client = await mongoose.connect(MONGODB_URI);
        console.log("Mongo DB Connected!");

    } catch (error) {
        console.log("There was an error connecting DB: ", error);
    }
}