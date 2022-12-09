import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="home" id="top">
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home