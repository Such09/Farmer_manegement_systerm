import { useNavigate } from 'react-router-dom'
import hero from '../accets/hero.png'

const Body = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen w-full flex flex-col bg-zinc-100'>
            {/* Hero Section */}
            <div className='h-96 w-full'>
                <img src={hero} alt=""
                    className='h-full w-full object-cover object-top' />
            </div>

            <div className='w-full h-full flex justify-center gap-7'>
                {/* Main section */}
                <div className='h-full w-full px-9 py-4 md:w-2/3 flex flex-col gap-6 bg-white'>
                    {/* Scan crops photos */}
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg md:text-2xl font-bold'>Scan Your Crop Photo 🌱</h1>
                        <p className='font-sans text-lg'>Scan your crop photo to identify possible diseases, pests, and visible health problems.
                            Get useful information and recommendations to help keep your crops healthy.
                        </p>

                        <button onClick={() => navigate(`/app/scan`)}
                        className='h-12 w-1/4 rounded bg-green-400 text-white text-lg font-medium active:scale-95'>
                            Scan crops
                        </button>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <h1 className='text-lg md:text-2xl font-bold'>What is AgriConnect?</h1>
                        <p className='font-sans text-lg'>Think of AgriStack as a digital system that brings all the important farming-related information into one place.
                            It’s a platform where farmers can register their details, like personal information, land ownership,
                            and crops they grow. This data helps the government and other stakeholders deliver services, schemes,
                            and financial support directly to those who need it most.
                        </p>

                        <div className='w-full h-72'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zgDCgPzkysbRr_jRt6HHc56NaMeA6ODNCfFYHdxE6w&s=10" alt=""
                                className='h-full w-2/3 object-cover' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-lg md:text-2xl font-bold'>Why is AgriConnect Important?</h1>
                            <p className='font-sans text-lg'>AgriConnect is designed to make life easier for farmers and to improve the efficiency of agriculture in India.
                                By using this system, farmers can get their subsidies faster, apply for loans without hassle,
                                and access real-time information on things like weather and market prices.
                                It’s like giving every farmer a digital identity that ensures they don’t miss out on any benefits.
                            </p>
                        </div>

                        <div className='flex flex-col gap-1'>
                            <h1 className='font-bold'>How It Helps Farmers</h1>
                            <p className='font-sans text-lg'>AgriStack is like having a helping hand for farmers, making their lives less complicated.
                                It ensures they can access subsidies, crop insurance, and loans without running from office to office.
                                With real-time updates on market prices and weather forecasts,
                                farmers can make better decisions about when to sow, sell, or save their crops.
                            </p>
                        </div>
                    </div>

                    {/* Fertilizer information */}
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-1'>
                            <h1 className='text-lg md:text-2xl font-bold'>Use of Fertilizer?</h1>
                            <p className='font-sans text-lg'>AgriConnect provides farmers with useful information about the proper use of fertilizers.
                                Through this platform, farmers can learn about different types of fertilizers,
                                their benefits, and the correct quantity required for different crops. It also provides information about when and how fertilizers should be applied to achieve better crop growth and maintain soil health.
                                Farmers can learn about chemical and organic fertilizers and choose the most suitable option according to their crop and soil requirements.
                                This information helps farmers avoid excessive or incorrect fertilizer use, reduce farming costs, and improve crop production. Overall,
                                AgriConnect helps farmers use fertilizers safely, effectively, and efficiently.
                            </p>
                        </div>

                        <div className='h-72 w-full'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KVhNwXm4Bqq0skZMlKwuI-w16KnlAcvf_OqqK_GOqg&s=10" alt=""
                                className='h-72 w-2/3 object-cover' />
                        </div>
                    </div>
                </div>

                {/* AD section */}
                <div className='hidden w-1/4 h-fit py-4 bg-white md:flex flex-col gap-7'>
                    <div className='w-full h-fit px-6 flex flex-col'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSynvtargszBv4DHowMVmlwbDfWW-3Cs81LNVzFe5_-Q&s" alt=""
                            className='h-48 w-full object-contain' />

                        <p className='font-medium'>BT Cotton Special Liquid Fertilizer for Cotton Crop 2L</p>
                    </div>

                    <div className='w-full h-fit px-6 flex flex-col'>
                        <img src="https://casadeamor.in/cdn/shop/products/cottonseedcakefertilizer-5.jpg?v=1650367686&width=1445" alt=""
                            className='h-48 w-full object-contain' />

                        <p className='font-medium'>Casa De Amor Cottonseed Cake Organic Fertilizer (Kapasya khal)</p>
                    </div>

                    <div className='w-full h-fit px-6 flex flex-col'>
                        <img src="https://agribegri.com/_next/image?url=https%3A%2F%2Fdujjhct8zer0r.cloudfront.net%2Fmedia%2Fprod_image%2F15151901621751288444.webp&w=1920&q=85" alt=""
                            className='h-48 w-full object-contain' />

                        <p className='font-medium'>Best Feild Crop Seeds Products online</p>
                    </div>

                    <div className='w-full h-fit px-6 flex flex-col'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnItAWHh3RgtidZ3q_PuDSzlwEBmbkRAOsLtQp3SjkHw&s" alt=""
                            className='h-48 w-full object-contain' />

                        <p className='font-medium'>Primary nutrint for plants - Nitrogen, Phosphorous, and Potassioum fertilizer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body