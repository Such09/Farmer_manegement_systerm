import axios from 'axios'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useState } from "react";
import {
  MapPin,
  Search,
  Sun,
  Droplets,
  Wind,
  Eye,
  Gauge,
  Clock,
  Sprout,
} from "lucide-react";

const Weather_info = () => {
    const [city, setCity] = useState("");
    const [info, setInfo] = useState(null);
    const [isTrue, setIsTrue] = useState(false);

    const formHandler = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get(`http://localhost:3000/farmer/weather_info`, { params: { city: city } })
            // console.log("res: ", res.data.data);
            setInfo(res.data.data)
            setIsTrue(true)

        } catch (error) {
            console.log("weather error is: ", error);
        } finally {
            setCity("")
        }
    }

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-6xl space-y-6">

                {/* Weather form */}
                <form onSubmit={formHandler}
                    className="relative isolate w-full overflow-hidden rounded-3xl border border-emerald-100 
                        bg-linear-to-br from-white via-amber-50/70 to-emerald-50 px-5 py-7 shadow-xl shadow-green-900/5 sm:px-8 sm:py-9 lg:px-10">

                    {/* Decorative Background */}
                    <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-12 -z-10 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />

                    {/* Header */}
                    <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
                        <div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-green-600 to-emerald-800
                                     text-white shadow-lg shadow-green-800/20">
                                    <TiWeatherPartlySunny className="text-4xl" />
                                </div>

                                <div>
                                    <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                                        Weather <span className="text-emerald-700">Forecast</span>
                                    </h1>
                                    <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold text-emerald-800">
                                        <MapPin size={16} />
                                        Maharashtra, India
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                                Stay updated with local weather conditions and make smarter decisions for your farming activities.
                            </p>
                        </div>

                        <div className="flex w-fit items-center gap-3 rounded-2xl border border-white/80 bg-white/80 
                            px-4 py-3 shadow-md shadow-green-900/5 backdrop-blur-md">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                                <Sun size={27} />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800">Live Weather</p>
                                <p className="mt-1 text-xs text-slate-500">City-wise updates</p>
                            </div>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mt-8 max-w-3xl">
                        <label className="mb-2 block text-sm font-bold text-slate-700">
                            Search your location
                        </label>

                        <div className="flex w-full items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 
                            shadow-lg shadow-green-900/5 transition-all duration-300 focus-within:border-emerald-500
                            focus-within:ring-4 focus-within:ring-emerald-100">
                            <MapPin className="ml-2 shrink-0 text-emerald-700" size={21} />

                            <input type="search" placeholder="Enter city or district"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="h-12 min-w-0 flex-1 bg-transparent px-2 text-sm font-medium text-slate-800 
                                outline-none placeholder:text-slate-400 sm:text-base"/>

                            <button type="submit" 
                                className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-green-700 to-emerald-700 px-4 
                                font-bold text-white shadow-md shadow-green-800/20 transition duration-300 hover:-translate-y-0.5 hover:from-green-800 hover:to-emerald-800
                                 hover:shadow-lg active:scale-95 sm:px-6">
                                <Search size={19} />
                                <span>Search</span>
                            </button>
                        </div>
                    </div>

                    {/* Weather Results */}
                    {isTrue && info?.current && info?.location && (
                        <div className="relative mt-9 overflow-hidden rounded-3xl bg-linear-to-br from-emerald-950 via-green-800
                         to-teal-700 text-white shadow-2xl shadow-emerald-950/20">

                            {/* Background Effects */}
                            <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-300/15 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-teal-300/15 blur-3xl" />

                            <div className="relative p-5 sm:p-8 lg:p-9">

                                {/* Result Header */}
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div>
                                        <div className="mb-3 flex items-center gap-2">
                                            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-lime-300" />
                                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                                                Current Weather
                                            </p>
                                        </div>

                                        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                                            {info.location.name}
                                        </h2>

                                        <p className="mt-2 flex items-center gap-1.5 text-sm text-emerald-100">
                                            <MapPin size={16} />
                                            {info.location.region}, {info.location.country}
                                        </p>
                                    </div>

                                    <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-emerald-50 backdrop-blur-md">
                                        <Clock size={14} className="mr-1.5 inline" />
                                        {info.location.localtime}
                                    </div>
                                </div>

                                {/* Main Temperature */}
                                <div className="mt-8 grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

                                    <div className="rounded-2xl border border-white/10 bg-white/1 p-5 sm:p-7">
                                        <div className="flex items-center justify-between gap-3">
                                            <div>
                                                <p className="text-sm font-medium text-emerald-100">
                                                    Feels like {info.current.feelslike_c}°C
                                                </p>
                                                <p className="mt-3 text-6xl font-black tracking-tighter sm:text-7xl">
                                                    {Math.round(info.current.temp_c)}°
                                                    <span className="text-3xl text-emerald-200">C</span>
                                                </p>
                                            </div>

                                            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 
                                                shadow-inner sm:h-32 sm:w-32">
                                                <img src={`https:${info.current.condition.icon}`}
                                                    alt={info.current.condition.text}
                                                    className="h-20 w-20 object-contain sm:h-28 sm:w-28"/>
                                            </div>
                                        </div>

                                        <div className="mt-6 border-t border-white/15 pt-4">
                                            <p className="text-lg font-bold">
                                                {info.current.condition.text}
                                            </p>
                                            <p className="mt-1 text-sm leading-6 text-emerald-100">
                                                Latest weather conditions for your selected location.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Weather Metrics */}
                                    <div className="grid grid-cols-2 gap-3 sm:gap-4">

                                        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition duration-300 
                                            hover:-translate-y-1 hover:bg-white/1 sm:p-5">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-300/15 text-sky-200">
                                                <Droplets size={22} />
                                            </div>
                                            <p className="mt-4 text-xs font-medium text-emerald-100 sm:text-sm">
                                                Humidity
                                            </p>
                                            <p className="mt-1 text-2xl font-extrabold sm:text-3xl">
                                                {info.current.humidity}%
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition duration-300 
                                            hover:-translate-y-1 hover:bg-white/1 sm:p-5">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/15 text-cyan-200">
                                                <Wind size={22} />
                                            </div>
                                            <p className="mt-4 text-xs font-medium text-emerald-100 sm:text-sm">
                                                Wind Speed
                                            </p>
                                            <p className="mt-1 text-2xl font-extrabold sm:text-3xl">
                                                {info.current.wind_kph}
                                                <span className="ml-1 text-sm font-semibold">km/h</span>
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1
                                            hover:bg-white/1 sm:p-5">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-300/15 text-violet-200">
                                                <Eye size={22} />
                                            </div>
                                            <p className="mt-4 text-xs font-medium text-emerald-100 sm:text-sm">
                                                Visibility
                                            </p>
                                            <p className="mt-1 text-2xl font-extrabold sm:text-3xl">
                                                {info.current.vis_km}
                                                <span className="ml-1 text-sm font-semibold">km</span>
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md transition duration-300 hover:-translate-y-1
                                             hover:bg-white/1 sm:p-5">
                                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300/15 text-amber-200">
                                                <Gauge size={22} />
                                            </div>
                                            <p className="mt-4 text-xs font-medium text-emerald-100 sm:text-sm">
                                                Pressure
                                            </p>
                                            <p className="mt-1 text-2xl font-extrabold sm:text-3xl">
                                                {info.current.pressure_mb}
                                                <span className="ml-1 text-sm font-semibold">hPa</span>
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="mt-6 flex flex-col justify-between gap-2 border-t border-white/15 pt-4 text-xs text-emerald-100 sm:flex-row sm:items-center">
                                    <p className="flex items-center gap-2">
                                        <Sprout size={16} />
                                        Plan your farming activities with confidence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Weather_info