import mongoose, { Schema } from "mongoose";

const seedSchema = new Schema({
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
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    info: {
        type: String
    }
})

export const Seeds = mongoose.model("Seeds", seedSchema);