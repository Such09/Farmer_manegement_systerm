import axios from "axios"

export const cropRates = async (req, res) => {
    try {
        const { commodity } = req.query;
        console.log("Commodity:", commodity);
        console.log("Resource ID:", process.env.RESORCE_ID);
        console.log("API Key available:", !!process.env.DATA_GOV_KEY);

        const today_price = await axios.get(`https://api.data.gov.in/resource/${process.env.RESORCE_ID}`,
            {
                params: {
                    "api-key": process.env.DATA_GOV_KEY,
                    format: "json",
                    limit: 1,
                    offset: 0,
                    ...(commodity && {
                        "filters[commodity]": commodity,
                    }),
                },
            }
        );

        console.log('hello: ', today_price);

        return res.status(200).json({
            message: "mandi price data get sucessfuly",
            data: today_price.data.records
        })
    } catch (error) {
        console.log("API ERROR:", error.message);
        console.log("API STATUS:", error.response?.status);
        console.log("API RESPONSE:", error.response?.data);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}