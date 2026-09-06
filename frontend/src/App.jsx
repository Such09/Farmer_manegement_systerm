import { Outlet } from "react-router-dom"
import Body from "./component/Body.jsx"
import Footer from "./component/Footer.jsx"
import Navbar from "./component/Navbar.jsx"

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <Outlet />
        {/* <Body /> */}
        <Footer />
    </div>
  )
}

export default App