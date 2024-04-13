import Contact from "@/app/lib/model"
import connectDB from "@/app/lib/mongodb"
import mongoose from "mongoose"
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
            message: ["Message sent successfully"], success: true,
        })
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors){
                errorList.push(error.errors[e].message);
            }
            return NextResponse.json(res);
        } else{
            return NextResponse.json({message: "Unable to send message"});
        }
    }

    // if (!fullname || !email || !message) {
    //     res = {message: 'Please fill out all required fields.'}
    // } else {
    //     res = {message: "Send Successfully"}
    // }
}