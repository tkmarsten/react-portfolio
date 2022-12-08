import { FiGithub, FiMail } from 'react-icons/fi'
import { SiLeetcode, SiLinkedin } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <h5>Tiarnan Marsten 2022</h5>
      <div className="footer-links">
        <a href="mailto:tkmarsten@gmail.com">
          <FiMail />
        </a>
        <a href="https://github.com/tkmarsten" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/tkmarsten/" target="_blank" rel="noreferrer">
          <SiLinkedin />
        </a>
        <a href="https://leetcode.com/tkmarsten/" target="_blank" rel="noreferrer">
          <SiLeetcode />
        </a>
      </div>
    </footer>
  )
}

export default Footer