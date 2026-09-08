import React from 'react'

const Profile = () => {
  return (
    <div className='min-h-screen w-full flex justify-center gap-5 bg-zinc-100'>
      {/* Side Bar */}
      <div className='h-screen w-1/4 py-4 flex flex-col bg-white'>
        <h1 className='pl-2 text-xl font-bold'>Account</h1>

        {/* Profile photo */}
        <div className='pl-2 flex flex-col gap-3'>
          <div className='h-16 w-16 pt-3 rounded-full'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqeBSDf38TR-AtFT6xRtdAtDCG5wHaay0I1uvE9QuaQ&s=10" alt=""
              className='h-full w-full rounded-full object-cover' />
          </div>

          <h1 className='text-lg font-medium'>Sachin Gadhave</h1>
        </div>

        <div className='my-2 w-full border border-gray-400'> </div>

        <div className='pl-2 flex flex-col gap-2'>
          <a href="#" className='py-1 font-medium hover:bg-gray-100'>Persnal details</a>
          <a href="#" className='py-1 font-medium hover:bg-gray-100'>Crop's</a>
          <a href="#" className='py-1 font-medium hover:bg-gray-100'>Logout</a>
        </div>

      </div>

      {/* Show information */}
      <div className='h-screen w-2/3 flex flex-col bg-white'>

      </div>
    </div>
  )
}

export default Profile