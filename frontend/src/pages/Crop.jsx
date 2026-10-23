import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Crop = () => {
    const navigate = useNavigate();
    const [cropInfo, setCropInfo] = useState();

    // fetch farmer crop recored
    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/farmer/crops`, { withCredentials: true })
            setCropInfo(res.data.data);

        } catch (error) {
            console.log("profile error: ", error.status)
            if (error.status == 401)
                navigate(`/`)

        }
    }

    // Remove Crop record
    const removeRecord = async(id) => {
        try {
            const res = await axios.patch(`http://localhost:3000/farmer/rm_record/${id}`, {}, { withCredentials: true })
            console.log("response: ", res.data.message);
            
        } catch (error) {
            console.log("deleting crop record: ", error);
        }
    }

    // Update Crop record
    const updateRecord = async(id) => {
        try {
            const res = await axios.get(`http://localhost:3000/farmer/user_crop/${id}`)
            // console.log("response: ", res.data.data);

            // pass data to add_crop page
            navigate(`/app/update_crop_record`, { state: res.data.data });
            
        } catch (error) {
            console.log("crop info is not recive: ", error);
        }
    }

    useEffect(() => {
        getData()
    }, [removeRecord]);

    return (
        // <div className='min-h-screen w-full py-7 flex flex-col items-center gap-5 bg-zinc-100'>
        //     <h1 className='text-2xl font-medium'>Your Crop Details</h1>

        //     <table className='h-fit py-4 w-2/3 border '>
        //         <thead className='text-center h-12 bg-blue-200'>
        //             <tr>
        //                 <th className='border'>Name</th>
        //                 <th className='border'>Veriety</th>
        //                 <th className='border'>Session</th>
        //                 <th className='border'>Showing</th>
        //                 <th className='border'>Fertilizer</th>
        //                 <th className='border'>Harvest</th>
        //                 <th className='border'>Update</th>
        //                 <th className='border'>Delele</th>
        //             </tr>
        //         </thead>

        //         {
        //             cropInfo
        //                 ?
        //                 cropInfo.map((item) => (
        //                     <tbody key={item._id}
        //                         className='text-center border h-10 py-3 px-1'>
        //                         <tr>
        //                             <td className='border'> {item.name} </td>
        //                             <td className='border'> {item.veriety} </td>
        //                             <td className='border'> {item.session} </td>
        //                             <td className='border'> {item.showing} </td>
        //                             <td className='border'> {item.fertilizer} </td>
        //                             <td className='border'> {item.harvest} </td>

        //                             {/* Update crop record */}
        //                             <td className='border'> 
        //                                 <button onClick={() => updateRecord(item._id)}
        //                                 className='h-7 px-1 text-white rounded font-medium bg-green-500'>
        //                                     Update
        //                                 </button> 
        //                             </td>

        //                             {/* Delete crop record */}
        //                             <td className='border'> 
        //                                 <button onClick={() => removeRecord(item._id)}
        //                                 className='h-7 px-1 text-white rounded font-medium bg-red-500'>
        //                                     Remove    
        //                                 </button> 
        //                             </td>
        //                         </tr>
        //                     </tbody>
        //                 ))
        //                 :
        //                 <tbody></tbody>
        //         }
        //     </table>
        // </div>

<div className="min-h-screen w-full bg-green-50/50 px-4 py-8 sm:px-7">

    {/* Heading */}
    <div className="mx-auto mb-6 max-w-7xl">
        <h1 className="text-2xl font-bold text-green-900 sm:text-3xl">
            Your Crop Details
        </h1>
        <p className="mt-2 text-sm text-gray-500">
            Manage and track your crop information in one place.
        </p>
    </div>

    {/* Table Container */}
    <div className="mx-auto max-w-7xl overflow-hidden rounded-xl border border-green-100 bg-white shadow-sm">

        <div className="overflow-x-auto">
            <table className="w-full min-w-[1000 px] border-collapse text-left">

                {/* Table Header */}
                <thead className="bg-green-800 text-white">
                    <tr>
                        <th className="px-4 py-4 text-sm font-semibold">Name</th>
                        <th className="px-4 py-4 text-sm font-semibold">Variety</th>
                        <th className="px-4 py-4 text-sm font-semibold">Season</th>
                        <th className="px-4 py-4 text-sm font-semibold">Sowing</th>
                        <th className="px-4 py-4 text-sm font-semibold">Fertilizer</th>
                        <th className="px-4 py-4 text-sm font-semibold">Harvest</th>
                        <th className="px-4 py-4 text-center text-sm font-semibold">Update</th>
                        <th className="px-4 py-4 text-center text-sm font-semibold">Delete</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-100">

                    {cropInfo && cropInfo.length > 0 ? (
                        cropInfo.map((item) => (
                            <tr
                                key={item._id}
                                className="transition-colors hover:bg-green-50/70"
                            >
                                <td className="px-4 py-4 text-sm font-semibold text-gray-800">
                                    {item.name}
                                </td>

                                <td className="px-4 py-4 text-sm text-gray-600">
                                    {item.veriety}
                                </td>

                                <td className="px-4 py-4 text-sm text-gray-600">
                                    {item.session}
                                </td>

                                <td className="px-4 py-4 text-sm text-gray-600">
                                    {item.showing}
                                </td>

                                <td className="px-4 py-4 text-sm text-gray-600">
                                    {item.fertilizer}
                                </td>

                                <td className="px-4 py-4 text-sm text-gray-600">
                                    {item.harvest}
                                </td>

                                {/* Update */}
                                <td className="px-4 py-4 text-center">
                                    <button
                                        onClick={() => updateRecord(item._id)}
                                        className="rounded-lg bg-green-100 px-3 py-2 text-sm font-semibold text-green-800 transition hover:bg-green-700 hover:text-white active:scale-95"
                                    >
                                        Update
                                    </button>
                                </td>

                                {/* Delete */}
                                <td className="px-4 py-4 text-center">
                                    <button
                                        onClick={() => removeRecord(item._id)}
                                        className="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-600 hover:text-white active:scale-95"
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="8"
                                className="px-4 py-12 text-center text-sm text-gray-500"
                            >
                                No crop details available.
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    </div>
</div>
    )
}

export default Crop