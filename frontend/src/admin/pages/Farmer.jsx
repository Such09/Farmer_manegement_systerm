import { useLocation } from "react-router-dom"

const Farmer = () => {
  const location = useLocation();

  const farmerData = location.state

  return (
    // <div className='h-screen w-full flex justify-center bg-zinc-100'>
    //   <div className='w-2/3 flex py-4 px-6 flex-col gap-3 bg-white'>
    //     <h1 className='text-xl font-medium'>Farmers</h1>

    //     {
    //       farmerData.map((farm) => (
    //         <div key={farm._id} className='w-2/3 py-4 px-2 felx flex-col gap-2 border rounded-xl bg-amber-50'>
    //           <p>ID: { farm._id }</p>
    //           <p>Name: { farm.name }</p>
    //         </div>
    //       ))
    //     }
    //   </div>
    // </div>

    <div className="min-h-screen w-full bg-linear-to-br from-green-50 via-white to-emerald-100 px-4 py-10">

      <div className="mx-auto w-full max-w-4xl rounded-2xl border border-green-100 bg-white p-6 shadow-lg sm:p-8">

        {/* Header */}
        <div className="mb-7 flex items-center gap-4 border-b border-gray-100 pb-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-3xl">
            👨‍🌾
          </div>

          <div>
            <h1 className="text-2xl font-bold text-green-800">
              Farmers
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              View all registered farmers
            </p>
          </div>

          <div className="ml-auto rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
            Total: {farmerData.length}
          </div>
        </div>

        {/* Farmers List */}
        <div className="flex flex-col gap-4">

          {farmerData.length > 0 ? (
            farmerData.map((farm, index) => (
              <div
                key={farm._id}
                className="group flex flex-col gap-4 rounded-xl border border-green-100 bg-green-50/50 p-4 transition duration-200 hover:border-green-300 hover:bg-green-50 hover:shadow-md sm:flex-row sm:items-center"
              >
                {/* Avatar */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white shadow-sm">
                  {farm.name?.charAt(0)?.toUpperCase() || "F"}
                </div>

                {/* Farmer Details */}
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Farmer {index + 1}
                  </p>

                  <h2 className="mt-1 break-words text-lg font-semibold text-gray-800">
                    {farm.name}
                  </h2>

                  <p className="mt-1 break-all text-sm text-gray-500">
                    ID: {farm._id}
                  </p>
                </div>

                {/* Status */}
                <div className="flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-green-700 ring-1 ring-green-200">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  Registered
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-green-200 bg-green-50/50 px-4 py-12 text-center">
              <span className="text-5xl">👨‍🌾</span>
              <h2 className="mt-4 text-lg font-semibold text-gray-800">
                No Farmers Found
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Registered farmers will appear here.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Farmer