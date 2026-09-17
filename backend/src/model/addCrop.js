import mongoose, { Schema } from "mongoose";

const addCropSchema = new Schema({
    name: String,
    veriety: String,
    session: String,
    showing: String,
    fertilizer: String,
    harvest: String
})

export const Addcrop = mongoose.model("Addcrop", addCropSchema);