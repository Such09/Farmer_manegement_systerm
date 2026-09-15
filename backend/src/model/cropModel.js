import mongoose, { Schema } from 'mongoose';

const cropSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    basicInfo: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    varieties: {
        type: String,
    },
    harvest: {
        type: String,
    },
    fertilizer: {
        type: String,
    },
    land_preparation: {
        type: String
    },
    soil_health: {
        type: String
    }
})

export const Cropinfo = mongoose.model("Cropinfo", cropSchema);