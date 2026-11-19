import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Sprout, Mail, Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";
import logo from '../accets/logo.png';

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
            const response = await axios.post(`https://farmer-manegement-systerm.onrender.com/farmer/login_admin`, loginInputs, { withCredentials: true })

            if (response.status == 200)
                navigate(`/admin_app`, { replace: true })

        } catch (error) {
            console.log('login error: ', error.message)
        } finally {
            setLoginInputs({ email: "", password: "" });
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-green-50 px-4 py-10">

            {/* Admin Login Card */}
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
                        Admin Portal
                    </p>

                </div>

                {/* Login Form */}
                <form onSubmit={loginHandler} className="flex flex-col gap-5">

                    {/* Heading */}
                    <div>
                        <div className="mb-2 flex items-center gap-2">
                            <ShieldCheck size={23} className="text-green-700" />

                            <h2 className="text-2xl font-bold text-gray-800">
                                Admin Login
                            </h2>
                        </div>

                        <p className="text-sm text-gray-500">
                            Login to access your admin dashboard.
                        </p>
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Admin Email
                        </label>

                        <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-300 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">

                            <Mail size={19} className="shrink-0 text-green-700"/>

                            <input type="email" placeholder="Enter admin email" name="email"
                                onChange={loginInfo}
                                value={loginInputs.email}
                                required
                                className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"/>

                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Password
                        </label>

                        <div className="flex h-12 items-center gap-3 rounded-lg border border-gray-300 px-4 transition focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
                            <Lock size={19} className="shrink-0 text-green-700"/>

                            <input type={showPassword ? "text" : "password"} placeholder="Enter admin password" name="password"
                                onChange={loginInfo}
                                value={loginInputs.password}
                                required
                                className="w-full bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-400"/>

                            <button type="button" onClick={() => setShowPassword(!showPassword)}
                                className="text-gray-400 transition hover:text-green-700"
                                aria-label={showPassword ? "Hide password" : "Show password"}>
                                {showPassword
                                    ? <EyeOff size={19} />
                                    : <Eye size={19} />
                                }
                            </button>
                        </div>
                    </div>

                    {/* Login Button */}
                    <button type="submit"
                        className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-700 font-semibold text-white shadow-sm transition duration-300 hover:bg-green-800 hover:shadow-md active:scale-[0.98]">
                        <ShieldCheck size={19} />
                        Login to Dashboard
                    </button>

                    {/* Security Message */}
                    <div className="mt-1 flex items-center justify-center gap-2 border-t border-gray-200 pt-4 text-xs text-gray-500">
                        <Lock size={14} className="text-green-700" />

                        <span>
                            Authorized administrators only
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin