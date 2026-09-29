import axios from "axios"
import { useState } from "react";

const Add_crop = () => {
    const [inputs, setInputs] = useState({ name: "", fertilizer: "", info: "", soil: "", varieties: "", disease: "", harvest: "", land: "" });
    const [pic, setPic] = useState(null);

    const add = (e) => {
        const { name, value } = e.target

        setInputs((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    // post form data
    const fromHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("pic", pic);
        formData.append("name", inputs.name);
        formData.append("fertilizer", inputs.fertilizer);
        formData.append("info", inputs.info);
        formData.append("soil", inputs.soil);
        formData.append("varieties", inputs.varieties);
        formData.append("disease", inputs.disease);
        formData.append("harvest", inputs.harvest);
        formData.append("land", inputs.land);

        try {
            const res = await axios.post(`http://localhost:3000/farmer/add_crop`, formData);
            console.log("res: ", res);

        } catch (error) {
            console.log("error: ", error)

        } finally {
            setInputs({ name: "", fertilizer: "", info: "", soil: "", varieties: "", disease: "", harvest: "", land: "" });
            setPic(null);
        }
    }

    return (
        <div className='min-h-screen w-full py-10 flex justify-center bg-linear-to-br from-green-300 via-white to-emerald-400'>
            <form onSubmit={fromHandler}
            className='h-fit w-2/3 flex flex-col py-7 px-9 gap-5 rounded-xl bg-blue-50'>
                <h1 className='text-2xl font-bold'>Add new Crop</h1>

                <input type="text" placeholder='Enter Crop Name' name='name'
                    onChange={add}
                    value={inputs.name}
                    className='h-12 w-full px-3 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                <input type="text" placeholder='Basic information' name="info"
                    onChange={add}
                    value={inputs.info}
                    className='h-12 w-full px-3 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                <input type="text" placeholder='Enter soil detail' name="soil"
                    onChange={add}
                    value={inputs.soil}
                    className='h-12 w-full px-3 font-medium outline-none border-2 border-gray-500 rounded-lg' />
                
                <input type="text" placeholder='Enter Land-preperation' name="land"
                    onChange={add}
                    value={inputs.land}
                    className='h-12 w-full px-3 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                <input type="text" placeholder='Enter vetiaties' name="varieties"
                    onChange={add}
                    value={inputs.varieties}
                    className='h-12 w-full px-3 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                <input type="text" placeholder='Enter Require Fertilizer' name="fertilizer"
                    onChange={add}
                    value={inputs.fertilizer}
                    className='h-12 w-full px-3 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                <input type="text" placeholder='Enter Crop Disease' name="disease"
                    onChange={add}
                    value={inputs.disease}
                    className='h-12 w-full px-3 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                <input type="text" placeholder='Enter harvesting detail' name="harvest"
                    onChange={add}
                    value={inputs.harvest}
                    className='h-12 w-full px-3 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                <div>
                    <h1 className='font-medium pb-1'>Add Crop Picture</h1>
                    <input type="file" placeholder='Enter Brand Name'
                        onChange={(e) => setPic(e.target.files[0])}
                        className='h-10 w-fit px-3 font-medium outline-none border-2 border-gray-500 rounded-lg' />
                </div>

                <div className="w-full flex justify-center">
                    <button className="h-12 w-2/3 rounded-lg text-lg font-bold text-white bg-green-900 active:scale-95">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Add_crop