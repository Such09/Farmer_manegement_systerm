import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Sprout, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import logo from '../accets/logo.png';
import { successtoast, warningtoast } from "../util/tost";

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
            const response = await axios.post(`farmermanegementsysterm-production.up.railway.app/farmer/login`, loginInputs, { withCredentials: true })
            successtoast(response.data.message)
            
            if (response.status == 200)
                navigate(`/app`, { replace: true })

        } catch (error) {
            warningtoast(error.response?.data.message)

        } finally {
            setLoginInputs({ email: "", password: "" });
        }
    }

    // Resiter Handler
    const resiterHandler = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`farmermanegementsysterm-production.up.railway.app/farmer/creat_user`, resisterInput)
            successtoast(response.data.message)

            if (response.status == 201)
                setIsResister(!isResister)

        } catch (error) {
            warningtoast(error.response?.data.message)
            
        } finally {
            setResisterInput({ name: "", email: "", password: "" });
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center px-4 py-10 bg-green-50">
            {/* Login Card */}
            <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-7 shadow-xl sm:p-9">
                {/* Logo & Brand */}
                <div className="mb-8 flex flex-col items-center">
                    <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">
                        <img src={logo} alt="AgriConnect Logo"
                            className="h-12 w-12 rounded-xl object-cover" />
                    </div>

                    <h1 className="text-2xl font-bold tracking-wide text-green-800">
                        AgriConnect
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                        Smart Farming, Better Future
                    </p>
                </div>

                {/* LOGIN FORM */}
                {!isResister && (
                    <form onSubmit={loginHandler} className="flex flex-col gap-5" >
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                                Welcome Back!
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Login to manage your farming activities.
                            </p>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Email Address
                            </label>

                            <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-300 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
                                <Mail size={19} className="text-green-700" />

                                <input type="email" name="email" placeholder="Enter your email"
                                    onChange={loginInfo}
                                    value={loginInputs.email}
                                    required
                                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400" />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Password
                            </label>

                            <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-300 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">

                                <Lock size={19} className="text-green-700" />

                                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password"
                                    onChange={loginInfo}
                                    value={loginInputs.password}
                                    required
                                    className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400" />

                                <button type="button" onClick={() => setShowPassword(!showPassword)}
                                    className="text-gray-400 hover:text-green-700">
                                    {showPassword
                                        ? <EyeOff size={19} />
                                        : <Eye size={19} />
                                    }
                                </button>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button type="submit"
                            className="mt-2 h-12 w-full rounded-lg bg-green-700 font-semibold text-white shadow-sm transition duration-300 hover:bg-green-800 hover:shadow-md active:scale-[0.98]">
                            Login →
                        </button>

                        {/* Register */}
                        <p className="text-center text-sm text-gray-600">
                            Don't have an account?

                            <button type="button"
                                onClick={() => {
                                    setIsResister(true);
                                    setShowPassword(false);
                                }}
                                className="ml-1 font-semibold text-green-700 hover:text-green-900">
                                Create Account
                            </button>
                        </p>

                        {/* Admin Login */}
                        <div className="border-t border-gray-200 pt-4 text-center">

                            <button type="button" onClick={() => navigate("/admin")}
                                className="text-sm font-medium text-gray-500 transition hover:text-green-700">
                                Login as Admin →
                            </button>

                        </div>

                    </form>
                )}

                {/* REGISTER FORM */}
                {isResister && (
                    <form onSubmit={resiterHandler} className="flex flex-col gap-4">

                        <div className="mb-2">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Create Account
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                Join AgriConnect and grow with us.
                            </p>
                        </div>

                        {/* Name */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Full Name
                            </label>

                            <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-300 px-4 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">

                                <User size={19} className="text-green-700" />

                                <input type="text" name="name" placeholder="Enter your full name"
                                    onChange={resisterInfo} value={resisterInput.name} required
                                    className="w-full bg-transparent text-sm outline-none" />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Email Address
                            </label>

                            <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-300 px-4 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">

                                <Mail size={19} className="text-green-700" />

                                <input type="email" name="email" placeholder="Enter your email"
                                    onChange={resisterInfo}
                                    value={resisterInput.email} required
                                    className="w-full bg-transparent text-sm outline-none" />

                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">
                                Password
                            </label>

                            <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-300 px-4 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">

                                <Lock size={19} className="text-green-700" />

                                <input type={showPassword ? "text" : "password"}
                                    name="password" placeholder="Create a password"
                                    onChange={resisterInfo}
                                    value={resisterInput.password}
                                    required
                                    minLength={8}
                                    className="w-full bg-transparent text-sm outline-none"/>

                                <button type="button" onClick={() => setShowPassword(!showPassword)}
                                    className="text-gray-400 hover:text-green-700">
                                    {showPassword
                                        ? <EyeOff size={19} />
                                        : <Eye size={19} />
                                    }
                                </button>
                            </div>

                            <p className="mt-1 text-xs text-gray-400">
                                Use at least 8 characters.
                            </p>
                        </div>

                        {/* Register Button */}
                        <button type="submit"
                            className="mt-2 h-12 w-full rounded-lg bg-green-700 font-semibold text-white shadow-sm transition hover:bg-green-800 hover:shadow-md active:scale-[0.98]">
                            Create Account →
                        </button>

                        {/* Login Link */}
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Already have an account?

                            <button type="button"
                                onClick={() => {
                                    setIsResister(false);
                                    setShowPassword(false);
                                }}
                                className="ml-1 font-semibold text-green-700 hover:text-green-900">
                                Login
                            </button>
                        </p>

                    </form>
                )}
            </div>
        </div>
    );
}

export default Login