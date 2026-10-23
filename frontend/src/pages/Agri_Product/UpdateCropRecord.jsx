import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom"

const UpdateCropRecord = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [inputs, setInputs] = useState({ name: "", veriety: "", session: "", showing: "", fertilizer: "", harvest: "" });

    const crop = location.state;

    useEffect(() => {
        if (crop) {
            setInputs(crop)
        }
    }, [crop])

    const cropD = (e) => {
        const { name, value } = e.target

        setInputs((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // Update Crop information
    const updateRecord = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.patch(`http://localhost:3000/farmer/update_record`, inputs, { withCredentials: true })

            navigate(`/app/crop`)
        } catch (error) {
            if (error.status == 401) {
                navigate(`/`)
            }
            console.log("crop detail error: ", error);
        } finally {
            setInputs({ name: "", veriety: "", session: "", showing: "", fertilizer: "", harvest: "" });
        }
    }

    return (
        // <div className='relative h-screen w-full flex justify-center bg-zinc-100'>

        //     {/* add crop details */}
        //     <form onSubmit={updateRecord}
        //         className='absolute h-fit w-2/3 mt-28 py-4 px-10 flex flex-col gap-3 rounded-xl bg-white/30 backdrop-blur-xs'>
        //         <h1 className='text-2xl mb-2.5 font-bold'>Update Crop Information</h1>

        //         <input type="text" placeholder='Enter Crop name' name='name'
        //             onChange={cropD}
        //             value={inputs.name}
        //             className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

        //         <input type="text" placeholder='Enter Veriety name' name='veriety'
        //             onChange={cropD}
        //             value={inputs.veriety}
        //             className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

        //         <input type="text" placeholder='Enter Crop session' name='session'
        //             onChange={cropD}
        //             value={inputs.session}
        //             className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

        //         <input type="text" placeholder='Showing data' name='showing'
        //             onChange={cropD}
        //             value={inputs.showing}
        //             className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

        //         <input type="text" placeholder='Fertilizers' name='fertilizer'
        //             onChange={cropD}
        //             value={inputs.fertilizer}
        //             className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

        //         <input type="text" placeholder='Harvesting data' name='harvest'
        //             onChange={cropD}
        //             value={inputs.harvest}
        //             className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

        //         <div className='w-full flex justify-center'>
        //             <button className='h-12 w-2/3 text-white font-bold text-lg rounded-lg bg-green-700 active:scale-95'>
        //                 Update
        //             </button>

        //         </div>
        //     </form>
        // </div>

        <div className="min-h-screen w-full bg-green-50 px-4 py-10 sm:px-6">

            <div className="mx-auto w-full max-w-2xl">

                <form
                    onSubmit={updateRecord}
                    className="flex flex-col gap-5 rounded-2xl border border-green-100 bg-white p-6 shadow-md sm:p-8"
                >
                    {/* Heading */}
                    <div className="mb-2 border-b border-green-100 pb-4">
                        <h1 className="text-2xl font-bold text-green-800 sm:text-3xl">
                            Add Crop Information
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Enter the details of your crop below.
                        </p>
                    </div>

                    {/* Crop Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Crop Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter crop name"
                            name="name"
                            onChange={cropD}
                            value={inputs.name}
                            className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    {/* Variety */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Variety Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter variety name"
                            name="veriety"
                            onChange={cropD}
                            value={inputs.veriety}
                            className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    {/* Crop Season */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Crop Season
                        </label>
                        <input
                            type="text"
                            placeholder="Enter crop season"
                            name="session"
                            onChange={cropD}
                            value={inputs.session}
                            className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    {/* Sowing Date */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Sowing Date
                        </label>
                        <input
                            type="text"
                            placeholder="Enter sowing date"
                            name="showing"
                            onChange={cropD}
                            value={inputs.showing}
                            className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    {/* Fertilizer */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Fertilizer
                        </label>
                        <input
                            type="text"
                            placeholder="Enter fertilizer details"
                            name="fertilizer"
                            onChange={cropD}
                            value={inputs.fertilizer}
                            className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    {/* Harvesting Date */}
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Harvesting Date
                        </label>
                        <input
                            type="text"
                            placeholder="Enter harvesting date"
                            name="harvest"
                            onChange={cropD}
                            value={inputs.harvest}
                            className="h-12 w-full rounded-lg border border-gray-300 px-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="mt-2 h-12 w-full rounded-lg bg-green-700 text-base font-semibold text-white shadow-sm transition hover:bg-green-800 active:scale-[0.98]"
                    >
                        + Add Crop Details
                    </button>

                </form>
            </div>
        </div>
    )
}

export default UpdateCropRecord