import { Contact } from "../../model/contactModel.js";

export const messages = async(req, res) => {
    try {        
        const data = await Contact.find()

        return res.status(200).json({
            message: "data fetch successfully",
            data
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong"
        });
    }
}