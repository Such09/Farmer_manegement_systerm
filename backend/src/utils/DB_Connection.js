import mongoose from "mongoose";

export const DB_Connection = async() => {
    try {
        const DB = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

        console.log("DB is:", DB.connection.name);
    } catch (error) {
        console.log("database is not connected");
        
    }
}