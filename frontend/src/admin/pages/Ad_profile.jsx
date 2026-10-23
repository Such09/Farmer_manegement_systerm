import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Ad_profile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const [resisterInput, setResisterInput] = useState({ name: "", email: "", password: "" });
    const [isPersnal, setIsPersnal] = useState(false);
    const [isCreateAdmin, setIsCreateAdmin] = useState(false);

    // profile
    const profile = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/farmer/ad_profile`, { withCredentials: true })
            setData(res.data.user);
            // console.log(res.data);
        } catch (error) {
            console.log("profile error: ", error.message)
            if (error.status == 401)
                navigate(`/admin`)

        }
    }

    useEffect(() => {
        profile();
    }, [])

    // Logout a admin
    const logout = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/farmer/logout_admin`, { withCredentials: true });

            // console.log('logout res: ', response);

            if (response.status == 200)
                navigate(`/admin`);

        } catch (error) {
            console.log("Logout error is: ", error);
        }
    }

    // personal info
    const personal = () => {
        setIsPersnal(!isPersnal)
        setIsCreateAdmin(false)
    }

    // new admin
    const createAdmin = () => {
        setIsCreateAdmin(!isCreateAdmin)
        setIsPersnal(false)
    }

    // admin Resiter Information
    const resisterInfo = (e) => {
        const { name, value } = e.target

        setResisterInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    // Resiter Handler
    const resiterHandler = async (e) => {
        e.preventDefault();

        try {            
            const response = await axios.post(`http://localhost:3000/farmer/resister_admin`, resisterInput)
            console.log("response: ", response.data);
            
            
        } catch (error) {
            console.log('resiter error: ', error)
        } finally {
            setResisterInput({ name: "", email: "", password: "" });
        }
    }


    return (
        // <div className='min-h-screen w-full flex justify-center gap-5 bg-zinc-100'>
        //     {/* Side Bar */}
        //     <div className='h-screen w-1/4 py-4 flex flex-col bg-white'>
        //         <h1 className='pl-2 text-xl font-bold'>Account</h1>

        //         {/* Profile photo */}
        //         <div className='pl-2 flex flex-col gap-3'>
        //             <div className='h-16 w-16 pt-3 rounded-full'>
        //                 <img src={data.avatar} alt=""
        //                     className='h-full w-full rounded-full object-cover' />
        //             </div>

        //             <h1 className='text-lg font-medium'> {data.name} </h1>
        //         </div>

        //         <div className='my-2 w-full border border-gray-400'> </div>

        //         <div className='pl-2 flex flex-col gap-2'>
        //             {/* Personal detail */}
        //             <p onClick={personal} className='py-1 font-medium hover:bg-gray-100'>Personal detail</p>

        //             {/* Create a new Admin */}
        //             <p onClick={createAdmin} className='py-1 font-medium hover:bg-gray-100'>Create Admin</p>

        //             {/* Logout */}
        //             <p onClick={() => logout()}
        //                 className='py-1 font-medium cursor-pointer hover:bg-gray-100'>
        //                 Logout
        //             </p>
        //         </div>

        //     </div>

        //     {/* Show information */}
        //     <div className='h-screen w-2/3 flex justify-center py-4 px-4 bg-white'>
        //         {/* isPersnal - Personal detail */}
        //         {
        //             isPersnal
        //                 ? <div className='w-full h-fit flex flex-col gap-2'>
        //                     <h1 className='text-lg font-bold mb-2 '>Personal detail</h1>

        //                     <div className='w-full px-3 flex flex-col gap-2'>
        //                         <p> <label className='font-medium'>Name:</label> {data.name}</p>
        //                         <p> <label className='font-medium'>Email:</label> {data.email}</p>
        //                     </div>
        //                 </div>
        //                 : <div className='hidden'></div>
        //         }

        //         {/* Create a new Admin */}
        //         {
        //             isCreateAdmin
        //                 ?
        //                 <form onSubmit={resiterHandler}
        //                     className='absolute h-fit w-full px-7 py-4 flex flex-col gap-3 rounded-xl bg-white drop-shadow-2xl md:w-1/2'>
        //                     <h1 className='text-2xl my-2 font-bold text-blue-950'>Admin Resiter</h1>

        //                     <input type="text" placeholder='Enter name' name="name"
        //                         onChange={resisterInfo}
        //                         value={resisterInput.name}
        //                         className='h-12 w-full px-2 font-medium outline-none text-gray-700 border-2 border-zinc-900 rounded-lg' />

        //                     <input type="email" placeholder='Enter email' name="email"
        //                         onChange={resisterInfo}
        //                         value={resisterInput.email}
        //                         className='h-12 w-full px-2 font-medium outline-none text-gray-700 border-2 border-zinc-900 rounded-lg' />

        //                     <input type="password" placeholder='Enter password' name="password"
        //                         onChange={resisterInfo}
        //                         value={resisterInput.password}
        //                         className='h-12 w-full px-2 font-medium outline-none text-gray-700 border-2 border-zinc-900 rounded-lg' />

        //                     <button className='h-12 w-full text-white text-lg font-bold rounded-lg bg-blue-950 active:scale-95'>
        //                         Resister
        //                     </button>
        //                 </form>
        //                 :
        //                 <div className="hidden"></div>
        //         }
        //     </div>
        // </div>

<div className="min-h-screen w-full bg-linear-to-br from-green-50 via-white to-emerald-100 p-4 md:p-8">

    <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 md:flex-row">

        {/* Sidebar */}
        <aside className="h-fit w-full rounded-2xl border border-green-100 bg-white p-5 shadow-sm md:min-h-\[550px\] md:w-64 md:shrink-0">

            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-2xl">
                    🌱
                </div>
                <div>
                    <h1 className="text-xl font-bold text-green-800">
                        Admin Panel
                    </h1>
                    <p className="text-xs text-gray-500">
                        Manage your account
                    </p>
                </div>
            </div>

            {/* Profile */}
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 p-3">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-green-200 bg-green-100">
                    <img
                        src={data.avatar}
                        alt="Admin profile"
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="min-w-0">
                    <h2 className="truncate font-semibold text-gray-800">
                        {data.name}
                    </h2>
                    <p className="text-sm text-green-700">Administrator</p>
                </div>
            </div>

            <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Account Settings
            </p>

            <div className="flex flex-col gap-2">

                <button
                    onClick={personal}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium transition ${
                        isPersnal
                            ? "bg-green-700 text-white shadow-sm"
                            : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                    }`}
                >
                    <span>👤</span>
                    Personal Details
                </button>

                <button
                    onClick={createAdmin}
                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium transition ${
                        isCreateAdmin
                            ? "bg-green-700 text-white shadow-sm"
                            : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                    }`}
                >
                    <span>➕</span>
                    Create Admin
                </button>

                <div className="my-2 border-t border-gray-100"></div>

                <button
                    onClick={() => logout()}
                    className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium text-red-600 transition hover:bg-red-50"
                >
                    <span>↪</span>
                    Logout
                </button>

            </div>
        </aside>

        {/* Main Content */}
        <main className="min-h-\[400px\] min-w-0 flex-1 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-8">

            {/* Personal Details */}
            {isPersnal && (
                <div className="flex flex-col gap-6">

                    <div className="border-b border-gray-100 pb-5">
                        <h1 className="text-2xl font-bold text-green-800">
                            Personal Details
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            View your administrator account information.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-green-100 bg-green-50">
                            <img
                                src={data.avatar}
                                alt="Admin profile"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="min-w-0">
                            <h2 className="wrap-break-word text-xl font-bold text-gray-800">
                                {data.name}
                            </h2>
                            <p className="text-sm text-green-700">
                                Administrator Account
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                        <div className="rounded-xl border border-green-100 bg-green-50/70 p-5">
                            <p className="mb-2 text-sm font-medium text-gray-500">
                                Full Name
                            </p>
                            <p className="wrap-break-word text-lg font-semibold text-gray-800">
                                {data.name}
                            </p>
                        </div>

                        <div className="rounded-xl border border-green-100 bg-green-50/70 p-5">
                            <p className="mb-2 text-sm font-medium text-gray-500">
                                Email Address
                            </p>
                            <p className="wrap-break-word text-lg font-semibold text-gray-800">
                                {data.email}
                            </p>
                        </div>

                    </div>
                </div>
            )}

            {/* Create Admin */}
            {isCreateAdmin && (
                <div className="mx-auto w-full max-w-lg">

                    <div className="mb-6 border-b border-gray-100 pb-5">
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                            👨‍💼
                        </div>

                        <h1 className="text-2xl font-bold text-green-800">
                            Create New Admin
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Enter the details to register a new administrator.
                        </p>
                    </div>

                    <form
                        onSubmit={resiterHandler}
                        className="flex flex-col gap-5"
                    >

                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter admin name"
                                name="name"
                                onChange={resisterInfo}
                                value={resisterInput.name}
                                required
                                className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="Enter email address"
                                name="email"
                                onChange={resisterInfo}
                                value={resisterInput.email}
                                required
                                className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                        </div>

                        <div>
                            <label className="mb-1.5 block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Create a strong password"
                                name="password"
                                onChange={resisterInfo}
                                value={resisterInput.password}
                                required
                                minLength={8}
                                className="h-12 w-full rounded-lg border border-gray-200 bg-gray-50 px-4 text-gray-700 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            />
                            <p className="mt-1.5 text-xs text-gray-400">
                                Use at least 8 characters.
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 h-12 w-full rounded-lg bg-green-700 font-semibold text-white shadow-md transition hover:bg-green-800 active:scale-[0.98]"
                        >
                            + Create Admin
                        </button>

                    </form>
                </div>
            )}

        </main>
    </div>
</div>
    )
}

export default Ad_profile