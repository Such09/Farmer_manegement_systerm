import { Contact } from "../model/contactModel.js";

export const userMessage = async(req, res) => {
    console.log("hill");
    
    try {
        const { email, title, message} = req.body

        const query = Contact.create({
            email,
            title,
            message
        });

        return res.status(200).json({
            message: "your query resive successfuly."
        })
    } catch (error) {
        return res.status(500).json({
            message: "internal server error"
        })
    }
}