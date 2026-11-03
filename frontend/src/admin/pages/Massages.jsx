import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Massages = () => {
    const [info, setInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const getData = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/farmer/messages`)

            setInfo(res.data.data)
            setIsLoading(false)
            // console.log('res: ', res.data);

        } catch (error) {
            console.log('farmer queris not fetch: ', error);
        }
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='min-h-screen w-full px-4 md:px-10 lg:px-20 py-10 flex justify-center bg-linear-to-br from-green-50 via-white to-emerald-50'>

            <div className='h-[85vh] w-full md:w-2/3 rounded-2xl p-5 md:p-7 bg-white shadow-xl border border-green-100 overflow-y-scroll hide-scrollbar'>

                {/* Heading */}
                <div className='flex items-center justify-between border-b border-green-100 pb-5'>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                            Farmer Queries
                        </h1>
                        <p className='text-sm text-gray-500 mt-1'>
                            Manage and view farmers' questions
                        </p>
                    </div>
                </div>

                {
                    isLoading
                        ? <div className='h-60 flex items-center justify-center text-green-700 font-medium'>
                            Loading.....
                        </div>
                        :
                        <div className='flex flex-col gap-4 mt-6'>
                            {
                                info.map((item) => (
                                    <div key={item._id} onClick={() => navigate(`/admin_app/responce`, { state: {id: item._id, email: item.email, title: item.title}})}
                                        className='p-5 rounded-xl border border-green-100 bg-linear-to-r from-white to-green-50 
                                        hover:shadow-md hover:border-green-300 transition-all duration-300 flex flex-col gap-3'>

                                        <div className='flex items-center gap-2'>
                                            <div className='h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-700'>
                                                ✉
                                            </div>

                                            <div className='flex flex-col'>
                                                <p className='font-semibold text-gray-800 text-sm'>
                                                    {item.email} 
                                                </p>
                                                <span className='text-xs text-green-600'>
                                                    Farmer
                                                </span>
                                            </div>
                                        </div>

                                        <div className='pl-1'>
                                            <h2 className='font-semibold text-gray-800 text-base'>
                                                {item.title} 
                                            </h2>

                                            <p className='text-gray-600 text-sm leading-6 mt-1 wrap-break-word'>
                                                {item.message}
                                            </p>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                }

            </div>

        </div>

    )
}

export default Massages