import Contact from "@/app/lib/model"
import connectDB from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(req: any) {
    const data = await req.formData();

    try {
        await connectDB();
        await Contact.create({data})

        return NextResponse.json({
            message: "Message sent successfully", success: true,
        })
    } catch (error) {
        return NextResponse.json({message: "Unable to send message"});
    }
}