import Contact from "@/app/lib/model"
import connectDB from "@/app/lib/mongodb"
import { NextResponse } from "next/server"

export async function POST(req: any) {
    let res = {message: "Invalid Request"}
    const data = await req.formData()
    const fullname = data.get('fullname')
    const email = data.get('email')
    const message = data.get('message')


    try {
        await connectDB();
        await Contact.create({fullname, email, message})

        return NextResponse.json({
            message: "Message sent successfully", success: true,
        })
    } catch (error) {
        return NextResponse.json({message: "Can't spam messages"});
    }
}