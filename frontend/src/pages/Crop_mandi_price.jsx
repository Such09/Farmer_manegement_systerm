import axios from 'axios';
import { Search, Sprout } from "lucide-react";
import { useState } from 'react'

const Crop_mandi_price = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const [isFetch, setIsFetch] = useState(false);

    const formHandler = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.get(`http://localhost:3000/farmer/crop_price`, { params: { commodity: input } })
            setData(response.data.data)
            setIsFetch(true)
            // console.log("res: ", response.data.data);

        } catch (error) {
            console.log("search market price error: ", error);
        } finally {
            setInput("")
        }
    }

    return (
        <div className="min-h-screen w-full bg-linear-to-b from-green-50/70 to-stone-100 px-4 py-12 sm:px-8 lg:py-16">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center">

                {/* Heading */}
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl shadow-sm">
                        🌾
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Market <span className="text-green-700">Price</span>
                    </h1>

                    <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                        Find the latest mandi prices for your crops and make smarter selling decisions.
                    </p>
                </div>

                {/* Search Panel */}
                <div className="w-full max-w-3xl rounded-2xl border border-green-100 bg-white p-4 shadow-lg shadow-green-900/5 sm:p-6">
                    <form onSubmit={formHandler} className="flex flex-col gap-3 sm:flex-row">
                        <div className="flex h-12 flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100">
                            <Search size={20} className="shrink-0 text-green-700" />

                            <input
                                type="search"
                                placeholder="Search crop (e.g. Wheat, Cotton)"
                                name="crop"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="flex h-12 items-center justify-center gap-2 rounded-xl bg-green-700 px-6 font-semibold text-white shadow-sm transition hover:bg-green-800 active:scale-95"
                        >
                            <Search size={18} />
                            Search Prices
                        </button>
                    </form>

                    <p className="mt-3 text-xs text-gray-500">
                        <Sprout size={14} className="mr-1 inline text-green-700" />
                        Try searching Wheat, Cotton, Soybean or Onion.
                    </p>
                </div>

                {/* Results */}
                {isFetch && (
                    <div className="mt-8 w-full flex flex-col items-center">
                        {data.length > 0 ? (
                            <>
                                <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                                    <h2 className="text-xl font-bold text-gray-900">
                                        Market Results
                                    </h2>

                                    {/* <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
                                        {data.length} results
                                    </span> */}
                                </div>

                                <div className="w-2/3 md:w-1/3">
                                    {data.map((item, index) => (
                                        <div key={`${item.commodity}-${item.arrival_date}-${index}`}
                                            className="group rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-2xl">
                                                    🌱
                                                </div>

                                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                                    {item.grade || "Market Grade"}
                                                </span>
                                            </div>

                                            <h3 className="mt-4 text-lg font-bold text-gray-900">
                                                {item.commodity}
                                            </h3>

                                            <p className="mt-1 text-sm text-gray-500">
                                                Modal Market Price
                                            </p>

                                            <div className="mt-3 flex items-baseline gap-2">
                                                <span className="text-3xl font-extrabold tracking-tight text-green-700">
                                                    ₹{item.modal_price}
                                                </span>
                                                <span className="text-xs font-medium text-gray-500">
                                                    / quintal
                                                </span>
                                            </div>

                                            <div className="my-4 h-px bg-gray-100" />

                                            <div className="space-y-3 text-sm">
                                                <div className="flex items-center justify-between gap-3">
                                                    <span className="text-gray-500">Minimum Price</span>
                                                    <span className="font-semibold text-gray-800">
                                                        ₹{item.min_price}
                                                    </span>
                                                </div>

                                                <div className="flex items-center justify-between gap-3">
                                                    <span className="text-gray-500">Maximum Price</span>
                                                    <span className="font-semibold text-gray-800">
                                                        ₹{item.max_price}
                                                    </span>
                                                </div>

                                                {item.arrival_date && (
                                                    <div className="flex items-center justify-between gap-3">
                                                        <span className="text-gray-500">Arrival Date</span>
                                                        <span className="font-medium text-gray-700">
                                                            {item.arrival_date}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-xs text-green-800">
                                                Prices are per quintal.
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-10 text-center">
                                <div className="text-4xl">🔎</div>
                                <h3 className="mt-3 text-lg font-bold text-gray-800">
                                    No market prices found
                                </h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    Try another crop name, such as Wheat or Cotton.
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Crop_mandi_price