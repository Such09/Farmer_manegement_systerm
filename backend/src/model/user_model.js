import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String,
    },
    avatar: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOFQKU46GDzMUf8QTw2-wBM18tj39pY3x0X2JGisTWpw&s"
    }
},
    { timestamps: true }
)

export const User = mongoose.model("User", userSchema);