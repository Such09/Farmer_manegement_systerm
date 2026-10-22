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

  const formHandler = async(e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:3000/farmer/contact`, inputs)
      console.log("res: ", res);
      
    } catch (error) {
      console.log("your query is not resive", error.message);
    }finally{
      setInputs({ email: "", title: "", message: "" });
    }  
  }

  return (
    <div className='h-screen w-full flex items-center justify-center bg-gray-50'>
      {/* constct form */}
      <form onSubmit={formHandler}
      className='absolute h-fit w-1/2 py-5 px-6 flex flex-col justify-center gap-4 items-center bg-white rounded-xl shadow-lg'>
        <h1 className='text-2xl font-bold text-amber-900'>Contact Us</h1>

        <input type="email" placeholder='Enter email' name="email"
          onChange={contactInfo}
          value={inputs.email}
          className='h-12 w-full px-2.5 text-lg font-medium border-2 border-mist-600 outline-none rounded-lg' />

        <input type="text" placeholder='Enter title' name="title"
          onChange={contactInfo}
          value={inputs.title}
          className='h-12 w-full px-2.5 text-lg font-medium border-2 border-mist-600 outline-none rounded-lg' />

        <input type="text" placeholder='Enter message' name="message"
          onChange={contactInfo}
          value={inputs.message}
          className='h-12 w-full px-2.5 text-lg font-medium border-2 border-mist-600 outline-none rounded-lg' />

        <button className='h-12 w-2/3 text-lg font-medium rounded-lg text-white bg-blue-500 active:scale-95'>
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact