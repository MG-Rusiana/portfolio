import { Nav } from "./components/nav"
import { About } from "./screens/about"
import { Certificates } from "./screens/certs/certs"
import { Contact } from "./screens/contact"
import { Home } from "./screens/home"
import { Projects } from "./screens/projects"



function App() {

  return (
    <div className="">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  )
}

export default App
