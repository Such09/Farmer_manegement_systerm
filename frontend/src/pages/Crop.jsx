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
        <div className='min-h-screen w-full py-7 flex flex-col items-center gap-5 bg-zinc-100'>
            <h1 className='text-2xl font-medium'>Your Crop Details</h1>

            <table className='h-fit py-4 w-2/3 border '>
                <thead className='text-center h-12 bg-blue-200'>
                    <tr>
                        <th className='border'>Name</th>
                        <th className='border'>Veriety</th>
                        <th className='border'>Session</th>
                        <th className='border'>Showing</th>
                        <th className='border'>Fertilizer</th>
                        <th className='border'>Harvest</th>
                        <th className='border'>Update</th>
                        <th className='border'>Delele</th>
                    </tr>
                </thead>

                {
                    cropInfo
                        ?
                        cropInfo.map((item) => (
                            <tbody key={item._id}
                                className='text-center border h-10 py-3 px-1'>
                                <tr>
                                    <td className='border'> {item.name} </td>
                                    <td className='border'> {item.veriety} </td>
                                    <td className='border'> {item.session} </td>
                                    <td className='border'> {item.showing} </td>
                                    <td className='border'> {item.fertilizer} </td>
                                    <td className='border'> {item.harvest} </td>

                                    {/* Update crop record */}
                                    <td className='border'> 
                                        <button onClick={() => updateRecord(item._id)}
                                        className='h-7 px-1 text-white rounded font-medium bg-green-500'>
                                            Update
                                        </button> 
                                    </td>

                                    {/* Delete crop record */}
                                    <td className='border'> 
                                        <button onClick={() => removeRecord(item._id)}
                                        className='h-7 px-1 text-white rounded font-medium bg-red-500'>
                                            Remove    
                                        </button> 
                                    </td>
                                </tr>
                            </tbody>
                        ))
                        :
                        <tbody></tbody>
                }
            </table>
        </div>
    )
}

export default Crop