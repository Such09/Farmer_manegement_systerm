import { User } from "../model/user_model.js";
import { Addcrop } from "../model/addCrop.js";
import { Contact } from "../model/contactModel.js";
import { Notification } from "../model/farmerNotification_model.js";
import jwt from 'jsonwebtoken'
import { messages } from "./Admin_controller/massaging.js";

// Find Farmer
export const userProfile = async (req, res) => {
    try {
        const info = req.user

        const user = await User.findById({ _id: info.id });

        if (!user) {
            return res.status(400).json({
                message: "Invalid user"
            });
        }

        return res.status(200).json({
            message: "user is valid",
            user
        });

    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error
        });
    }
}

// add crop detail
export const addCrop = async (req, res) => {
    try {
        const { name, veriety, session, showing, fertilizer, harvest } = req.body
        const refreshToken = req.cookies.refreshToken


        const crop = await Addcrop.create({
            name,
            veriety,
            session,
            showing,
            fertilizer,
            harvest
        });

        if (!refreshToken) {
            return res.status(401).json({
                message: "Please, login and try again",
                status: 401
            });
        }

        const info = jwt.verify(refreshToken, process.env.REFRESH_SCREAT)

        const user = await User.findById({ _id: info.id })

        if (!user) {
            return res.status(401).json({
                message: "user is not found",
                status: 401
            });
        }

        if (!user.crops) {
            user.crops = [];
        }

        // add crop detail
        user.crops.push(crop._id);
        await user.save();

        return res.status(200).json({
            message: "Add new crop record"
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error
        });
    }
}

// Farmer Notification
export const notification = async (req, res) => {
    try {
        const { id, email, title, message } = req.body

        const noti = await Notification.create({
            email,
            title,
            message
        });

        const user = await User.findOne({ email: email })

        const delContact = await Contact.findByIdAndDelete(id)

        if (!user) {
            return res.status(401).json({
                message: "user is not found",
                status: 401
            });
        }

        if (!user.notification) {
            user.notification = [];
        }

        user.notification.push(noti._id)
        await user.save()

        return res.status(200).json({
            message: "sent message successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error
        });
    }
}

// get perticular farmer notification data
export const getNotificationData = async (req, res) => {
    try {
        const info = req.user

        const user = await User.findById({ _id: info.id }).populate("notification");

        if (!user) {
            return res.status(401).json({
                message: "Invalid user"
            });
        }

        return res.status(200).json({
            message: "find crop data",
            data: user.notification
        });
    } catch (error) {
        return res.status(500).json({
            messages: "something went wrong",
            error
        });
    }
}

// remove Notification or message
export const removeMessage = async (req, res) => {
    try {
        const { id } = req.body
        const info = req.user

        const user = await User.findById({ _id: info.id })

        if (!user) {
            return res.status(400).json({
                message: "user is not found"
            });
        }

        // remove notification id from user notification array
        user.notification = user.notification.filter(Id => Id.toString() !== id);
        await user.save();

        // remove record from database
        const del = await Notification.findByIdAndDelete(id)

        return res.status(200).json({
            message: "notification delete successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error
        });
    }
}

// get user crop data
export const crops_info = async (req, res) => {
    try {
        const info = req.user

        const user = await User.findById({ _id: info.id }).populate("crops");

        if (!user) {
            return res.status(400).json({
                message: "Invalid user"
            });
        }

        return res.status(200).json({
            message: "find crop data",
            data: user.crops
        });

    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error
        });
    }
}

// Remove Crop record
export const removeCropRecord = async (req, res) => {
    try {
        const { id } = req.params

        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) {
            return res.status(200).json({
                message: "token is expire."
            })
        }

        const info = jwt.verify(refreshToken, process.env.REFRESH_SCREAT)

        if (!info) {
            return res.status(400).json({
                message: "Invalid token."
            })
        }

        const user = await User.findById(info.id);

        if (!user) {
            return res.status(400).json({
                message: "something went wrong"
            });
        }

        // remove crop id from user crops array
        user.crops = user.crops.filter(Id => Id.toString() !== id);
        await user.save();

        // remove record from database
        const crop = await Addcrop.findByIdAndDelete({ _id: id });

        return res.status(200).json({
            message: "remove crop",
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal sercer error",
            error
        });
    }
}

// Update Crop info
// first find given crop - ( ID )
export const userCropDetail = async (req, res) => {
    try {
        const { id } = req.params

        const crop = await Addcrop.findById(id);

        if (!crop) {
            return res.status(200).json({
                message: "crop is not found"
            });
        }

        return res.status(200).json({
            message: "find crop",
            data: crop
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal sercer error",
            error
        });
    }
}

export const updateCropDetail = async (req, res) => {
    try {
        const { _id } = req.body

        const crop = await Addcrop.findByIdAndUpdate(
            _id,
            req.body,
            {
                returnDocument: "after",
                runValidators: true
            }
        );

        if (!crop) {
            return res.status(404).json({
                message: "crop is not found"
            });
        }

        return res.status(200).json({
            message: "update crop successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal sercer error",
            error
        });
    }
}