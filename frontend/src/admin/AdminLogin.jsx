import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Sprout, Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

const AdminLogin = () => {
    const [isResister, setIsResister] = useState(false);
    const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    // admin login Information
    const loginInfo = (e) => {
        const { name, value } = e.target

        setLoginInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // admin Login
    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/farmer/login_admin`, loginInputs, { withCredentials: true })

            if (response.status == 200)
                navigate(`/admin_app`, { replace: true })

        } catch (error) {
            console.log('login error: ', error.message)
        } finally {
            setLoginInputs({ email: "", password: "" });
        }
    }

    return (
        // <div className='relative h-screen w-full flex items-center justify-center'>
        //     {
        //         // Login Form
        //         isResister ? <div className="hidden"></div>
        //             : <form onSubmit={loginHandler}
        //                 className='absolute h-fit w-full px-10 py-4 flex flex-col gap-3 rounded-xl bg-white/20 md:w-1/2'>
        //                 <h1 className='text-3xl my-2 font-bold text-blue-200'>Admin Login</h1>

        //                 <input type="text" placeholder='Enter email....' name="email"
        //                     onChange={loginInfo}
        //                     value={loginInputs.email}
        //                     className='h-12 w-full px-4 text-lg font-medium text-gray-950 outline-none border-b-2 border-amber-50' />

        //                 <input type="password" placeholder='Enter password....' name="password"
        //                     onChange={loginInfo}
        //                     value={loginInputs.password}
        //                     className='h-12 w-full px-4 text-lg font-medium text-gray-950 outline-none border-b-2 border-amber-50' />

        //                 <button className='h-12 w-full mt-5 text-white text-lg font-bold rounded-lg bg-blue-950 active:scale-95'>
        //                     Login
        //                 </button>
        //             </form>
        //     }
        // </div>

        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-green-950 via-green-800 to-emerald-700 px-4 py-10">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-lime-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

            {/* Admin Login Card */}
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur-xl">

                {/* Header */}
                <div className="flex flex-col items-center bg-green-800 px-6 py-8 text-white">

                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 shadow-inner">
                        <ShieldCheck size={36} />
                    </div>

                    <h1 className="text-2xl font-extrabold tracking-wide">
                        Admin Login
                    </h1>

                    <p className="mt-2 text-center text-sm text-green-100">
                        Secure access to your admin dashboard
                    </p>
                </div>

                {/* Form */}
                <div className="px-6 py-8 sm:px-8">

                    <form onSubmit={loginHandler} className="flex flex-col gap-5">

                        <div>
                            <h2 className="text-2xl font-extrabold text-slate-800">
                                Welcome Back!
                            </h2>

                            <p className="mt-2 text-sm text-slate-500">
                                Enter your credentials to continue.
                            </p>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Admin Email
                            </label>

                            <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">

                                <Mail size={19} className="shrink-0 text-green-700" />

                                <input
                                    type="email"
                                    placeholder="Enter admin email"
                                    name="email"
                                    onChange={loginInfo}
                                    value={loginInputs.email}
                                    required
                                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Password
                            </label>

                            <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">

                                <Lock size={19} className="shrink-0 text-green-700" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter admin password"
                                    name="password"
                                    onChange={loginInfo}
                                    value={loginInputs.password}
                                    required
                                    className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-slate-400 transition hover:text-green-700"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-800 font-bold text-white shadow-md transition hover:bg-green-900 hover:shadow-lg active:scale-[0.98]"
                        >
                            <ShieldCheck size={19} />
                            Login to Dashboard
                        </button>

                        {/* Security Note */}
                        <div className="mt-1 flex items-center justify-center gap-2 text-xs text-slate-400">
                            <Lock size={14} />
                            <span>Authorized administrators only</span>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin