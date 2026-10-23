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
        <div className="min-h-screen w-full flex justify-center bg-linear-to-br from-green-100 via-white to-emerald-100 px-4 py-10">

            <form onSubmit={fromHandler}
                className="flex h-fit w-full max-w-3xl flex-col gap-5 rounded-2xl border border-green-100 bg-white p-6 shadow-lg sm:p-8">
                {/* Header */}
                <div className="mb-2 border-b border-green-100 pb-5">
                    <div className="mb-2 text-3xl">🌱</div>

                    <h1 className="text-2xl font-bold text-green-800">
                        Add New Crop
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Enter crop details to add a new crop.
                    </p>
                </div>

                {/* Crop Name */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Crop Name
                    </label>
                    <input type="text" placeholder="Enter crop name" name="name"
                        onChange={add}
                        value={inputs.name}
                        className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 outline-none transition
                 focus:border-green-600 focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Basic Information */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Basic Information
                    </label>
                    <textarea placeholder="Enter basic information" name="info"
                        onChange={add}
                        value={inputs.info}
                        rows="3"
                        className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-3 outline-none transition
                 focus:border-green-600 focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Soil Details */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Soil Details
                    </label>
                    <textarea placeholder="Enter soil details" name="soil"
                        onChange={add}
                        value={inputs.soil}
                        rows="2"
                        className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-green-600 
                focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Land Preparation */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Land Preparation
                    </label>
                    <textarea placeholder="Enter land preparation details" name="land"
                        onChange={add}
                        value={inputs.land}
                        rows="2"
                        className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-3 outline-none transition
                 focus:border-green-600 focus:ring-2 focus:ring-green-100" />
                </div>

                {/* Varieties */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Crop Varieties
                    </label>
                    <input type="text" placeholder="Enter crop varieties" name="varieties"
                        onChange={add}
                        value={inputs.varieties}
                        className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 outline-none transition focus:border-green-600 
                focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Fertilizer */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Required Fertilizer
                    </label>
                    <textarea placeholder="Enter required fertilizer details" name="fertilizer"
                        onChange={add}
                        value={inputs.fertilizer}
                        rows="2"
                        className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-green-600 
                focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Crop Disease */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Crop Diseases
                    </label>
                    <textarea placeholder="Enter crop disease details" name="disease"
                        onChange={add}
                        value={inputs.disease}
                        rows="2"
                        className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-3 outline-none transition
                focus:border-green-600 focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Harvesting */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Harvesting Details
                    </label>
                    <textarea placeholder="Enter harvesting details" name="harvest"
                        onChange={add}
                        value={inputs.harvest}
                        rows="2"
                        className="w-full resize-y rounded-lg border border-gray-200 bg-gray-50 p-3 outline-none transition focus:border-green-600
                focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Crop Picture */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Crop Picture
                    </label>
                    <input type="file" name="pic" accept="image/*"
                        onChange={(e) => setPic(e.target.files[0])}
                        className="w-full cursor-pointer rounded-lg border border-dashed border-green-300 bg-green-50 p-3 text-sm text-gray-600 
                file:mr-4 file:rounded-md file:border-0 file:bg-green-700 file:px-4 file:py-2 file:font-medium file:text-white hover:file:bg-green-800"/>
                </div>

                {/* Submit Button */}
                <button type="submit"
                    className="mt-3 h-12 w-full rounded-lg bg-green-700 text-base font-semibold text-white shadow-md transition
            hover:bg-green-800 active:scale-[0.98]">
                    Add Crop
                </button>
            </form>
        </div>
    )
}

export default Add_crop