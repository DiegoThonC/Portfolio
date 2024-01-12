import './Services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User-Centered Design (UCD).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability Principles.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Information Architecture.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wireframing and Prototyping.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Accessibility.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Testing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance Optimization.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Performance Optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Accessibility (a11y).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Standards.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-Browser Compatibility.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Security.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web Hosting and Deployment.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Continuous Learning.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services