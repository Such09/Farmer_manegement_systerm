import hero from '../accets/hero.png'

const Hero_Section = () => {
  return (
    <div className='h-96 w-full'>
        <img src={hero} alt="" 
            className='h-full w-full object-cover object-top'/>
    </div>
  )
}

export default Hero_Section