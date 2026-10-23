import axios from "axios"
import { useState } from "react";

const Add_seeds = () => {
    const [inputs, setInputs] = useState({ brand: "", product: "", info: "" });
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
        formData.append("brand", inputs.brand);
        formData.append("product", inputs.product);
        formData.append("info", inputs.info);

        try {
            const res = await axios.post(`http://localhost:3000/farmer/add_seed`, formData);

            console.log("res: ", res);
        } catch (error) {
            console.log("error: ", error)
        } finally {
            setInputs({ brand: "", product: "", info: "" });
            setPic(null);
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-green-50 px-4 py-8">

            <form
                onSubmit={fromHandler}
                className="w-full max-w-xl flex flex-col gap-5 rounded-2xl border border-green-100 bg-white p-6 shadow-lg sm:p-8"
            >
                {/* Header */}
                <div className="mb-2 text-center">
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl">
                        🌱
                    </div>

                    <h1 className="text-2xl font-bold text-green-800">
                        Add Seed
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Add your seed product details
                    </p>
                </div>

                {/* Brand Name */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Brand Name
                    </label>

                    <input type="text" placeholder="Enter brand name" name="brand"
                        onChange={add}
                        value={inputs.brand}
                        className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-700 outline-none 
                transition focus:border-green-600 focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Product Name */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Product Name
                    </label>

                    <input type="text" placeholder="Enter seed product name" name="product"
                        onChange={add}
                        value={inputs.product}
                        className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-700 outline-none 
                transition focus:border-green-600 focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Information */}
                <div>
                    <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                        Basic Information
                    </label>

                    <textarea placeholder="Enter seed details..." name="info"
                        onChange={add}
                        value={inputs.info}
                        rows="3"
                        className="w-full resize-none rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-700 outline-none transition
                focus:border-green-600 focus:ring-2 focus:ring-green-100"/>
                </div>

                {/* Seed Picture */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Seed Picture
                    </label>

                    <input type="file" name="pic" accept="image/*"
                        onChange={(e) => setPic(e.target.files[0])}
                        className="w-full cursor-pointer rounded-lg border border-dashed border-green-300 bg-green-50 p-3 text-sm text-gray-600 file:mr-4 
                file:rounded-md file:border-0 file:bg-green-700 file:px-4 file:py-2 file:font-medium file:text-white hover:file:bg-green-800"/>
                </div>

                {/* Submit Button */}
                <button type="submit"
                    className="mt-2 h-12 w-full rounded-lg bg-green-700 text-base font-semibold text-white shadow-md 
            transition hover:bg-green-800 active:scale-[0.98]">
                    Add Seed
                </button>
            </form>
        </div>
    )
}

export default Add_seeds