import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Sprout, User, Mail, Lock, Eye, EyeOff } from "lucide-react";

const Login = () => {
    const [isResister, setIsResister] = useState(false);
    const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
    const [resisterInput, setResisterInput] = useState({ name: "", email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    // login Information
    const loginInfo = (e) => {
        const { name, value } = e.target

        setLoginInputs(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Resiter Information
    const resisterInfo = (e) => {
        const { name, value } = e.target

        setResisterInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // login handler
    const loginHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/farmer/login`, loginInputs, { withCredentials: true })

            if (response.status == 200)
                navigate(`/app`, { replace: true })

        } catch (error) {
            console.log("Status:", error);
        } finally {
            setLoginInputs({ email: "", password: "" });
        }
    }

    // Resiter Handler
    const resiterHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/farmer/creat_user`, resisterInput)

            if (response.status == 201)
                setIsResister(!isResister)

        } catch (error) {
            console.log('resiter error: ', error)
        } finally {
            setResisterInput({ name: "", email: "", password: "" });
        }
    }

    return (
        // <div className='relative h-screen w-full flex items-center justify-center'>
        //     {/* Login from */}
        //     {
        //         // Login Form
        //         isResister ? <div className="hidden"></div>
        //             : <form onSubmit={loginHandler}
        //                 className='absolute h-fit w-full px-10 py-4 flex flex-col gap-3 rounded-xl bg-white/20 md:w-1/2'>
        //                 <h1 className='text-3xl my-2 font-bold text-blue-200'>Login</h1>

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

        //                 <div className="w-full h-fit flex flex-col justify-center items-center">
        //                     <p className="text-white font-medium cursor-pointer">
        //                         Forget Password?
        //                     </p>
        //                     <p onClick={() => setIsResister(!isResister)}
        //                         className="text-white font-medium cursor-pointer">
        //                         Create an Account?
        //                     </p>
        //                     <p onClick={() => navigate(`/admin`)}
        //                         className="text-white font-medium cursor-pointer">
        //                         Admin Login
        //                     </p>
        //                 </div>

        //             </form>
        //     }


        //     {
        //         // Resister Form
        //         isResister
        //             ?
        //             <form onSubmit={resiterHandler}
        //                 className='absolute h-fit w-full px-7 py-4 flex flex-col gap-3 rounded-xl bg-white/20 md:w-1/2'>
        //                 <h1 className='text-2xl my-2 font-bold text-blue-50'>Resiter</h1>

        //                 <input type="text" placeholder='Enter name' name="name"
        //                     onChange={resisterInfo}
        //                     value={resisterInput.name}
        //                     className='h-12 w-full px-2 font-medium outline-none text-blue-100 border-2 border-amber-50 rounded-lg' />

        //                 <input type="email" placeholder='Enter email' name="email"
        //                     onChange={resisterInfo}
        //                     value={resisterInput.email}
        //                     className='h-12 w-full px-2 font-medium outline-none text-blue-100 border-2 border-amber-50 rounded-lg' />

        //                 <input type="password" placeholder='Enter password' name="password"
        //                     onChange={resisterInfo}
        //                     value={resisterInput.password}
        //                     className='h-12 w-full px-2 font-medium outline-none text-blue-100 border-2 border-amber-50 rounded-lg' />

        //                 <button className='h-12 w-full text-white text-lg font-bold rounded-lg bg-blue-950 active:scale-95'>
        //                     Resister
        //                 </button>

        //                 <div className="w-full flex justify-center">
        //                     <p onClick={() => setIsResister(!isResister)}
        //                         className="text-white font-medium cursor-pointer">
        //                         I have a already account?
        //                     </p>
        //                 </div>

        //             </form>
        //             :
        //             <div className="hidden"></div>

        //     }
        // </div>
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-green-950 via-green-800 to-emerald-700 px-4 py-10">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-lime-400/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl" />

            {/* Auth Card */}
            <div className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur-xl">

                {/* Brand Header */}
                <div className="flex flex-col items-center bg-green-800 px-6 py-7 text-white">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 shadow-inner">
                        <Sprout size={32} />
                    </div>

                    <h1 className="text-2xl font-extrabold tracking-wide">
                        AgriGrow
                    </h1>

                    <p className="mt-1 text-center text-sm text-green-100">
                        Your partner in smarter farming
                    </p>
                </div>

                <div className="px-6 py-7 sm:px-8">

                    {/* LOGIN FORM */}
                    {!isResister && (
                        <form onSubmit={loginHandler} className="flex flex-col gap-5">

                            <div className="mb-1">
                                <h2 className="text-3xl font-extrabold text-slate-800">
                                    Welcome Back!
                                </h2>
                                <p className="mt-2 text-sm text-slate-500">
                                    Login to continue your journey.
                                </p>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Email Address
                                </label>

                                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
                                    <Mail size={19} className="shrink-0 text-green-700" />

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
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
                                        placeholder="Enter your password"
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

                            {/* Forgot Password */}
                            <div className="flex justify-end">
                                <p className="cursor-pointer text-sm font-semibold text-green-700 transition hover:text-green-900">
                                    Forgot Password?
                                </p>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-800 font-bold text-white shadow-md transition hover:bg-green-900 hover:shadow-lg active:scale-[0.98]"
                            >
                                Login <span>→</span>
                            </button>

                            {/* Register Link */}
                            <p className="text-center text-sm text-slate-600">
                                Don't have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsResister(true);
                                        setShowPassword(false);
                                    }}
                                    className="font-bold text-green-700 hover:text-green-900 hover:underline"
                                >
                                    Create Account
                                </button>
                            </p>

                            {/* Admin Login */}
                            <div className="border-t border-slate-100 pt-4 text-center">
                                <button
                                    type="button"
                                    onClick={() => navigate("/admin")}
                                    className="text-sm font-semibold text-slate-500 transition hover:text-green-700"
                                >
                                    Login as Administrator →
                                </button>
                            </div>

                        </form>
                    )}

                    {/* REGISTER FORM */}
                    {isResister && (
                        <form onSubmit={resiterHandler} className="flex flex-col gap-4">

                            <div className="mb-2">
                                <h2 className="text-3xl font-extrabold text-slate-800">
                                    Create Account
                                </h2>
                                <p className="mt-2 text-sm text-slate-500">
                                    Join us and grow with AgriGrow.
                                </p>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Full Name
                                </label>

                                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
                                    <User size={19} className="shrink-0 text-green-700" />

                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        name="name"
                                        onChange={resisterInfo}
                                        value={resisterInput.name}
                                        required
                                        className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Email Address
                                </label>

                                <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
                                    <Mail size={19} className="shrink-0 text-green-700" />

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        onChange={resisterInfo}
                                        value={resisterInput.email}
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
                                        placeholder="Create a password"
                                        name="password"
                                        onChange={resisterInfo}
                                        value={resisterInput.password}
                                        required
                                        minLength={8}
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

                                <p className="mt-1.5 text-xs text-slate-400">
                                    Use at least 8 characters.
                                </p>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-800 font-bold text-white shadow-md transition hover:bg-green-900 hover:shadow-lg active:scale-[0.98]"
                            >
                                Create Account <span>→</span>
                            </button>

                            {/* Login Link */}
                            <p className="mt-2 text-center text-sm text-slate-600">
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsResister(false);
                                        setShowPassword(false);
                                    }}
                                    className="font-bold text-green-700 hover:text-green-900 hover:underline"
                                >
                                    Login
                                </button>
                            </p>

                        </form>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Login