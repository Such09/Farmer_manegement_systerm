import axios from 'axios';
import { useState } from 'react'

const Crop_mandi_price = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [isFetch, setIsFetch] = useState(false);

    const formHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`http://localhost:3000/farmer/crop_price`, { params: { commodity: input } })
            setData(response.data.data)
            setIsFetch(true)
            console.log("res: ", response.data.data);

        } catch (error) {
            console.log("search market price error: ", error);
        } finally {
            setInput("")
        }
    }

    return (
        <div className='h-fit w-full flex justify-center py-28 bg-stone-200'>
            <div className='md:w-1/2 w-2/3 h-fit py-7 px-16 gap-4 flex flex-col items-center bg-white border border-gray-400/40 rounded-xl'>
                <h1 className='text-3xl font-bold
                bg-linear-to-r from-green-400 via-green-500 to-green-700 bg-clip-text text-transparent'>
                    Real-Time Market Analysis
                </h1>

                <p className='font-medium text-gray-500'>🌱 Search your crop to discover the latest market prices.</p>

                <form onSubmit={formHandler}
                    className='w-full h-24 bg-slate-700 rounded-xl px-10 flex justify-between items-center'>
                    <input type="search" placeholder='🔍 Search Market Price' name='crop'
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        className='h-12 w-1/2 px-2 rounded-xl outline-none text-gray-500 font-medium bg-slate-100' />

                    <button className='py-1.5 px-2 text-lg font-medium rounded-lg text-white bg-green-400 active:scale-95'>
                        Market Price
                    </button>
                </form>

                {
                    isFetch
                        ? (
                            data.length > 0
                                ? (
                                    data.map(item => (
                                        <div key={1} 
                                        className='h-fit md:w-60 w-2/3 py-4 px-5 shadow rounded-xl'>
                                            {/* <p>Date: {item.arrival_date}</p> */}
                                            <h1 className='text-lg font-bold'> {item.commodity} </h1>
                                            
                                            <div className='w-full flex justify-between py-1'>
                                                <p className='font-medium'>price: {item.modal_price}</p>
                                                <p>per quintal</p>
                                            </div>

                                            <p>quality: {item.grade}</p>
                                            <p>min price: {item.min_price}</p>
                                            <p>max price: {item.max_price}</p>
                                        </div>
                                    ))
                                )
                                : <div>Please, Enter valid crop name</div>
                        )
                        : <div></div>


                }
            </div>
        </div>
    )
}

export default Crop_mandi_price