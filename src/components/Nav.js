import { useState } from 'react'
import { FiX, FiMenu } from 'react-icons/fi'

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav className={toggle ? 'navbar expanded' : 'navbar'}>
      <div className='toggle-icon' onClick={handleToggle}>
        {toggle ? <FiX size={36} /> : <FiMenu size={36} />}
      </div>
      <ul className='links'>
        <li><a href="#top">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#project">Portfolio</a></li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Nav