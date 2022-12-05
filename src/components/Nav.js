import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/">About</Link>
      <Link to="/">Skills</Link>
      <Link to="/">Experience</Link>
      <Link to="/">Projects</Link>
      <Link to="/">Contact</Link>
    </nav>
  )
}

export default Nav