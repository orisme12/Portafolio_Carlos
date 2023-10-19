import {About} from "../Components/About"
import Contact from "../Components/Contact"
import MyWork from "../Components/MyWork"
import {Navbar} from "../Components/Navbar"
import Perfil from "../Components/Perfil"
import Skill from "../Components/Skill"
export  function HomePage() {
  return (
    <>
      <div>
          <Navbar/>
          <Perfil/>
          <About id="about" title="About Me" />
          
          <MyWork id="work" title="My Work" />
          <Contact id="contact" title="Get in touch" />
      </div>
    
    </>
  )
}
