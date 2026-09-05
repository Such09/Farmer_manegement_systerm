import { useState } from 'react'
import { User } from 'lucide-react'
import logo from '../accets/logo.png'

const Navbar = () => {
    const [isProfileClick, setIsProfileClick] = useState(false);

    console.log(isProfileClick);


    return (
        <div className='w-full h-16 px-4 p-1 flex justify-between items-center bg-cyan-900 relative'>
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
            <div className='hidden w-fit md:flex justify-end gap-4'>
                <a href="#"
                    className='font-medium text-white py-1'>Profile</a>

                <a href="#"
                    className='font-medium text-white py-1'>Crop</a>

                <a href="#"
                    className='font- text-white py-1'>Contact</a>

                <a href="#"
                    className='font-medium text-white py-1'>Help</a>
            </div>

            {/* Mobile */}
            {
                isProfileClick
                    ?
                    <div className='w-full h-fit mt-64 flex flex-col gap-2 absolute'>
                        <a href="#"
                            className='font-medium py-1 hover:bg-gray-50'>Profile</a>

                        <a href="#"
                            className='font-medium py-1 hover:bg-gray-50'>Crop</a>

                        <a href="#"
                            className='font-medium py-1 hover:bg-gray-50'>Contact</a>

                        <a href="#"
                            className='font-medium py-1 hover:bg-gray-50'>Help</a>

                        <a href="#"
                            className='font-medium py-1 hover:bg-gray-50'>Logout</a>
                    </div>

                    : <div className='hidden'></div>
            }

        </div>
    )
}

export default Navbar