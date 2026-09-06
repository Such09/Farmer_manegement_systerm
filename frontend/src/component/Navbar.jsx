import { useState } from 'react'
import { User, Search } from 'lucide-react'
import logo from '../accets/logo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isProfileClick, setIsProfileClick] = useState(false);

    console.log(isProfileClick);


    return (
        <div className='w-full flex justify-between items-center relative'>
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
                    <div className='hidden md:flex w-1/2'>
                        <input type="search" placeholder='search crops....'
                            className='h-10 w-1/3 px-3 outline-none text-gray-900 font-medium border-blue-100 bg-white rounded-tl-lg rounded-bl-lg' />

                        <button className='h-10 w-10 flex justify-center items-center bg-amber-400 rounded-tr-lg rounded-br-lg'>
                            <Search size={24} strokeWidth={2.0} />
                        </button>
                    </div>

                    <Link to={`/profile`} className='font-medium text-white text-lg'>Profile</Link>

                    <Link to={`/crop`} className='font-medium text-white text-lg'>Crop's</Link>

                    <Link to={`/contact`} className='font-medium text-white text-lg'>Contact</Link>

                    <Link to={`/help`} className='font-medium text-white text-lg'>Help</Link>

                </div>
            </div>

            {/* Mobile */}
            {
                isProfileClick
                    ?
                    <div className='w-full h-fit mt-56 px-2 flex flex-col gap-2 bg-white absolute'>
                        <Link to={`/profile`} onClick={() => setIsProfileClick(!isProfileClick)} 
                        className='font-medium py-1 hover:bg-gray-50'>Profile</Link>

                        <Link to={`/crop`} onClick={() => setIsProfileClick(!isProfileClick)} 
                        className='font-medium py-1 hover:bg-gray-50'>Crop</Link>

                        <Link to={`/contact`} onClick={() => setIsProfileClick(!isProfileClick)} 
                        className='font-medium py-1 hover:bg-gray-50'>Contact</Link>

                        <Link to={`/help`} onClick={() => setIsProfileClick(!isProfileClick)} 
                        className='font-medium py-1 hover:bg-gray-50'>Help</Link>
                    </div>

                    : <div className='hidden'></div>
            }
        </div>
    )
}

export default Navbar