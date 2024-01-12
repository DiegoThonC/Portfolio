import './Footer.css';
import {BiLogoGithub, BiLogoStackOverflow, BiLogoLinkedinSquare} from 'react-icons/bi';

const Footer = () => {

  const date =  new Date().getFullYear();

  return (
    <footer>
      <ul className='permalinks'>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">PortFolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href="https://github.com/DiegoThonC" target='_blank' rel='noreferrer'><BiLogoGithub /></a>
        <a href="https://stackoverflow.com/users/10534223/diego-esteban-thon-cortes" target='_blank' rel='noreferrer'><BiLogoStackOverflow /></a>
        <a href="https://www.linkedin.com/in/diego-thon-cortes" target='_blank' rel='noreferrer'><BiLogoLinkedinSquare /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; {date} - Diego Thon</small>
      </div>
    </footer>
  )
}

export default Footer