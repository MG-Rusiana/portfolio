import { Nav } from "./components/nav"
import { About } from "./screens/about"
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
      <Contact />
    </div>
  )
}

export default App
