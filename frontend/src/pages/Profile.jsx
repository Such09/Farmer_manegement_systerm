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

      console.log('logout res: ', response);

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
    <div className='min-h-screen w-full flex justify-center gap-5 bg-zinc-100'>
      {/* Side Bar */}
      <div className='h-screen w-1/4 py-4 flex flex-col bg-white'>
        <h1 className='pl-2 text-xl font-bold'>Account</h1>

        {/* Profile photo */}
        <div className='pl-2 flex flex-col gap-3'>
          <div className='h-16 w-16 pt-3 rounded-full'>
            <img src={data.avatar} alt=""
              className='h-full w-full rounded-full object-cover' />
          </div>

          <h1 className='text-lg font-medium'> {data.name} </h1>
        </div>

        <div className='my-2 w-full border border-gray-400'> </div>

        <div className='pl-2 flex flex-col gap-2'>
          <p onClick={personal} className='py-1 font-medium hover:bg-gray-100'>Personal detail</p>
          <p onClick={crop} className='py-1 font-medium hover:bg-gray-100'>Crops</p>

          {/* Logout */}
          <p onClick={() => logout()}
            className='py-1 font-medium cursor-pointer hover:bg-gray-100'>
            Logout
          </p>
        </div>

      </div>

      {/* Show information */}
      <div className='h-screen w-2/3 flex justify-center py-4 px-4 bg-white'>
        {/* isPersnal - Personal detail */}
        {
          isPersnal
            ? <div className='w-full h-fit flex flex-col gap-2'>
              <h1 className='text-lg font-bold mb-2 '>Personal detail</h1>

              <div className='w-full px-3 flex flex-col gap-2'>
                <p> <label className='font-medium'>Name:</label> {data.name}</p>
                <p> <label className='font-medium'>Email:</label> {data.email}</p>
              </div>
            </div>
            : <div className='hidden'></div>
        }

        {/* Crop information */}
        {
          isCrop
            ? <div className='h-screen w-full flex flex-col items-center gap-3 py-4 px-4 bg-white'>
              <h1 className='text-2xl font-medium'>Your Crop Details</h1>

              <table className='h-fit py-4 w-2/3 border '>
                <thead className='text-center h-12 bg-blue-200'>
                  <tr>
                    <th className='border'>Name</th>
                    <th className='border'>Veriety</th>
                    <th className='border'>Session</th>
                    <th className='border'>Showing</th>
                    <th className='border'>Fertilizer</th>
                    <th className='border'>Harvest</th>
                  </tr>
                </thead>

                {

                  cropInfo.map((item) => (
                    <tbody key={item._id}
                      className='text-center border h-10 py-3 px-1'>
                      <tr>
                        <td className='border'> {item.name} </td>
                        <td className='border'> {item.veriety} </td>
                        <td className='border'> {item.session} </td>
                        <td className='border'> {item.showing} </td>
                        <td className='border'> {item.fertilizer} </td>
                        <td className='border'> {item.harvest} </td>
                      </tr>
                    </tbody>
                  ))

                }
              </table>
            </div>
            : <div className='hidden'></div>
        }
      </div>
    </div>
  )
}

export default Profile