import { useState } from "react";

const Login = () => {
    const [isResister, setIsResister] = useState(false);

    return (
        <div className='relative h-screen w-full flex items-center justify-center'>
            <img src="https://img.magnific.com/premium-photo/close-up-agriculture-scenery-field-wheat-field-farming-background_179935-63108.jpg?semt=ais_hybrid&w=740&q=80" alt=""
                className="h-full w-full object-cover" />

            {/* Login from */}

            {
                isResister ? <div className="hidden"></div>
                    : <form className='absolute h-fit w-full px-10 py-4 flex flex-col gap-3 rounded-xl bg-white/20 md:w-1/2'>
                        <h1 className='text-3xl my-2 font-bold text-blue-200'>Login</h1>

                        <input type="text" placeholder='Enter email....'
                            className='h-12 w-full px-4 text-lg font-medium text-gray-950 outline-none border-b-2 border-amber-50' />

                        <input type="password" placeholder='Enter password....'
                            className='h-12 w-full px-4 text-lg font-medium text-gray-950 outline-none border-b-2 border-amber-50' />

                        <button className='h-12 w-full mt-5 text-white text-lg font-bold rounded-lg bg-blue-950 active:scale-95'>
                            Login
                        </button>

                        <div className="w-full h-fit flex flex-col justify-center items-center">
                            <p onClick={() => setIsResister(!isResister)}
                                className="text-white font-medium">
                                Forget Password?
                            </p>
                            <p onClick={() => setIsResister(!isResister)}
                                className="text-white font-medium">
                                Create an Account?
                            </p>
                        </div>

                    </form>
            }


            {
                isResister
                    ?
                    <form className='absolute h-fit w-full px-7 py-4 flex flex-col gap-3 rounded-xl bg-white/20 md:w-1/2'>
                        <h1 className='text-2xl my-2 font-bold text-blue-50'>Resiter</h1>

                        <input type="text" placeholder='Enter name'
                            className='h-12 w-full px-2 font-medium outline-none text-blue-100 border-2 border-amber-50 rounded-lg' />

                        <input type="email" placeholder='Enter email'
                            className='h-12 w-full px-2 font-medium outline-none text-blue-100 border-2 border-amber-50 rounded-lg' />

                        <input type="password" placeholder='Enter password'
                            className='h-12 w-full px-2 font-medium outline-none text-blue-100 border-2 border-amber-50 rounded-lg' />

                        <button className='h-12 w-full text-white text-lg font-bold rounded-lg bg-blue-950 active:scale-95'>
                            Resister
                        </button>

                        <div className="w-full flex justify-center">
                            <p onClick={() => setIsResister(!isResister)}
                                className="text-white font-medium">
                                I have a already account?
                            </p>
                        </div>

                    </form>
                    :
                    <div className="hidden"></div>

            }
        </div>
    )
}

export default Login