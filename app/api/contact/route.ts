import Contact from "@/lib/model";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { fullname, email, message } = await req.json();
        await connectDB();

        await Contact.create({ fullname, email, message });

        return NextResponse.json({
            msg: ["Message sent successfully"],
            success: true,
        });
    } catch (error) {
        let errorList: string[] = [];
        if (error instanceof mongoose.Error.ValidationError){
            for (let e in error.errors){
                errorList.push(error.errors[e].message);
            }
            console.log(errorList)
            return NextResponse.json({ msg: errorList });
        }
        else{
            return NextResponse.json({ msg: "Unable to send message." })
        }
    }
}
