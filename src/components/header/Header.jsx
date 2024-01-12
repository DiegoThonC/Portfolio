import './Header.css';
import CTA from './CTA';
import ME from '../../assets/portfolio-avatar.png';
import HeaderSocials from './HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey There, I'm</h5>
        <h1>Diego Thon</h1>
        <h5 className="text-light">A very enthusiastic Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Go Down</a>

      </div>
    </header>
  )
}

export default Header