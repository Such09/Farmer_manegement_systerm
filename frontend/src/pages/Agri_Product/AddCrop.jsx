import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const AddCrop = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({name: "", veriety: "", session: "", showing: "", fertilizer: "", harvest: ""});

    const cropD = (e) =>{
        const{name, value} = e.target

        setInputs((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    const addCrop = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.patch(`http://localhost:3000/farmer/addcrop`, inputs, { withCredentials: true })
            // console.log("res: ", res.data);
            
        } catch (error) {
            if(error.status == 401){
                navigate(`/`)
            }
           console.log("crop detail error: ", error);
        }finally{
            setInputs({name: "", veriety: "", session: "", showing: "", fertilizer: "", harvest: ""});
        }
    }
  return (
    <div className='relative h-screen w-full flex justify-center bg-zinc-100'>
        {/* bg image */}
        <img src="https://www.cropin.com/wp-content/uploads/2021/09/Regenerative-Agriculture-1.jpg" alt="" 
        className='h-full w-full object-cover'/>

        {/* add crop details */}
        <form onSubmit={addCrop}
        className='absolute h-fit w-2/3 mt-28 py-4 px-10 flex flex-col gap-3 rounded-xl bg-white/30 backdrop-blur-xs'>
            <h1 className='text-2xl mb-2.5 font-bold'>Add Crop Information</h1>

            <input type="text" placeholder='Enter Crop name' name='name'
            onChange={cropD}
            value={inputs.name}
            className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

            <input type="text" placeholder='Enter Veriety name' name='veriety'
            onChange={cropD}
            value={inputs.veriety}
            className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

            <input type="text" placeholder='Enter Crop session' name='session'
            onChange={cropD}
            value={inputs.session}
            className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

            <input type="text" placeholder='Showing data' name='showing'
            onChange={cropD}
            value={inputs.showing}
            className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

            <input type="text" placeholder='Fertilizers' name='fertilizer'
            onChange={cropD}
            value={inputs.fertilizer}
            className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

            <input type="text" placeholder='Harvesting data' name='harvest'
            onChange={cropD}
            value={inputs.harvest}
            className='h-12 w-full outline-none rounded-lg font-medium px-3 border-2 border-blue-300' />

            <div className='w-full flex justify-center'>
                <button className='h-12 w-2/3 text-white font-bold text-lg rounded-lg bg-green-700 active:scale-95'>
                Add Details
            </button>
            </div>
        </form>
    </div>
  )
}

export default AddCrop