import About from "./components/About"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Educations from './components/Educations';
import Projects from "./components/Projects"


function App() {



  return (
    <div className="bg-black">
      <Navbar />
      <Banner />
      <div className=" px-2 md:px-20 ">
        <About />
        <Skills/>
        <Educations/>
        <Projects/>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
