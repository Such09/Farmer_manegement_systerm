import axios from 'axios';
import { useEffect, useState } from 'react';

const Seeds = () => {
  const [seedData, setSeedData] = useState();

  // fetch data
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/farmer/seed`)

      setSeedData(res.data.data)

    } catch (error) {
      console.log("searchin error is: ", error.response);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='min-h-screen w-full py-5 px-7 gap-4 flex flex-wrap bg-zinc-100'>
        {
        !seedData
          ? <div> Loading...</div>
          :
          seedData.map((item) => (
            <div key={item._id} className='h-80 py-4 px-3 w-1/4 bg-white flex flex-col gap-2 overflow-hidden'>
              <img src={item.image} alt=""
                className='w-full h-40 object-contain' />

              <h1 className="font-medium"> {item.name} </h1>
              <h1> {item.description} </h1>
            </div>
          ))
      }
    </div>
  )
}

export default Seeds