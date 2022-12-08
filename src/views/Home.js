import Banner from '../components/Banner'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div className="home" id="top">
      <Banner />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home