import axios from 'axios'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const ResponceToMessage = () => {
    const location = useLocation()
    const data = location.state
    const [inputs, setInputs] = useState({ id: data.id, email: data.email, title: data.title, message: '' });

    const collectInputs = (e) => {
        const { name, value } = e.target

        setInputs((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const formHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:3000/farmer/sent_replay`, inputs)
            console.log('res: ', res);

        } catch (error) {
            console.log("error: ", error)
        }
    }

    return (
        <div className='min-h-screen w-full flex justify-center items-center px-4 py-10 bg-green-50'>

            <form onSubmit={formHandler}
                className='w-full md:w-2/3 lg:w-1/2 h-fit flex flex-col p-6 md:p-8 gap-5 bg-white rounded-xl shadow-lg border border-green-100'>

                {/* Heading */}
                <div className='border-b border-green-100 pb-4'>
                    <h1 className='font-bold text-2xl text-green-800'>
                        Farmer Query Response
                    </h1>
                    <p className='text-sm text-gray-500 mt-2'>
                        Review the farmer's inquiry and provide a helpful solution.
                    </p>
                </div>

                {/* Farmer Email */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-gray-700'>
                        Submitted By (Email)
                    </label>

                    <input type="email" value={data.email} readOnly name='email'
                        onChange={collectInputs}
                        className='h-12 w-full px-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 outline-none' />
                </div>

                {/* Query Subject */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-gray-700'>
                        Inquiry Subject
                    </label>

                    <input type="text" value={data.title} readOnly name='title'
                        onChange={collectInputs}
                        className='h-12 w-full px-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-600 outline-none' />
                </div>

                {/* Solution */}
                <div className='flex flex-col gap-2'>
                    <label className='font-medium text-gray-700'>
                        Your Solution
                    </label>

                    <textarea placeholder='Write a helpful solution for the farmer...'
                        name='message'
                        onChange={collectInputs}
                        rows={5}
                        className='w-full p-4 rounded-lg border border-green-200 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 resize-none transition-all' />
                </div>

                {/* Submit Button */}
                <button type='submit'
                    className='h-12 w-full rounded-lg font-semibold text-white bg-green-700 hover:bg-green-800 shadow-sm active:scale-95 transition-all duration-200'>
                    Send Solution
                </button>

            </form>

        </div>

    )
}

export default ResponceToMessage