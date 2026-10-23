import axios from "axios";

export const weatherData = async (req, res) => {
    try {        
        const { city } = req.query;

        if (!city) {
            return res.status(400).json({
                message: "Please provide a city name"
            });
        }

        const response = await axios.get(
            "https://api.weatherapi.com/v1/current.json",
            {
                params: {
                    key: process.env.WEATHER_KEY,
                    q: `${city}, Maharashtra, India`
                }
            }
        );

        return res.status(200).json({
            message: "Weather info fetched successfully.",
            data: response.data
        });
    } catch (error) {
        return res.status(500).json({
            message: "something went wrong",
            error
        });
    }
}