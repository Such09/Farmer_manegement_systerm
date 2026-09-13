import mongoose, { Schema } from 'mongoose';

const fertilizerSchema = new Schema({
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
})

export const Fertilizer = mongoose.model("Fertilizer", fertilizerSchema);