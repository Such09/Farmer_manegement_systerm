import axios from "axios"
import { useState } from "react";

const Add_fertilizer = () => {
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
            const res = await axios.post(`http://localhost:3000/farmer/add_fertilizer`, formData);

            console.log("res: ", res);
        } catch (error) {
            console.log("error: ", error)
        } finally {
            setInputs({ brand: "", product: "", info: "" });
            setPic(null);
        }
    }

    return (
        <div className='relative h-screen w-full flex justify-center items-center bg-white'>
            {/* background image */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHyxsEhdsh_yNFcNQoXWpcUCfp6LZRjKwK-QP5gJFRw&s=10" alt=""
                className="h-full w-full object-cover" />

            <form onSubmit={fromHandler}
                className='absolute h-fit w-2/3 flex flex-col py-7 px-9 gap-5 rounded-xl bg-white/30 backdrop-blur-sm'>
                <h1 className='text-2xl font-bold text-white'>Add Fertilizer</h1>

                <input type="text" placeholder='Enter Brand Name' name="brand"
                    onChange={add}
                    value={inputs.brand}
                    className='h-12 w-full px-3 font-medium outline-none text-zinc-700 border-2 border-gray-200 rounded-lg' />

                <input type="text" placeholder='Enter Product Name' name="product"
                    onChange={add}
                    value={inputs.product}
                    className='h-12 w-full px-3 font-medium outline-none text-zinc-700 border-2 border-gray-200 rounded-lg' />

                <input type="text" placeholder='Basic information' name="info"
                    onChange={add}
                    value={inputs.info}
                    className='h-12 w-full px-3 font-medium outline-none text-zinc-700 border-2 border-gray-200 rounded-lg' />

                <div>
                    <h1 className='font-medium pb-1 text-white'>Add Fertilizer Picture</h1>
                    <input type="file" name="pic"
                        onChange={(e) => setPic(e.target.files[0])}
                        value={pic}
                        className='h-10 w-fit px-3 font-medium outline-none text-zinc-700 border-2 border-gray-200 rounded-lg' />
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

export default Add_fertilizer