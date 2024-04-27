import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minLength: [3, "Name must > 2"],
        maxLength: [20, "Name must < 20"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Invalid email"]
    },
    message:{
        type: String,
        maxLength: [250, "Only 250 words supported"]
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;