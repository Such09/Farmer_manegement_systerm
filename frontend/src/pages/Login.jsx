import { useState } from "react";

const Login = () => {
    const [isResister, setIsResister] = useState(false);

    return (
        <div className='relative h-screen w-full flex items-center justify-center'>
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20240610/pngtree-concept-use-of-the-smart-farmer-system-came-to-help-analysis-image_15746624.jpg" alt=""
                className="h-full w-full object-cover" />

            {/* Login from */}

            <form className='absolute h-fit w-full px-4 py-4 flex flex-col gap-3 border-2 rounded-lg bg-white md:w-1/2'>
                <h1 className='text-lg font-medium'>Login</h1>

                <input type="text" placeholder='Enter email'
                    className='h-12 w-full px-2 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                <input type="password" placeholder='Enter password'
                    className='h-12 w-full px-2 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                <button className='h-12 w-full text-white text-lg font-bold rounded-lg bg-green-500 active:scale-95'>
                    Login
                </button>

                <p onClick={() => setIsResister(!isResister)}>
                    Create an Account?
                </p>

            </form>


            {
                isResister
                    ?
                    <form className='absolute h-fit w-full px-4 py-4 flex flex-col gap-3 border-2 rounded-lg bg-white md:w-1/2'>
                        <h1 className='text-lg font-medium'>Resiter</h1>

                        <input type="text" placeholder='Enter name'
                            className='h-12 w-full px-2 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                        <input type="email" placeholder='Enter email'
                            className='h-12 w-full px-2 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                        <input type="password" placeholder='Enter password'
                            className='h-12 w-full px-2 font-medium outline-none border-2 border-gray-500 rounded-lg' />

                        <button className='h-12 w-full text-white text-lg font-bold rounded-lg bg-green-500 active:scale-95'>
                            Resister
                        </button>

                        <p onClick={() => setIsResister(!isResister)}>
                            I have a already account?
                        </p>

                    </form>
                    :
                    <div className="hidden"></div>

            }
        </div>
    )
}

export default Login