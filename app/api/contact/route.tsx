import Contact from "@/lib/model"
import connectDB from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(request : Request) {
    
    try {
        const data = await request.json();
        await connectDB();
        const newpost = await Contact.create({data})

        return NextResponse.json(newpost)
    } catch (error) {
        return NextResponse.json({message: "Unable to send message"}, {status: 500});
    }
}