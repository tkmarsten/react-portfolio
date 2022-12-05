import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="banner">
      <h1>Hi, I'm Tiarnan.</h1>
      <h1>I build web apps.</h1>
      <p>I'm a computer science graduate currently focusing on building and designing web applications.</p>
      <Link to="/">Learn more about me</Link>
    </section>
  )
}

export default Banner