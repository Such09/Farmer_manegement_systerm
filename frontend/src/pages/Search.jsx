import { useLocation } from "react-router-dom"

const Search = () => {
    const location = useLocation()

    const cropInfo = location.state

    return (
        // <div className='min-h-screen w-full px-24 flex justify-center gap-2.5 bg-zinc-100'>
        //     {
        //         cropInfo.cropData.map((item) => (
        //             <div key={item._id} className='h-fit py-7 px-7 w-full bg-white flex flex-col gap-2'>
        //                 <div className="w-full flex justify-center">
        //                     <img src={item.img} alt=""
        //                     className='w-2/3 h-56 object-cover' />
        //                 </div>

        //                 <div className="h-fit w-full mt-5 px-18 flex flex-col gap-6">
        //                     <div className="w-full min-h-28 pb-4 bg-gray-100">
        //                         <h1 className="bg-green-700 px-3 font-medium py-1 text-white">GENERAL INFORMATION</h1>
        //                         <p className="px-3.5"> { item.basicInfo } </p>
        //                     </div>

        //                     <div className="w-full min-h-28 pb-4 bg-gray-100">
        //                         <h1 className="bg-green-700 px-3 font-medium py-1 text-white">SOIL HEALTH</h1>
        //                         <p className="px-3.5"> { item.soil_health } </p>
        //                     </div>

        //                     <div className="w-full min-h-28 pb-4 bg-gray-100">
        //                         <h1 className="bg-green-700 px-3 font-medium py-1 text-white">LAND PREPARATION</h1>
        //                         <p className="px-3.5"> { item.land_preparation } </p>
        //                     </div>

        //                     <div className="w-full min-h-28 pb-4 bg-gray-100">
        //                         <h1 className="bg-green-700 px-3 font-medium py-1 text-white">VERIETIES</h1>
        //                         <p className="px-3.5"> { item.varieties } </p>
        //                     </div>

        //                     <div className="w-full min-h-28 pb-4 bg-gray-100">
        //                         <h1 className="bg-green-700 px-3 font-medium py-1 text-white">FERTILIZERS</h1>
        //                         <p className="px-3.5"> { item.fertilizer } </p>
        //                     </div>

        //                     <div className="w-full min-h-28 pb-4 bg-gray-100">
        //                         <h1 className="bg-green-700 px-3 font-medium py-1 text-white">DISEASE</h1>
        //                         <p className="px-3.5"> { item.disease } </p>
        //                     </div>

        //                     <div className="w-full min-h-28 pb-4 bg-gray-100">
        //                         <h1 className="bg-green-700 px-3 font-medium py-1 text-white">HARVASTING</h1>
        //                         <p className="px-3.5"> { item.harvest } </p>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))
        //     }
        // </div>
        <div className="min-h-screen w-full bg-green-50/60 px-4 py-10 sm:px-8">

            {cropInfo.cropData.map((item) => (
                <div
                    key={item._id}
                    className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-green-100 bg-white shadow-lg"
                >
                    {/* Crop Image */}
                    <div className="relative bg-linear-to-br from-green-100 to-amber-50 p-5 sm:p-8">
                        <div className="overflow-hidden rounded-2xl shadow-md">
                            <img
                                src={item.img}
                                alt="Crop"
                                className="h-64 w-full object-cover transition duration-500 hover:scale-[1.02] sm:h-96"
                            />
                        </div>

                        <div className="mt-5">
                            <span className="rounded-full bg-green-700 px-4 py-1.5 text-xs font-bold tracking-widest text-white">
                                CROP GUIDE
                            </span>

                            <h1 className="mt-3 text-2xl font-extrabold text-green-950 sm:text-3xl">
                                Complete Crop Information
                            </h1>

                            <p className="mt-2 text-sm leading-6 text-gray-600">
                                Everything you need to know for healthy growth and better yield.
                            </p>
                        </div>
                    </div>

                    {/* Information Cards */}
                    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">

                        {/* General Information */}
                        <div className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="flex items-center gap-3 bg-green-800 px-4 py-4 text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                                    🌱
                                </span>
                                <h2 className="font-bold tracking-wide">GENERAL INFORMATION</h2>
                            </div>
                            <p className="p-5 text-sm leading-7 text-gray-600">
                                {item.basicInfo}
                            </p>
                        </div>

                        {/* Soil Health */}
                        <div className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="flex items-center gap-3 bg-green-800 px-4 py-4 text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                                    🌾
                                </span>
                                <h2 className="font-bold tracking-wide">SOIL HEALTH</h2>
                            </div>
                            <p className="p-5 text-sm leading-7 text-gray-600">
                                {item.soil_health}
                            </p>
                        </div>

                        {/* Land Preparation */}
                        <div className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="flex items-center gap-3 bg-green-800 px-4 py-4 text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                                    🚜
                                </span>
                                <h2 className="font-bold tracking-wide">LAND PREPARATION</h2>
                            </div>
                            <p className="p-5 text-sm leading-7 text-gray-600">
                                {item.land_preparation}
                            </p>
                        </div>

                        {/* Varieties */}
                        <div className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="flex items-center gap-3 bg-green-800 px-4 py-4 text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                                    🌿
                                </span>
                                <h2 className="font-bold tracking-wide">VARIETIES</h2>
                            </div>
                            <p className="p-5 text-sm leading-7 text-gray-600">
                                {item.varieties}
                            </p>
                        </div>

                        {/* Fertilizers */}
                        <div className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="flex items-center gap-3 bg-green-800 px-4 py-4 text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                                    🧪
                                </span>
                                <h2 className="font-bold tracking-wide">FERTILIZERS</h2>
                            </div>
                            <p className="p-5 text-sm leading-7 text-gray-600">
                                {item.fertilizer}
                            </p>
                        </div>

                        {/* Disease */}
                        <div className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="flex items-center gap-3 bg-green-800 px-4 py-4 text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                                    🛡️
                                </span>
                                <h2 className="font-bold tracking-wide">DISEASE MANAGEMENT</h2>
                            </div>
                            <p className="p-5 text-sm leading-7 text-gray-600">
                                {item.disease}
                            </p>
                        </div>

                        {/* Harvesting */}
                        <div className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:col-span-3">
                            <div className="flex items-center gap-3 bg-green-800 px-4 py-4 text-white">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-xl">
                                    🌻
                                </span>
                                <h2 className="font-bold tracking-wide">HARVESTING</h2>
                            </div>
                            <p className="p-5 text-sm leading-7 text-gray-600">
                                {item.harvest}
                            </p>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Search