import { useState } from 'react';
import logo from '../accets/logo_2.png';
import axios from 'axios';

const ScanCrop = () => {
    const [result, setResult] = useState("");
    const [crop, setCrop] = useState(null);
    const [isLoding, setIsLoding] = useState(false);

    const cropFormHandler = async (e) => {
        e.preventDefault();
        try {
            setIsLoding(true)

            const formData = new FormData()
            formData.append("crop", crop)

            const res = await axios.post(`http://localhost:3000/farmer/scan`, formData)
            // console.log("res: ", res);
            
            setResult(res.data.result)

        } catch (error) {
            console.log("crop photo sending error: ", error.message);
        } finally {
            setIsLoding(false)
        }
    }

    return (
        <div className="min-h-screen w-full bg-linewar-to-b from-green-50 to-zinc-100 px-4 py-10 sm:px-6 sm:py-14">

            <div className="mx-auto w-full max-w-3xl">

                {/* Main Scanner Card */}
                <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-lg shadow-green-900/5 sm:p-9">

                    {/* Logo */}
                    <div className="flex flex-col items-center text-center">
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50 p-3">
                            <img
                                src={logo}
                                alt="Crop Health Scanner"
                                className="h-full w-full object-contain"
                            />
                        </div>

                        <h1 className="mt-5 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                            Crop Health <span className="text-green-700">Scanner</span>
                        </h1>

                        <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
                            Upload a clear photo of your crop leaf to identify possible diseases and health problems.
                        </p>
                    </div>

                    {/* Upload Form */}
                    <form
                        onSubmit={cropFormHandler}
                        className="mt-8 flex flex-col gap-5"
                    >
                        <label className="text-sm font-bold text-gray-800">
                            Upload Crop Photo
                        </label>

                        <div className="rounded-2xl border-2 border-dashed border-green-200 bg-green-50/50 p-6 text-center transition hover:border-green-400 hover:bg-green-50 sm:p-8">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-3xl">
                                🌿
                            </div>

                            <p className="mt-4 font-semibold text-gray-800">
                                Choose your crop leaf image
                            </p>

                            <p className="mt-2 text-xs text-gray-500">
                                Use a clear, well-lit photo for better analysis.
                            </p>

                            <input
                                type="file"
                                name="crop"
                                accept="image/*"
                                onChange={(e) => setCrop(e.target.files[0])}
                                className="mx-auto mt-5 block w-full max-w-sm cursor-pointer rounded-lg border border-gray-200 bg-white text-sm text-gray-600 file:mr-3 file:cursor-pointer file:border-0 file:bg-green-700 file:px-4 file:py-3 file:font-semibold file:text-white hover:file:bg-green-800"
                            />
                        </div>

                        {/* Photo Tips */}
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            <div className="flex items-center gap-2 rounded-xl bg-gray-50 p-3 text-sm text-gray-600">
                                <span className="font-bold text-green-700">✓</span>
                                Clear leaf photo
                            </div>

                            <div className="flex items-center gap-2 rounded-xl bg-gray-50 p-3 text-sm text-gray-600">
                                <span className="font-bold text-green-700">✓</span>
                                Avoid blurry images
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoding}
                            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-green-700 px-6 font-bold text-white shadow-sm transition hover:bg-green-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isLoding ? "Scanning Image..." : "🌱 Scan Crop"}
                        </button>
                    </form>

                    {/* Loading Overlay */}
                    {isLoding && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/30 px-4 backdrop-blur-sm">
                            <div className="w-full max-w-xs rounded-2xl bg-white p-7 text-center shadow-xl">
                                <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-green-100 border-t-green-700" />
                                <h2 className="mt-4 font-bold text-gray-900">
                                    Analyzing Your Crop
                                </h2>
                                <p className="mt-2 text-sm text-gray-500">
                                    Please wait while we process your image.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Analysis Result */}
                {result && (
                    <div className="mt-6 rounded-2xl border border-green-100 bg-white p-6 shadow-md shadow-green-900/5 sm:p-8">
                        <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-xl">
                                🌱
                            </div>

                            <div>
                                <h2 className="text-xl font-bold text-gray-900">
                                    Scan Results
                                </h2>
                                <p className="mt-1 text-sm text-gray-500">
                                    Crop health analysis
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 space-y-3 text-sm leading-7 text-gray-700 sm:text-base">
                            {result
                                .split("\n")
                                .filter((line) => line.trim() !== "")
                                .map((line, index) => (
                                    <p
                                        key={index}
                                        className="rounded-lg bg-gray-50 px-4 py-3"
                                    >
                                        {line.replace(/\*\*/g, "")}
                                    </p>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ScanCrop