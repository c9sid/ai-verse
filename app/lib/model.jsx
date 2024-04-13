import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minLength: [3, "Name must be larger than 3 characters"],
        maxLength: [20, "Name must be smaller than 20 characters"],
    },
    email: {
        type: String,
        required: true,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Invalid email"]
    },
    message:{
        type: String,
        maxLength: [500, "Only 500 words supported"]
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;