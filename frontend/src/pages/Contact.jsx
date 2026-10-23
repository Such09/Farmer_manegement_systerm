import { useState } from "react"
import axios from "axios"

const Contact = () => {
  const [inputs, setInputs] = useState({ email: "", title: "", message: "" });

  const contactInfo = (e) => {
    const { name, value } = e.target

    setInputs((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const formHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:3000/farmer/contact`, inputs)
      console.log("res: ", res);

    } catch (error) {
      console.log("your query is not resive", error.message);
    } finally {
      setInputs({ email: "", title: "", message: "" });
    }
  }

  return (
    <div className="min-h-screen w-full bg-green-50/60 px-4 py-10 flex items-center justify-center">

      <form onSubmit={formHandler}
        className="w-full max-w-5xl overflow-hidden rounded-2xl border border-green-100 bg-white shadow-lg md:flex">

        {/* Left Section */}
        <div className="flex flex-col justify-between gap-8 bg-green-800 p-7 text-white sm:p-10 md:w-2/5">

          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-3xl">
              ✉
            </div>

            <h1 className="text-3xl font-bold sm:text-4xl">
              Contact Us
            </h1>

            <p className="mt-4 text-sm leading-7 text-green-100">
              Have a question or suggestion? Send us a message.
              We would love to hear from you.
            </p>
          </div>

          <div className="space-y-5 text-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
                📧
              </span>
              <div>
                <p className="font-semibold">Email Us</p>
                <p className="mt-1 text-green-100">Send us your queries</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-xl">
                💬
              </span>
              <div>
                <p className="font-semibold">We're Here to Help</p>
                <p className="mt-1 text-green-100">Share your feedback</p>
              </div>
            </div>
          </div>

          <p className="text-xs text-green-200">
            We appreciate your feedback!
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-5 p-6 sm:p-10 md:w-3/5">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Send a Message
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Fill in the details below.
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">
              Email Address
            </label>
            <input type="email" placeholder="Enter your email" name="email"
              onChange={contactInfo}
              value={inputs.email}
              required
              className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm outline-none 
              transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"/>
          </div>

          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">
              Subject
            </label>
            <input type="text" placeholder="What is this about?" name="title"
              onChange={contactInfo}
              value={inputs.title}
              required
              className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 text-sm outline-none
              transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"/>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-slate-700">
              Your Message
            </label>
            <textarea placeholder="Write your message here..." name="message"
              onChange={contactInfo}
              value={inputs.message}
              required
              rows={4}
              className="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none
              transition focus:border-green-600 focus:bg-white focus:ring-2 focus:ring-green-100"/>
          </div>

          {/* Button */}
          <button type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-green-700 font-semibold text-white shadow-sm transition hover:bg-green-800 active:scale-[0.98]">
            Send Message <span>➜</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact