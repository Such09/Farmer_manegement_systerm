import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'
import logo_2 from '../accets/logo_2.png'

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className='h-fit py-4 w-full bg-cyan-100 flex flex-col md:flex-row'>
        {/* Logo */}
        <div className='h-14 w-full flex justify-center items-center'>
          <img src={logo_2} alt=""
            className='h-12 w-fit px-1 object-cover' />
        </div>
        <hr />

        <div className='w-full flex flex-col items-center gap-4 md:gap-7 md:items-start md:flex-row'>
          <div className='py-2 flex flex-col gap-2'>
            <h1 className='font-bold'>Useful Links</h1>
             
            <Link to={`https://agmarknet.gov.in/home`}>Agmarknet (Mandi Rates)</Link>
            <Link to={`https://mausam.imd.gov.in/`} >India Meteorological Department</Link>
            <Link to={`https://enam.gov.in/`} >National Agriculture Market</Link>
            <Link to={`https://pmfby.gov.in/`} >Pradhan Mantri Fasal Bima Yojana</Link>
            <Link to={`https://pmkisan.gov.in/`} >PM KISAN SAMMAN NIDHI</Link>
            <Link to={`https://agristack.gov.in/#/`} >Agri Stack</Link>
            <Link to={`https://soilhealth.dac.gov.in/home`} >Soil Health Card</Link>
          </div>

          <div className="hidden md:flex h-72 border-gray-400 border"></div>

          <div className='w-60 flex flex-col gap-2'>
            <h1 className="font-bold">Contact with us</h1>
            <div className='flex gap-2'>
              <FaYoutube />
              <Link to={`https://www.instagram.com/x_sachya_____09/?hl=en`}><FaInstagram /></Link>
              <FaXTwitter />
              <FaFacebook />
            </div>
          </div>
        </div>
      </div>

      <div className="h-28 py-7 w-full flex justify-center items-center bg-cyan-950">
        <p className="text-white ">© 2025 – Copyright AgriConnect, Powered by all farmers.</p>
      </div>
    </div>
  )
}

export default Footer