import './Portfolio.css';
import Crypto from '../../assets/crypto.png';
import Anime from '../../assets/anime-tracker.png';
import Archive from '../../assets/archive-iananu.png';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Crypto} alt="Crypto_alt" />
          </div>
          <h3>Crypto Compare</h3>
          <p>Project aimed at displaying and calculating the various prices of cryptocurrencies and their value in the local currency.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DiegoThonC/CryptoCompare" target='_blank' rel='noreferrer' className='btn'>GitHub</a>
            <a href="https://comparing-crypto.netlify.app/" target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Anime} alt="Crypto_alt" />
          </div>
          <h3>Anime Tracker</h3>
          <p>Project created to search and select favorite anime, whether already watched or to be watched, and keep a record of their episodes.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DiegoThonC/AnimeTracker" target='_blank' rel='noreferrer' className='btn'>GitHub</a>
            <a href="https://tracker-anime.netlify.app/" target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Archive} alt="Crypto_alt" />
          </div>
          <h3>Archive Iananu</h3>
          <p>"Digital Memory Storage" - the project of the Scientific Archive of the Institute of Archaeology of the Ukrainian Academy of Sciences. It binds together 2 projects (to be continued): Khvedir Vovk's digital Archive and Serhii Hamchenko's digital Archive.</p>
          <div className="portfolio__item-cta">
            <a href="https://github.com/DiegoThonC/Landing-UA" target='_blank' rel='noreferrer' className='btn'>GitHub</a>
            <a href="https://archive.iananu.com/" target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio