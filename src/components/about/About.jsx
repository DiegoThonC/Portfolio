import './About.css';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {BsFolderCheck} from 'react-icons/bs';

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>8</small>
            </article>
            <article className="about__card">
              <BsFolderCheck className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed</small>
            </article>
          </div>
          <p>
            I'm a front-end developer with experience in Angular and React. Making my own path to be a Fullstack Developer. I have worked on several 
            projects using these technologies, and I have a good understanding of how to integrate them to create robust and scalable web applications.
            <br />
            <br />
            I'm a person who is passionate about learning and improving my skills in technology.
            <br />
            <br />
            I'm organized and detail-oriented and I strive to deliver high-quality work within the agreed deadline. In addition, I enjoy
            working in a team and a good communicator, which allows me to collaborate effectively with others.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default about