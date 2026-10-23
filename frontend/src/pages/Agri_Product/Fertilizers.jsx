import axios from 'axios';
import { useEffect, useState } from 'react';

const Fertilizers = () => {
  const [fertilizerData, setFertilizerData] = useState();

  // fetch data
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/farmer/fertilizer`)

      setFertilizerData(res.data.data)

    } catch (error) {
      console.log("searchin error is: ", error.response);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="min-h-screen w-full bg-green-50/50 px-5 py-8 sm:px-8">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {
          !fertilizerData ? (
            <div className="col-span-full py-20 text-center font-medium text-green-700">
              Loading fertilizers...
            </div>
          ) : (
            fertilizerData.map((item) => (
              <div key={item._id}
                className="group overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm 
              transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {/* Image */}
                <div className="flex h-48 items-center justify-center bg-green-50 p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-5">

                  <h2 className="line-clamp-1 text-lg font-bold text-slate-800">
                    {item.name}
                  </h2>

                  <p className="line-clamp-3 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <div className="w-full justify-center mt-1 flex items-center gap-2 border-t border-green-100 pt-3 text-sm font-semibold text-green-700">
                    <span>Fertilizer Product</span>
                  </div>

                </div>
              </div>
            ))
          )
        }

      </div>
    </div>

  )
}

export default Fertilizers