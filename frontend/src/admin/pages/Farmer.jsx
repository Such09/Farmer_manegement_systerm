import { useLocation } from "react-router-dom"

const Farmer = () => {
  const location = useLocation();

  const farmerData = location.state

  return (
    <div className='h-screen w-full flex justify-center bg-zinc-100'>
      <div className='w-2/3 flex py-4 px-6 flex-col gap-3 bg-white'>
        <h1 className='text-xl font-medium'>Farmers</h1>

        {
          farmerData.map((farm) => (
            <div key={farm._id} className='w-2/3 py-4 px-2 felx flex-col gap-2 border rounded-xl bg-amber-50'>
              <p>ID: { farm._id }</p>
              <p>Name: { farm.name }</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Farmer