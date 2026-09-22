import { useState } from 'react'
import { User, Search } from 'lucide-react'
import logo from '../accets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const navigate = useNavigate();
    const [isProfileClick, setIsProfileClick] = useState(false);
    const [input, setInput] = useState("");

    // Get Fertilizers Info
    const searchHandler = async (e) => {
        e.preventDefault();

        try {            
            const res = await axios.get(`http://localhost:3000/farmer/cropinfo`, { params: {name: input} })

            console.log("res: ", res.data.data);

            if (res.status == 200)
                navigate(`/app/search`, { state: { cropData: res.data.data } })

        } catch (error) {
            console.log("searchin error is: ", error.response);
        } finally {
            setInput("")
        }
    }

    return (
        <div className='w-full flex flex-col relative'>
            <div className='w-full h-16 px-4 flex justify-between items-center bg-cyan-900'>
                {/* Logo */}
                <div className='h-14 w-14 rounded-full'>
                    <img src={logo} alt=""
                        className='h-full w-full object-contain rounded-full' />
                </div>

                <button onClick={() => setIsProfileClick(!isProfileClick)}
                    className='md:hidden'>
                    <User size={30} color="#ffffff" strokeWidth={2.0} />
                </button>

                {/* Website */}
                <div className='hidden w-full md:flex justify-end gap-6'>
                    {/* Search bar */}
                    <form onSubmit={searchHandler} className='hidden md:flex w-1/2'>
                        <input type="search" placeholder='search crops....' name='brand'
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            className='h-10 w-1/3 px-3 outline-none text-gray-900 font-medium border-blue-100 bg-white rounded-tl-lg rounded-bl-lg' />

                        <button className='h-10 w-10 flex justify-center items-center bg-amber-400 rounded-tr-lg rounded-br-lg'>
                            <Search size={24} strokeWidth={2.0} />
                        </button>
                    </form>

                    <Link to={`/app`} className='font-medium text-white text-lg hover:text-amber-200'>Home</Link>

                    <Link to={`/app/profile`}
                        className='font-medium text-white text-lg hover:text-amber-200'>Profile</Link>

                    <Link to={`/app/crop`} className='font-medium text-white text-lg hover:text-amber-200'>Crops</Link>

                    <Link to={`/app/contact`} className='font-medium text-white text-lg hover:text-amber-200'>Contact</Link>
                </div>
            </div>

            <div className='hidden h-10 w-full px-5 md:flex items-center gap-6 justify-start bg-indigo-950'>
                <Link to={`/app/fertilizer`} className='text-white font-medium hover:text-orange-500'>Fertilizers</Link>
                <Link to={`/app/seed`} className='text-white font-medium hover:text-orange-500'>Seeds</Link>
                <Link to={`/app/add_crop`} className='text-white font-medium hover:text-orange-500'>Add Crop</Link>
                <Link to={`/app/scan`} className='text-white font-medium hover:text-orange-500'>Scan Crop</Link>
            </div>

            {/* Mobile */}
            {
                isProfileClick
                    ?
                    <div className='w-full h-fit mt-56 px-2 flex flex-col gap-2 bg-white absolute'>
                        <Link to={`/app/profile`} onClick={() => setIsProfileClick(!isProfileClick)}
                            className='font-medium py-1 hover:bg-gray-50'>Profile</Link>

                        <Link to={`/app/crop`} onClick={() => setIsProfileClick(!isProfileClick)}
                            className='font-medium py-1 hover:bg-gray-50'>Crop</Link>

                        <Link to={`/app/contact`} onClick={() => setIsProfileClick(!isProfileClick)}
                            className='font-medium py-1 hover:bg-gray-50'>Contact</Link>

                        <Link to={`/app/help`} onClick={() => setIsProfileClick(!isProfileClick)}
                            className='font-medium py-1 hover:bg-gray-50'>Help</Link>
                    </div>

                    : <div className='hidden'></div>
            }
        </div>
    )
}

export default Navbar