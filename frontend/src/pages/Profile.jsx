import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isPersnal, setIsPersnal] = useState(false);
  const [isCrop, setIsCrop] = useState(false);
  const [cropInfo, setCropInfo] = useState();

  // profile
  const profile = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/farmer/profile`, { withCredentials: true })
      setData(res.data.user);
      // console.log(res.data);
    } catch (error) {
      console.log("profile error: ", error.status)
      if (error.status == 401)
        navigate(`/`)

    }
  }

  // Crop information
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/farmer/crops`, { withCredentials: true })
      setCropInfo(res.data.data);

    } catch (error) {
      console.log("profile error: ", error.status)
      if (error.status == 401)
        navigate(`/`)

    }
  }

  useEffect(() => {
    profile();
    getData();
  }, [])

  // Logout a User
  const logout = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/farmer/logout`, { withCredentials: true });

      // console.log('logout res: ', response);

      if (response.status == 200)
        navigate(`/`);

    } catch (error) {
      console.log("Logout error is: ", error);
    }
  }

  // personal info
  const personal = () => {
    setIsPersnal(!isPersnal)
    setIsCrop(false)
  }

  // crop info
  const crop = () => {
    setIsCrop(!isCrop)
    setIsPersnal(false)
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-green-50 via-white to-emerald-50 p-4 md:p-8">

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 md:flex-row">

        {/* Sidebar */}
        <aside className="h-fit w-full shrink-0 rounded-2xl border border-green-100 bg-white p-5 shadow-sm md:min-h-\[550px\] md:w-64">

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-xl">
              🌱
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-800">My Account</h1>
              <p className="text-xs text-gray-500">Manage your profile</p>
            </div>
          </div>

          {/* Profile */}
          <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 p-3">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-green-200 bg-green-100">
              <img
                src={data.avatar}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <h2 className="truncate font-semibold text-gray-800">
                {data.name}
              </h2>
              <p className="text-sm text-gray-500">Farmer Account</p>
            </div>
          </div>

          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Menu
          </p>

          <div className="flex flex-col gap-2">

            <button
              onClick={personal}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium transition ${isPersnal
                  ? "bg-green-700 text-white shadow-sm"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                }`}
            >
              <span>👤</span>
              Personal Details
            </button>

            <button
              onClick={crop}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left font-medium transition ${isCrop
                  ? "bg-green-700 text-white shadow-sm"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-800"
                }`}
            >
              <span>🌾</span>
              My Crops
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
        <main className="min-h-\[400px\] min-w-0 flex-1 rounded-2xl border border-green-100 bg-white p-5 shadow-sm sm:p-7">

          {/* Personal Details */}
          {isPersnal && (
            <div className="flex flex-col gap-6">

              <div className="border-b border-gray-100 pb-5">
                <h1 className="text-2xl font-bold text-gray-800">
                  Personal Details
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  View your account information.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-green-100 bg-green-50">
                  <img
                    src={data.avatar}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {data.name}
                  </h2>
                  <p className="text-sm text-gray-500">Registered Farmer</p>
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

          {/* Crop Information */}
          {isCrop && (
            <div className="flex min-w-0 flex-col gap-5">

              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-5">
                <div>
                  <h1 className="text-2xl font-bold text-green-800">
                    Your Crop Details
                  </h1>
                  <p className="mt-1 text-sm text-gray-500">
                    Information about your crops and harvest.
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                  Total Crops: {cropInfo.length}
                </span>
              </div>

              <div className="w-full overflow-x-auto rounded-xl border border-green-100">
                <table className="w-full min-w-[800 px] border-collapse text-left">
                  <thead>
                    <tr className="bg-green-700 text-white">
                      <th className="px-4 py-4 text-sm font-semibold">Name</th>
                      <th className="px-4 py-4 text-sm font-semibold">Variety</th>
                      <th className="px-4 py-4 text-sm font-semibold">Season</th>
                      <th className="px-4 py-4 text-sm font-semibold">Sowing</th>
                      <th className="px-4 py-4 text-sm font-semibold">Fertilizer</th>
                      <th className="px-4 py-4 text-sm font-semibold">Harvest</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cropInfo.length > 0 ? (
                      cropInfo.map((item) => (
                        <tr
                          key={item._id}
                          className="border-b border-gray-100 transition hover:bg-green-50"
                        >
                          <td className="px-4 py-4 font-semibold text-gray-800">
                            {item.name}
                          </td>
                          <td className="px-4 py-4 text-gray-600">
                            {item.veriety}
                          </td>
                          <td className="px-4 py-4 text-gray-600">
                            {item.session}
                          </td>
                          <td className="px-4 py-4 text-gray-600">
                            {item.showing}
                          </td>
                          <td className="px-4 py-4 text-gray-600">
                            {item.fertilizer}
                          </td>
                          <td className="px-4 py-4 text-gray-600">
                            {item.harvest}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-4 py-12 text-center text-gray-500"
                        >
                          <div className="mb-2 text-4xl">🌱</div>
                          <p className="font-semibold text-gray-700">
                            No crops found
                          </p>
                          <p className="mt-1 text-sm">
                            Your crop details will appear here.
                          </p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <p className="text-xs text-gray-400">
                On smaller screens, scroll horizontally to view all crop details.
              </p>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}

export default Profile