import Footer from "./component/Footer.jsx"
import Hero_Section from "./component/Hero_Section.jsx"
import Navbar from "./component/Navbar.jsx"

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <Hero_Section />
        <Footer />
    </div>
  )
}

export default App