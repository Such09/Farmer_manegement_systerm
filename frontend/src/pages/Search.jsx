import { useLocation } from "react-router-dom"

const Search = () => {
    const location = useLocation()

    const cropInfo = location.state    

    return (
        <div className='min-h-screen w-full px-24 flex justify-center gap-2.5 bg-zinc-100'>
            {
                cropInfo.cropData.map((item) => (
                    <div key={item._id} className='h-fit py-7 px-7 w-full bg-white flex flex-col gap-2'>
                        <div className="w-full flex justify-center">
                            <img src={item.img} alt=""
                            className='w-2/3 h-56 object-cover' />
                        </div>

                        <div className="h-fit w-full mt-5 px-18 flex flex-col gap-6">
                            <div className="w-full min-h-28 pb-4 bg-gray-100">
                                <h1 className="bg-green-700 px-3 font-medium py-1 text-white">GENERAL INFORMATION</h1>
                                <p className="px-3.5"> { item.basicInfo } </p>
                            </div>

                            <div className="w-full min-h-28 pb-4 bg-gray-100">
                                <h1 className="bg-green-700 px-3 font-medium py-1 text-white">SOIL HEALTH</h1>
                                <p className="px-3.5"> { item.soil_health } </p>
                            </div>

                            <div className="w-full min-h-28 pb-4 bg-gray-100">
                                <h1 className="bg-green-700 px-3 font-medium py-1 text-white">LAND PREPARATION</h1>
                                <p className="px-3.5"> { item.land_preparation } </p>
                            </div>

                            <div className="w-full min-h-28 pb-4 bg-gray-100">
                                <h1 className="bg-green-700 px-3 font-medium py-1 text-white">VERIETIES</h1>
                                <p className="px-3.5"> { item.varieties } </p>
                            </div>

                            <div className="w-full min-h-28 pb-4 bg-gray-100">
                                <h1 className="bg-green-700 px-3 font-medium py-1 text-white">FERTILIZERS</h1>
                                <p className="px-3.5"> { item.fertilizer } </p>
                            </div>

                            <div className="w-full min-h-28 pb-4 bg-gray-100">
                                <h1 className="bg-green-700 px-3 font-medium py-1 text-white">DISEASE</h1>
                                <p className="px-3.5"> { item.disease } </p>
                            </div>

                            <div className="w-full min-h-28 pb-4 bg-gray-100">
                                <h1 className="bg-green-700 px-3 font-medium py-1 text-white">HARVASTING</h1>
                                <p className="px-3.5"> { item.harvest } </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Search