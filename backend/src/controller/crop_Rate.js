import axios from "axios"

export const cropRates = async (req, res) => {
    try {
        console.log("req:", req.query);
        const { commodity } = req.query;

        const today_price = await axios.get(`https://api.data.gov.in/resource/${process.env.RESORCE_ID}`,
            {
                params: {
                    "api-key": process.env.DATA_GOV_KEY,
                    format: "json",
                    limit: 1,
                    offset: 0,
                    // "filters[state.keyword]": "Karnataka",
                    ...(commodity && {
                        "filters[commodity]": commodity,
                    }),
                },
            }
        );
        
        return res.status(200).json({
            message: "mandi price data get sucessfuly",
            data: today_price.data.records
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}