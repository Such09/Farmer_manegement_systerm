import mongoose, { Schema } from "mongoose";

const notification = new Schema({
    email:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
});

export const Notification = mongoose.model("Notification", notification);