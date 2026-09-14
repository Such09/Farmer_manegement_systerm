import { ai } from '../utils/geminiAI.js';
import fs from 'fs';

export const scanCrop = async (req, res) => {
    try {
        const image = req.file

        if (!image) {
            return res.status(400).json({
                message: "Crop image is required"
            });
        }

        // Image path
        const imagePath = image.path;

        // Read image from disk
        const imageBuffer = fs.readFileSync(imagePath);

        // Convert image to Base64
        const imageB64 = imageBuffer.toString("base64");

        // Get Scan result on gemini ai API
        const interaction = await ai.interactions.create({
            model: "gemini-3.8-flash",
            input: [
                {
                    type: "text",
                    text: `Look at this crop photo and give a very short, simple report for a farmer.
                        Tell only:
                        1. Crop name
                        2. What problem you see (disease, pest, water, nutrient, or healthy)
                        3. What the crop needs now
                        4. Simple treatment or action
                        5. One prevention tip
                        Use very simple everyday words. Avoid technical terms.
                        Give only 4-5 short points.
                        Do not guess if the photo is unclear.
                        If the crop looks healthy, say "Crop looks healthy" and tell what it needs to stay healthy.`
                },
                {
                    type: "image",
                    data: imageB64,
                    mime_type: "image/jpeg"
                }
            ]
        });

        return res.status(200).json({
            message: "scan crop detail successfully.",
            result: interaction.output_text
        });

    } catch (error) {
        return res.status(500).json({
            message: "somethin went wrong",
            error: error.message
        });
    } finally {
        // uploaded temporary file delete
        if (req.file?.path) {
            fs.unlinkSync(req.file.path);
            console.log("Temp file deleted");
        }
    }
}