import { Link, useNavigate } from 'react-router-dom'
import hero from '../accets/hero6.png'

const Body = () => {
    const navigate = useNavigate()

    return (
        <div className='min-h-screen w-full flex flex-col'>
            {/* Hero Section */}
            <div className='h-72 w-full'>
                <img src={hero} alt=""
                    className='h-full w-full object-cover' />
            </div>

            {/* Features */}
            <div className='w-full px-20 py-6'>
                {/* Farming Quick Access Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

                    {/* Crop Market Prices */}
                    <div className="group relative flex h-[140] overflow-hidden rounded-xl border border-green-100
                        bg-linear-to-r from-green-50 via-green-50 to-green-100 px-4 py-3 shadow-sm hover:shadow-md">

                        <div className="relative z-20 flex w-[70%] flex-col items-start">
                            <div className="flex items-center gap-2">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center
                                rounded-full bg-green-600 text-lg text-white shadow">
                                    🌾
                                </div>

                                <h2 className="text-sm font-bold text-gray-900">
                                    Crop Market Prices
                                </h2>
                            </div>

                            <p className="mt-1 text-xs leading-4 text-gray-600">
                                Check the latest mandi prices for your crops.
                            </p>

                            <button onClick={() => navigate('/app/mandi_price')}
                                className="mt-2 rounded-md bg-green-700 px-3 py-1.5
                                text-xs font-semibold text-white transition hover:bg-green-800 active:scale-95">
                                Check Prices →
                            </button>
                        </div>

                        {/* Right Side Image */}
                        <div className="absolute inset-y-0 right-0 w-[48%]">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCrZnfQqlacjXR4UcrQGbGkKIwzGs0KsNExBsAhLiej8JOq7UqlcKyKJ5&s=10"
                                alt="Crop market"
                                className="h-full w-full object-cover object-center" />

                            {/* Blend image with left background */}
                            <div className="absolute inset-0 bg-linear-to-r
                           from-green-50 via-green-50/70 to-transparent"/>
                        </div>
                    </div>

                    {/* Weather Forecast */}
                    <div className="group relative flex h-[130] overflow-hidden rounded-xl border border-sky-100 bg-linear-to-r from-sky-50 via-white to-sky-100
                    px-4 py-3 shadow-sm transition hover:shadow-md">

                        <div className="relative z-10 flex w-[72%] flex-col items-start">
                            <div className="flex items-center gap-2">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center
                                rounded-full bg-sky-600 text-lg text-white shadow">
                                    ☁️
                                </div>
                                <h2 className="text-sm font-bold text-gray-900">
                                    Weather Forecast
                                </h2>
                            </div>

                            <p className="mt-1 text-xs leading-4 text-gray-600">
                                Get weather updates and rainfall forecasts.
                            </p>

                            <button onClick={() => navigate('/app/weather_info')}
                                className="mt-2 rounded-md bg-sky-600 px-3 py-1.5 text-xs font-semibold text-white transition
                           hover:bg-sky-700 active:scale-95">
                                View Weather →
                            </button>
                        </div>

                        {/* Right Side Image */}
                        <div className="absolute inset-y-0 right-0 w-[48%]">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtWLc6Hcom1YZf5rhz1K2BXXrclP2DVm1cE23k0HAyNw&s=10"
                                alt="Crop market"
                                className="h-full w-full object-cover object-center" />

                            {/* Blend image with left background */}
                            <div className="absolute inset-0 bg-linear-to-r
                           from-white via-sky-50/70 to-transparent"/>
                        </div>
                    </div>

                    {/* Scan Your Crop */}
                    <div className="group relative flex h-[130] overflow-hidden
                    rounded-xl border border-orange-100
                    bg-linear-to-r from-orange-50 via-white to-amber-100
                    px-4 py-3 shadow-sm transition hover:shadow-md">

                        <div className="relative z-10 flex w-[72%] flex-col items-start">
                            <div className="flex items-center gap-2">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center
                                rounded-full bg-orange-500 text-lg text-white shadow">
                                    📷
                                </div>
                                <h2 className="text-sm font-bold text-gray-900">
                                    Scan Your Crop
                                </h2>
                            </div>

                            <p className="mt-1 text-xs leading-4 text-gray-600">
                                Identify crop diseases and pests.
                            </p>

                            <button
                                onClick={() => navigate('/app/scan')}
                                className="mt-2 rounded-md bg-amber-600 px-3 py-1.5
                           text-xs font-semibold text-white transition
                           hover:bg-amber-700 active:scale-95"
                            >
                                Scan Photo →
                            </button>
                        </div>

                        {/* Right Side Image */}
                        <div className="absolute inset-y-0 right-0 w-[48%]">
                            <img
                                src="https://img-cdn.publive.online/filters:format(webp)/filters:format(webp)/english-betterindia/media/media_files/2026/09/11/crop-disease-2026-09-11-15-24-19.png"
                                alt="Crop market"
                                className="h-full w-full object-cover object-center" />

                            {/* Blend image with left background */}
                            <div className="absolute inset-0 bg-linear-to-r
                           from-white via-sky-50/40 to-transparent"/>
                        </div>
                    </div>

                </div>
            </div>

            <div className='w-full h-full px-10 flex justify-center gap-7'>
                {/* Main section */}
                <div className='h-full w-full py-4 md:w-2/3 flex flex-col gap-6 bg-white'>

                    <div className='flex flex-col py-4 rounded-xl border border-green-200/75 gap-1 bg-linear-to-l from-green-50 via-white/70 to-green-100'>
                        <h1 className='text-lg md:text-2xl font-bold'>🌿What is AgriConnect?</h1>

                        <p className='font-medium pl-7 text-gray-500'>Think of AgriStack as a digital system that brings all the important farming-related information into one place.
                            It’s a platform where farmers can register their details, like personal information, land ownership,
                            and crops they grow. This data helps the government and other stakeholders deliver services, schemes,
                            and financial support directly to those who need it most.
                        </p>

                        <button className='text-white font-medium bg-green-800 rounded w-fit px-2 py-1 mt-2 ml-4 active:scale-95'>
                            Learn More →
                        </button>
                    </div>

                    {/* Popular crops */}
                    <div className='h-fit flex flex-col py-4 rounded-xl border border-green-200/75 gap-1 bg-linear-to-l from-green-50 via-white/70 to-green-100'>
                        <h1 className='text-lg md:text-2xl font-bold'>🌿Popular Crops</h1>

                        <p className='font-medium pl-7 text-gray-500'>
                            Explore detail information, market price and farming tips for popular crops.
                        </p>

                        {/* popular crops */}
                        <div className='flex mx-4 mt-4 justify-between gap-3 overflow-x-scroll hide-scrollbar'>
                            <div className='relative w-fit'>
                                <div className='relative h-40 w-60'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZR0Uv-l51Bo0uco8Xb8Q3XTR2xf_jc9jru7mmPIaYKw&s=10" alt=""
                                        className='object-cover h-36 w-60 rounded-lg' />
                                    <p className='absolute text-lg font-medium text-amber-50 bottom-4 left-20'>Wheat</p>
                                </div>
                            </div>

                            <div className='relative w-fit'>
                                <div className='relative h-40 w-60'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxl5TxXtQ4u8RSsgCFWMsas7a0VUvzzS-UO1_zxOczSQ&s=10" alt=""
                                        className='object-cover h-36 w-60 rounded-lg' />
                                    <p className='absolute text-lg font-medium text-amber-50 bottom-4 left-20'>Bajra</p>
                                </div>
                            </div>

                            <div className='relative w-fit'>
                                <div className='relative h-40 w-60'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnDvqMo6CRTgB7ATsxOLbNzhihWGY2G-DRNFW1KB5tw&s=10" alt=""
                                        className='object-cover h-36 w-60 rounded-lg' />
                                    <p className='absolute text-lg font-medium text-amber-50 bottom-4 left-20'>Rice</p>
                                </div>
                            </div>

                            <div className='relative w-fit'>
                                <div className='relative h-40 w-60'>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gQ46O0TA3UIfnqFdWXZuftGeEIq3C4zEQdtLYNaOpg&s=10" alt=""
                                        className='object-cover h-36 w-60 rounded-lg' />
                                    <p className='absolute text-lg font-medium text-amber-50 bottom-4 left-20'>Soyabean</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='flex flex-col gap-3'>
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
                    </div> */}

                    {/* Fertilizer information */}
                    {/* <div className='flex flex-col gap-3'>
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
                    </div> */}
                </div>

                {/* AD section */}
                <div className='hidden w-1/4 h-fit py-4 px-3 bg-white md:flex flex-col gap-7 border border-gray-300 rounded-xl'>
                    <h1 className='font-bold'>Recommended Products</h1>

                    <div className='w-full h-fit px-2 flex gap-2 rounded-lg py-2 bg-green-50 border border-green-700/30'>
                        <div className='h-20 w-20 shrink-0'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSynvtargszBv4DHowMVmlwbDfWW-3Cs81LNVzFe5_-Q&s" alt=""
                            className='h-full w-full object-cover' />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <p className='font-medium'>BT Cotton Special Liquid Fertilizer for Cotton Crop 2L</p>

                            <Link to={`https://www.amazon.in/Cotton-Special-Liquid-Fertilizer-Crop/dp/B0H6WV7LFC?th=1`}
                            className='px-2 py-0.5 h-fit w-fit text-white text-sx rounded bg-green-800 outline-none'>
                                View Products →
                            </Link>
                        </div>
                    </div>

                    <div className='w-full h-fit px-2 flex gap-2 rounded-lg py-2 bg-green-50 border border-green-700/30'>
                        <div className='h-20 w-20 shrink-0'>
                            <img src="https://agribegri.com/_next/image?url=https%3A%2F%2Fdujjhct8zer0r.cloudfront.net%2Fmedia%2Fprod_image%2F15151901621751288444.webp&w=1920&q=85" alt=""
                            className='h-full w-full object-cover' />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <p className='font-medium'>Best Feild Crop Seeds Products online</p>

                            <Link to={`https://www.kisanshop.in/product/ankur-bhaskar-f1-hybrid-maize-seeds?srsltid=AU7gw4V05uhBjaetLl5OmaVkpxrOdyRx5m9ijX5hMsuy-6W3s7E84tyB`}
                            className='px-2 py-0.5 h-fit w-fit text-white text-sx rounded bg-green-800 outline-none'>
                                View Products →
                            </Link>
                        </div>
                    </div>

                    <div className='w-full h-fit px-2 flex gap-2 rounded-lg py-2 bg-green-50 border border-green-700/30'>
                        <div className='h-20 w-20 shrink-0'>
                            <img src="https://casadeamor.in/cdn/shop/products/cottonseedcakefertilizer-5.jpg?v=1650367686&width=1445" alt=""
                            className='h-full w-full object-cover' />
                        </div>

                        <div className='w-full flex flex-col gap-1'>
                            <p className='font-medium'>Casa De Amor Cottonseed Cake Organic Fertilizer (Kapasya khal)</p>

                            <Link to={`https://www.amazon.in/Casa-Amor-Fertilizer-Gardening-Flowering/dp/B09Y3D488J?th=1`}
                            className='px-2 py-0.5 h-fit w-fit text-white text-sx rounded bg-green-800 outline-none'>
                                View Products →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body