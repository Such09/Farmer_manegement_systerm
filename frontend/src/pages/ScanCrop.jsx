import { useState } from 'react';
import logo from '../accets/logo_2.png';
import axios from 'axios';

const ScanCrop = () => {
    const [result, setResult] = useState("");
    const [crop, setCrop] = useState(null);
    const [isLoding, setIsLoding] = useState(false);

    const cropFormHandler = async (e) => {
        e.preventDefault();
        try {
            setIsLoding(true)

            const formData = new FormData()
            formData.append("crop", crop)

            const res = await axios.post(`http://localhost:3000/farmer/scan`, formData)
            
            setResult(res.data.result)

        } catch (error) {
            console.log("crop photo sending error: ", error.message);
        } finally {
            setIsLoding(false)
        }
    }
    return (
        <div className='min-h-screen w-full flex flex-col py-9 items-center bg-zinc-100'>
            <div className='relative h-fit w-2/3 py-7 flex flex-col items-center gap-3 bg-white rounded-lg'>
                {/* Logo */}
                <img src={logo} alt=""
                    className='h-16 w-fit px-3 object-cover' />

                <h1 className='text-2xl font-bold text-shadow-2xl text-shadow-cyan-900'>Crop Health Scanner</h1>

                <p className='text-lg font-medium'>
                    Take a photo of your crop leaf
                    to check for possible problems.
                </p>

                <form onSubmit={cropFormHandler}
                    className='flex flex-col items-center gap-4'>
                    <div className='flex flex-col gap-1.5'>
                        <label className='font-medium'>Select Crop Photo</label>
                        <input type="file" name='crop'
                            onChange={(e) => setCrop(e.target.files[0])}
                            className='h-fit py-1 px-2 w-fit font-medium rounded border text-center bg-gray-100' />
                    </div>

                    <button className='h-fit py-1 w-fit px-10 rounded text-white font-bold bg-green-500 active:scale-95'>
                        Scan
                    </button>
                </form>

                <div className='flex flex-col mt-4'>
                    <p className='font-medium'>✓ Clear leaf photo</p>
                    <p className='font-medium'>✓ Avoid blurry images</p>
                </div>

                {/* Result */}
                {
                    isLoding
                        ? <div className=' absolute h-96 w-full flex flex-col justify-center items-center top-0 bg-white/70 backdrop-blur-xs text-lg font-medium'>
                            Loading....
                        </div>
                        : <div className='hidden'>  </div>
                }
            </div>

            {/* Print result */}
            <div className='h-fit w-2/3 py-7 px-6 font-medium bg-white'>
                {result
                    .split("\n")
                    .filter(line => line.trim() !== "")
                    .map((line, index) => (
                        <p key={index} className="mb-2">
                            {line.replace(/\*\*/g, "")}
                        </p>
                    ))}
            </div>

        </div>
    )
}

export default ScanCrop