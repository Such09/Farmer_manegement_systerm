import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-linear-to-t from-blue-400 to-white relative'>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdWDhTbD2xiixSYow_-X69hi4wcClq34KuufefVT3Kl2k6lvPQI2WWAhnx&s=10" alt=""
      className='h-full w-full object-cover' /> */}

      {/* constct form */}
      <form className='absolute h-fit w-1/2 py-5 px-6 flex flex-col justify-center gap-4 items-center bg-white/40 backdrop-blur-lg rounded-xl shadow-2xl'>
        <h1 className='text-2xl font-bold text-amber-900'>Contact Us</h1>

        <input type="text" placeholder='Enter name'
          className='h-12 w-full px-2.5 text-lg font-medium border-2 border-amber-100 outline-none rounded-lg' />

        <input type="email" placeholder='Enter email'
          className='h-12 w-full px-2.5 text-lg font-medium border-2 border-amber-100 outline-none rounded-lg' />

        <input type="text" placeholder='Enter message'
          className='h-12 w-full px-2.5 text-lg font-medium border-2 border-amber-100 outline-none rounded-lg' />

        <button className='h-12 w-2/3 text-lg font-medium rounded-lg text-white bg-blue-500 active:scale-95'>
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact