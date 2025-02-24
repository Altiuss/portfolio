import AbautImage from '../../assets/about.jpg'
import { HiDownload } from 'react-icons/hi';
import Card from '../../components/Card';
import data from './data';
import './about.css';

const About = () => {
  return (
    <section id='about'>
      <div className="container abaut__container">
        <div className="abaut__left">
          <div data-aos="fade-right" className="abaut__portrait">
            <img src={AbautImage} alt="Abaut image" />
          </div>
        </div>
        <div className="abaut__right">
          <h2>Abaut Me</h2>
          <div className="abaut__cards">
            {
              data.map(item =>
              (<Card key={item.id} className="abaut__card">
                <span className='abaut__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>))}
          </div>
          <p>
            Building projects my clients love have always been my passion.
            Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide,
            I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Aigars Alutis from Berlin, Germany. I'm a full-stack web developer.
            My top priority is to get your business online the right way,
            giving you industry-standard design and all the functionality you need to operate smoothly online.
            Get in touch today with the details of your project,
            let's get started! Check out my resume below!
          </p>
          <a href={`${process.env.PUBLIC_URL}/cv.pdf`} download className='btn primary'>Download CV<HiDownload /></a>
        </div>
      </div>


    </section>
  )
}

export default About