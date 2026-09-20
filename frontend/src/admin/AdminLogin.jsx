import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [isResister, setIsResister] = useState(false);
    const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
    const [resisterInput, setResisterInput] = useState({ name: "", email: "", password: "" });

    const navigate = useNavigate();

    // admin login Information
    const loginInfo = (e) => {
        const { name, value } = e.target

        setLoginInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // admin Resiter Information
    const resisterInfo = (e) => {
        const { name, value } = e.target

        setResisterInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // admin Login
    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/farmer/login_admin`, loginInputs, { withCredentials: true })

            if(response.status == 200)
                navigate(`/admin_app`, { replace: true })

        } catch (error) {
            console.log('login error: ', error.message)
        } finally {
            setLoginInputs({ email: "", password: "" });
        }
    }

    // Resiter Handler
    const resiterHandler = async (e) => {
        e.preventDefault();

        try {            
            const response = await axios.post(`http://localhost:3000/farmer/resister_admin`, resisterInput)

            if(response.status == 201)
                setIsResister(!isResister)
            
        } catch (error) {
            console.log('resiter error: ', error)
        } finally {
            setResisterInput({ name: "", email: "", password: "" });
        }
    }

    return (
        <div className='relative h-screen w-full flex items-center justify-center'>
            <img src="https://img.magnific.com/premium-photo/close-up-agriculture-scenery-field-wheat-field-farming-background_179935-63108.jpg?semt=ais_hybrid&w=740&q=80" alt=""
                className="h-full w-full object-cover" />

            {/* Login from */}

            {
                // Login Form
                isResister ? <div className="hidden"></div>
                    : <form onSubmit={loginHandler}
                        className='absolute h-fit w-full px-10 py-4 flex flex-col gap-3 rounded-xl bg-white/20 md:w-1/2'>
                        <h1 className='text-3xl my-2 font-bold text-blue-200'>Admin Login</h1>

                        <input type="text" placeholder='Enter email....' name="email"
                            onChange={loginInfo}
                            value={loginInputs.email}
                            className='h-12 w-full px-4 text-lg font-medium text-gray-950 outline-none border-b-2 border-amber-50' />

                        <input type="password" placeholder='Enter password....' name="password"
                            onChange={loginInfo}
                            value={loginInputs.password}
                            className='h-12 w-full px-4 text-lg font-medium text-gray-950 outline-none border-b-2 border-amber-50' />

                        <button className='h-12 w-full mt-5 text-white text-lg font-bold rounded-lg bg-blue-950 active:scale-95'>
                            Login
                        </button>

                        <div className="w-full h-fit flex flex-col justify-center items-center">
                            <p onClick={() => setIsResister(!isResister)}
                                className="text-white font-medium cursor-pointer">
                                Create an Account?
                            </p>
                        </div>

                    </form>
            }


            {
                // Resister Form
                isResister
                    ?
                    <form onSubmit={resiterHandler}
                        className='absolute h-fit w-full px-7 py-4 flex flex-col gap-3 rounded-xl bg-white/20 md:w-1/2'>
                        <h1 className='text-2xl my-2 font-bold text-blue-50'>Admin Resiter</h1>

                        <input type="text" placeholder='Enter name' name="name"
                            onChange={resisterInfo}
                            value={resisterInput.name}
                            className='h-12 w-full px-2 font-medium outline-none text-blue-100 border-2 border-amber-50 rounded-lg' />

                        <input type="email" placeholder='Enter email' name="email"
                            onChange={resisterInfo}
                            value={resisterInput.email}
                            className='h-12 w-full px-2 font-medium outline-none text-blue-100 border-2 border-amber-50 rounded-lg' />

                        <input type="password" placeholder='Enter password' name="password"
                            onChange={resisterInfo}
                            value={resisterInput.password}
                            className='h-12 w-full px-2 font-medium outline-none text-blue-100 border-2 border-amber-50 rounded-lg' />

                        <button className='h-12 w-full text-white text-lg font-bold rounded-lg bg-blue-950 active:scale-95'>
                            Resister
                        </button>

                        <div className="w-full flex justify-center">
                            <p onClick={() => setIsResister(!isResister)}
                                className="text-white font-medium cursor-pointer">
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

export default AdminLogin