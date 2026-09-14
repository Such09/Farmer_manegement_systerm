import { useLocation } from "react-router-dom"

const Search = () => {
    const location = useLocation()

    const fertilizers = location.state    

    return (
        <div className='min-h-screen w-full py-7 px-7 flex flex-wrap gap-2.5 bg-zinc-100'>
            {
                fertilizers.fertilizerInfo.map((item) => (
                    <div key={item._id} className='h-fit py-4 px-3 w-1/4 bg-white flex flex-col gap-2'>
                        <img src={item.image} alt=""
                            className='w-full h-40 object-contain' />

                        <h1 className="font-medium"> { item.name } </h1>
                        <h1> { item.description } </h1>
                    </div>
                ))
            }
        </div>
    )
}

export default Search